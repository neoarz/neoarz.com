import type { Action } from 'svelte/action';

interface TrailSegment {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	time: number;
	radius: number;
	retractDuration: number;
	noiseOffset: number;
}

export interface AsciiGlowOptions {
	text: string;
	baseColor?: string;
	glowColor?: string;
	backgroundColor?: string;
	fontSize?: number;
}

const FAST_RADIUS = 40;
const SLOW_RADIUS = 32;
const RETRACT_DELAY = 1500;
const RETRACT_MIN = 1000;
const RETRACT_MAX = 2000;
const MAX_TRAIL = 150;
const FONT_FAMILY = "'SF Mono', 'Monaco', 'Courier New', monospace";

export const asciiGlow: Action<HTMLElement, AsciiGlowOptions> = (node, options) => {
	const baseColor = options.baseColor ?? '#7c7c88';
	const glowColor = options.glowColor ?? '#ffffff';
	const backgroundColor = options.backgroundColor ?? '#0a0a0a';
	const fontSize = options.fontSize ?? 5;

	const rows = options.text.split('\n');
	const numRows = rows.length;
	const numCols = Math.max(...rows.map((r) => r.length));

	const canvas = document.createElement('canvas');
	canvas.style.position = 'absolute';
	canvas.style.bottom = '0';
	canvas.style.right = '0';
	node.appendChild(canvas);
	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const font = `${fontSize}px ${FONT_FAMILY}`;
	ctx.font = font;
	const cw = ctx.measureText('M').width;
	const ch = fontSize;
	const width = numCols * cw;
	const height = numRows * ch;

	const dpr = window.devicePixelRatio || 1;
	canvas.width = Math.round(width * dpr);
	canvas.height = Math.round(height * dpr);
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';
	ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	ctx.font = font;
	ctx.textBaseline = 'top';

	function drawBase() {
		if (!ctx) return;
		ctx.fillStyle = baseColor;
		for (let row = 0; row < numRows; row++) {
			ctx.fillText(rows[row], 0, row * ch);
		}
	}
	drawBase();

	function repaintCell(row: number, col: number, color: string) {
		if (!ctx) return;
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(col * cw, row * ch, cw, ch);
		const char = rows[row][col];
		if (char && char !== ' ') {
			ctx.fillStyle = color;
			ctx.fillText(char, col * cw, row * ch);
		}
	}

	let canvasRect = canvas.getBoundingClientRect();
	const trail: TrailSegment[] = [];
	let lastX: number | null = null;
	let lastY: number | null = null;
	let lastTime: number | null = null;
	let lit = new Set<number>();
	let hovering = false;
	let frame: number | null = null;

	const updateRect = () => {
		canvasRect = canvas.getBoundingClientRect();
	};

	function noise(x: number, y: number, t: number): number {
		return Math.sin(x * 0.1 + t) * Math.cos(y * 0.1 + t * 0.7) * 0.3;
	}

	function distSqToSegment(
		px: number,
		py: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number
	): number {
		const dx = x2 - x1;
		const dy = y2 - y1;
		const lenSq = dx * dx + dy * dy;
		if (lenSq === 0) return (px - x1) ** 2 + (py - y1) ** 2;
		let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
		t = Math.max(0, Math.min(1, t));
		return (px - (x1 + t * dx)) ** 2 + (py - (y1 + t * dy)) ** 2;
	}

	function renderLoop() {
		const now = Date.now();
		const t = now / 1000;

		while (trail.length && now - trail[0].time > RETRACT_DELAY + trail[0].retractDuration) {
			trail.shift();
		}

		const segs = [];
		for (const s of trail) {
			const age = now - s.time;
			let scale = 1;
			if (age > RETRACT_DELAY) scale = 1 - Math.min(1, (age - RETRACT_DELAY) / s.retractDuration);
			if (scale > 0) {
				segs.push({
					x1: s.x1,
					y1: s.y1,
					x2: s.x2,
					y2: s.y2,
					radius: s.radius * scale,
					radiusSq: (s.radius * scale) ** 2,
					noiseOffset: s.noiseOffset
				});
			}
		}

		const next = new Set<number>();
		for (const s of segs) {
			const maxR = s.radius * 1.3;
			const minCol = Math.max(0, Math.floor((Math.min(s.x1, s.x2) - maxR) / cw));
			const maxCol = Math.min(numCols - 1, Math.ceil((Math.max(s.x1, s.x2) + maxR) / cw));
			const minRow = Math.max(0, Math.floor((Math.min(s.y1, s.y2) - maxR) / ch));
			const maxRow = Math.min(numRows - 1, Math.ceil((Math.max(s.y1, s.y2) + maxR) / ch));

			for (let row = minRow; row <= maxRow; row++) {
				const line = rows[row];
				for (let col = minCol; col <= maxCol && col < line.length; col++) {
					if (line[col] === ' ') continue;
					const key = row * numCols + col;
					if (next.has(key)) continue;
					const x = (col + 0.5) * cw;
					const y = (row + 0.5) * ch;
					const dSq = distSqToSegment(x, y, s.x1, s.y1, s.x2, s.y2);
					if (dSq > s.radiusSq * 2) continue;
					const organic = (s.radius * (1 + noise(x + s.noiseOffset, y + s.noiseOffset, t))) ** 2;
					if (dSq < organic) next.add(key);
				}
			}
		}

		for (const key of lit) {
			if (!next.has(key)) repaintCell(Math.floor(key / numCols), key % numCols, baseColor);
		}
		for (const key of next) {
			if (!lit.has(key)) repaintCell(Math.floor(key / numCols), key % numCols, glowColor);
		}
		lit = next;

		if (hovering || trail.length) frame = requestAnimationFrame(renderLoop);
		else frame = null;
	}

	function start() {
		if (frame === null) frame = requestAnimationFrame(renderLoop);
	}

	const onEnter = () => {
		hovering = true;
		updateRect();
		start();
	};
	const onLeave = () => {
		hovering = false;
		lastX = lastY = lastTime = null;
	};
	const onMove = (e: MouseEvent) => {
		const now = Date.now();
		const x = e.clientX - canvasRect.left;
		const y = e.clientY - canvasRect.top;
		if (lastX !== null && lastY !== null && lastTime !== null) {
			const dist = Math.hypot(x - lastX, y - lastY);
			const dt = now - lastTime;
			const speed = dt > 0 ? dist / dt : 0;
			trail.push({
				x1: lastX,
				y1: lastY,
				x2: x,
				y2: y,
				time: now,
				radius: speed > 0.5 ? FAST_RADIUS : SLOW_RADIUS,
				retractDuration: RETRACT_MIN + Math.random() * (RETRACT_MAX - RETRACT_MIN),
				noiseOffset: Math.random() * 1000
			});
		}
		lastX = x;
		lastY = y;
		lastTime = now;
		while (trail.length > MAX_TRAIL) trail.shift();
	};

	node.addEventListener('mouseenter', onEnter);
	node.addEventListener('mouseleave', onLeave);
	node.addEventListener('mousemove', onMove);
	window.addEventListener('resize', updateRect);

	return {
		destroy() {
			if (frame !== null) cancelAnimationFrame(frame);
			node.removeEventListener('mouseenter', onEnter);
			node.removeEventListener('mouseleave', onLeave);
			node.removeEventListener('mousemove', onMove);
			window.removeEventListener('resize', updateRect);
			canvas.remove();
		}
	};
};

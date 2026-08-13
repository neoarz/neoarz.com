<script lang="ts">
	import { onMount } from 'svelte';
	import { asciiGlow } from '$lib/actions/asciiGlow';
	import asciiArt from '$lib/assets/ascii.txt?raw';

	let isMobile = $state(false);
	let mounted = $state(false);

	onMount(() => {
		isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
			'ontouchstart' in window ||
			window.innerWidth < 768;
		mounted = true;
	});
</script>

{#if mounted && !isMobile}
	<div class="ascii-art" use:asciiGlow={{ text: asciiArt }}></div>
{/if}

<style>
	.ascii-art {
		position: fixed;
		top: 25%;
		left: 700px;
		right: -830px;
		bottom: 0;
		z-index: 1;
		overflow: hidden;
		cursor: default;
		opacity: 1;
		transition: opacity 0.4s ease;
		-webkit-mask-image:
			linear-gradient(to left, black 0px, black 900px, rgb(0 0 0 / 0.4) 1700px, transparent 2300px),
			linear-gradient(to right, transparent 0px, black 150px),
			linear-gradient(to top, rgb(0 0 0 / 0.8) 0px, rgb(0 0 0 / 0.45) 300px, transparent 650px);
		-webkit-mask-composite: source-in;
		mask-image:
			linear-gradient(to left, black 0px, black 900px, rgb(0 0 0 / 0.4) 1700px, transparent 2300px),
			linear-gradient(to right, transparent 0px, black 150px),
			linear-gradient(to top, rgb(0 0 0 / 0.8) 0px, rgb(0 0 0 / 0.45) 300px, transparent 650px);
		mask-composite: intersect;
	}
	.ascii-art :global(canvas) {
		animation: art-enter 1.4s ease-out both;
	}
	@keyframes art-enter {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.ascii-art :global(canvas) {
			animation: none;
		}
	}
	@media (max-aspect-ratio: 6/5) {
		.ascii-art {
			opacity: 0;
			pointer-events: none;
		}
	}
</style>

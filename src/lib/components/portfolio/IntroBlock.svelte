<script lang="ts">
	interface Props {
		name: string;
		handle: string;
		bio: string;
	}

	let { name, handle, bio }: Props = $props();
</script>

<section class="mb-8" aria-labelledby="intro-heading">
	<header class="mb-4 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
		<h1 id="intro-heading" class="m-0 min-w-0 flex-1 text-base leading-[1.6] font-semibold">
			Hello, I'm {name}
			<span class="text-(--accent)">({handle})</span>
		</h1>

		<nav class="flex shrink-0 items-center gap-3" aria-label="Webring navigation">
			<a href="https://ring.liampas.ca/left" rel="external noopener">[←]</a>
			<a href="https://ring.liampas.ca/" rel="external noopener" class="gif-link">
				<img
					src="https://axelobrien.neocities.org/assets/sylvan-webring.gif"
					alt="[???] webring"
					class="h-6 w-auto"
				/>
			</a>
			<a href="https://ring.liampas.ca/right" rel="external noopener">[→]</a>
		</nav>
	</header>

	<p class="m-0 leading-[1.65] text-(--text)">{bio}</p>
</section>

<style>
	.gif-link::after {
		display: none;
	}
</style>

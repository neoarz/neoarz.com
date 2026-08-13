<script lang="ts">
	import { asset } from '$app/paths';

	interface Props {
		name: string;
		bioLines: string[];
	}

	let { name, bioLines }: Props = $props();
</script>

<section aria-labelledby="intro-heading">
	<header class="mb-3.5 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
		<h1 id="intro-heading" class="m-0 min-w-0 flex-1 text-sm font-bold">hello, i'm {name}</h1>

		<nav class="flex shrink-0 items-center gap-3" aria-label="Webring navigation">
			<a href="https://ring.liampas.ca/left">[←]</a>
			<a href="https://ring.liampas.ca/" class="gif-link">
				<img src={asset('/sylvan-webring.gif')} alt="[???] webring" class="h-6 w-auto" />
			</a>
			<a href="https://ring.liampas.ca/right">[→]</a>
		</nav>
	</header>

	<ul class="m-0 list-none p-0">
		{#each bioLines as line (line)}
			<li class="mb-3.5">{line}</li>
		{/each}
	</ul>
</section>

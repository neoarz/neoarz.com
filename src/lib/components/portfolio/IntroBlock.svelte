<script lang="ts">
	interface Props {
		name: string;
		bioLines: string[];
	}

	let { name, bioLines }: Props = $props();
</script>

<section aria-labelledby="intro-heading">
	<h1 id="intro-heading" class="m-0 mb-3.5 text-sm font-bold">hello, i'm {name}</h1>

	<ul class="m-0 list-none p-0">
		{#each bioLines as line (line)}
			<li class="mb-3.5">{line}</li>
		{/each}
	</ul>
</section>

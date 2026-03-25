<script lang="ts">
	import type { ProjectItem } from '$lib/types/portfolio';

	interface Props {
		projects: ProjectItem[];
	}

	let { projects }: Props = $props();
</script>

<section class="mb-8" aria-labelledby="projects-heading">
	<h2 id="projects-heading" class="mb-3 text-base text-(--accent)">Projects</h2>

	<ul class="m-0 list-disc space-y-4 pl-[1.35rem]">
		{#each projects as project (project.id)}
			<li class="leading-[1.7]">
				<h3 class="m-0 mb-[0.15rem] text-base">
					{#if project.href}
						<a href={project.href} target="_blank" rel="external noreferrer">{project.name}</a>
					{:else}
						{project.name}
					{/if}
				</h3>
				<p class="m-0 leading-[1.6] text-(--muted)">{project.description}</p>
			</li>
		{/each}
	</ul>
</section>

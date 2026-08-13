<script lang="ts">
	import type { ProjectItem } from '$lib/types/portfolio';

	interface Props {
		projects: ProjectItem[];
	}

	let { projects }: Props = $props();
</script>

<section aria-labelledby="projects-heading">
	<h2 id="projects-heading" class="mt-10 mb-3.5 text-sm font-bold">projects</h2>

	<ul class="m-0 list-none p-0">
		{#each projects as project (project.id)}
			<li class="mb-3.5">
				<a href={project.href} class="underline" target="_blank" rel="external noopener noreferrer"
					>{project.name}</a
				>
				— {project.description}
			</li>
		{/each}
	</ul>
</section>

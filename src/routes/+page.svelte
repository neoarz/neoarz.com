<script lang="ts">
	import AsciiSkyline from '$lib/components/portfolio/AsciiSkyline.svelte';
	import IntroBlock from '$lib/components/portfolio/IntroBlock.svelte';
	import ProjectList from '$lib/components/portfolio/ProjectList.svelte';
	import SocialLinks from '$lib/components/portfolio/SocialLinks.svelte';
	import { portfolio } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>{portfolio.seoTitle}</title>
	<meta name="description" content={portfolio.seoDescription} />
</svelte:head>

<main class="max-w-[600px] p-10 text-sm leading-[1.7]">
	<IntroBlock name={portfolio.name} bioLines={portfolio.bioLines} />
	<ProjectList projects={portfolio.projects} />
	<SocialLinks socials={portfolio.socials} />
</main>

<AsciiSkyline />

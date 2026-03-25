<script lang="ts">
	import type { SocialLink } from '$lib/types/portfolio';

	interface Props {
		socials: SocialLink[];
	}

	let { socials }: Props = $props();
</script>

<section class="mb-8" aria-labelledby="socials-heading">
	<h2 id="socials-heading" class="mb-3 text-base text-(--accent)">Socials</h2>

	<ul class="m-0 list-disc pl-[1.35rem]">
		{#each socials as social (social.id)}
			<li class="leading-[1.7]">
				<span class="text-(--text)">{social.platform}:</span>
				<a href={social.href} target="_blank" rel="external noreferrer">{social.displayText}</a>
			</li>
		{/each}
	</ul>
</section>

<script lang="ts">
	import type { SocialLink } from '$lib/types/portfolio';

	interface Props {
		socials: SocialLink[];
	}

	let { socials }: Props = $props();
</script>

<p class="mt-10">
	{#each socials as social, i (social.id)}
		<a href={social.href} class="underline" target="_blank" rel="external noopener noreferrer"
			>{social.label}</a
		>{#if i < socials.length - 1}&nbsp;||
		{/if}
	{/each}
</p>

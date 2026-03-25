<script lang="ts">
	interface Props {
		name: string;
		handle: string;
		handleUrl: string;
		bio: string;
		languageName: string;
	}

	let { name, handle, handleUrl, bio, languageName }: Props = $props();
</script>

<section class="mb-8" aria-labelledby="intro-heading">
	<header class="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
		<h1 id="intro-heading" class="m-0 text-base leading-[1.6] font-semibold">
			Hello, I'm {name}
			<a class="text-(--accent)" href={handleUrl} target="_blank" rel="external noreferrer">
				({handle})
			</a>
		</h1>

		<div
			class="shrink-0 bg-(--accent) px-[0.65rem] py-[0.15rem] text-[0.8rem] text-white"
			aria-label="Language badge"
		>
			{languageName}
		</div>
	</header>

	<p class="m-0 leading-[1.65] text-(--text)">{bio}</p>
</section>

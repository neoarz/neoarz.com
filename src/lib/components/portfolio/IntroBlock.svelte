<script lang="ts">
	interface Props {
		name: string;
		handle: string;
		bio: string;
		languageName: string;
	}

	let { name, handle, bio, languageName }: Props = $props();
</script>

<section class="mb-8" aria-labelledby="intro-heading">
	<header class="mb-4 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
		<h1 id="intro-heading" class="m-0 min-w-0 flex-1 text-base leading-[1.6] font-semibold">
			Hello, I'm {name}
			<span class="text-(--accent)">({handle})</span>
		</h1>

		<div
			class="shrink-0 bg-(--accent) px-[0.65rem] py-[0.15rem] text-[0.8rem] whitespace-nowrap text-white"
			aria-label="Language badge"
		>
			{languageName}
		</div>
	</header>

	<p class="m-0 leading-[1.65] text-(--text)">{bio}</p>
</section>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const isNotFound = $derived(page.status === 404);
	const message = $derived(
		isNotFound
			? "The page you're looking for doesn't exist or may have moved."
			: (page.error?.message ?? 'An unexpected error occurred.')
	);
</script>

<svelte:head>
	<title>{page.status}</title>
</svelte:head>

<main class="mx-auto grid min-h-svh w-full max-w-240 place-items-center px-6 py-8 sm:px-8 sm:py-10">
	<section class="w-full">
		<h1 class="error-code m-0 font-semibold tracking-tight text-(--accent)">{page.status}</h1>
		<p class="mt-2 max-w-2xl leading-[1.7] text-(--muted)">{message}</p>

		<a class="mt-6 inline-block text-(--accent)" href={resolve('/')}>Return home</a>
	</section>
</main>

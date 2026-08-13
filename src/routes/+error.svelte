<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	onMount(() => {
		goto(resolve('/'), { replaceState: true });
	});
</script>

<svelte:head>
	<title>{page.status}</title>
	<meta http-equiv="refresh" content="0; url=/" />
</svelte:head>

<main class="max-w-[600px] p-10 text-sm leading-[1.7]">
	<p class="m-0">
		<a href={resolve('/')} class="underline">redirecting home...</a>
	</p>
</main>

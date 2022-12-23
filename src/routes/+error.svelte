<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} Tiempo | Weather & Forecast app</title>
	<meta name="description" content="" />
</svelte:head>

<section
	class="absolute inset-0 flex flex-col items-center justify-center bg-white px-4 dark:bg-slate-900 dark:text-white sm:px-10"
>
	<div class="mx-4 max-w-full overflow-auto sm:mx-10">
		<h1 class="text-center text-3xl font-bold">{$page.status}</h1>
		<p class="mt-4 text-center text-xl font-normal">{$page.error.message}</p>
	</div>
</section>

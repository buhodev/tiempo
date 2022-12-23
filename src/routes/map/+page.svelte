<script lang="ts">
	import type { Location, Current } from '$lib/types';
	import 'leaflet/dist/leaflet.css';
	import Header from '$lib/components/Header.svelte';
	import Map from '$lib/components/Map.svelte';

	// export let current: Current, location: Location;
	export let data;
</script>

<svelte:head>
	<title>Map - Tiempo | Weather & Forecast app</title>
	<meta name="description" content="" />
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col dark:bg-slate-900">
	<div class="flex items-center border-b border-slate-900/10 dark:border-slate-600 md:border-0">
		<Header title={`${data.location.name}, ${data.location.country}`} />
	</div>

	{#key data.location}
		<Map location={data.location} current={data.current} />
	{/key}
</div>

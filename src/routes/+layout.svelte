<script>
	import '../app.css';
	import '../scrollbar.css';
	import Overlay from '$lib/components/Overlay.svelte';
	import NavContent from '$lib/components/NavContent.svelte';
	import SvelteTheme from '$lib/components/SvelteThemes/SvelteTheme.svelte';
</script>

<div class="h-screen sm:flex">
	<aside
		class="hidden h-screen w-72 overflow-y-auto border-r border-slate-200 py-4 px-3 dark:border-slate-700 dark:bg-slate-900 lg:block"
	>
		<NavContent />
	</aside>

	<slot />
</div>

<SvelteTheme attribute="class" />

<Overlay />

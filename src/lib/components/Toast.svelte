<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	// const dispatch = createEventDispatcher();

	export let type: 'error' | 'success' | 'info' = 'info';
	export let dismissible = false;
</script>

<article
	class="{type == 'info'
		? 'bg-neutral-800/90'
		: ''} mx-auto mt-0 mb-2 flex max-w-xs items-center rounded border border-white/10 border-b-white/5 py-1.5 px-4 text-white backdrop-blur-md will-change-transform"
	class:bg-red-600={type == 'error'}
	class:bg-green-600={type == 'success'}
	role="alert"
	transition:fly={{ y: 10, duration: 300, opacity: 0 }}
>
	<slot />

	<!-- {#if dismissible}
		<button
			class="text-white leading-none"
			on:click={() => dispatch('dismiss')}>close</button
		>
	{/if} -->
</article>

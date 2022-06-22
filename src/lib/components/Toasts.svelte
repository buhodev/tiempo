<script lang="ts">
	import Toast from '$lib/components/Toast.svelte';
	import { dismissToast, toasts } from '$lib/stores';
</script>

{#if $toasts}
	<section
		class="pointer-events-none fixed top-0 left-0 right-0 z-[1000] mt-4 flex w-full flex-col justify-center"
	>
		{#each $toasts as toast (toast.id)}
			<Toast type={toast.type} on:dismiss={() => dismissToast(toast.id)}>
				{toast.message}
			</Toast>
		{/each}
	</section>
{/if}

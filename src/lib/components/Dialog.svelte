<script lang="ts">
	import { Dialog, DialogOverlay, DialogTitle } from '@rgossiaux/svelte-headlessui';
	import { scale, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let isOpen = true;
	let status = '';

	function closeModal() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<Dialog
		as="div"
		open={isOpen}
		class="fixed inset-0 z-[9999] overflow-y-auto"
		on:open={() => (status = 'hello')}
		on:close={closeModal}
	>
		<div class="min-h-screen px-4 text-center">
			<div transition:fade={{ duration: 100 }}>
				<DialogOverlay class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
			</div>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
			<div
				transition:scale={{ start: 0.95, duration: 300, easing: cubicInOut, opacity: 0 }}
				on:introstart={() => (status = 'intro started')}
				on:outrostart={() => (status = 'outro started')}
				on:introend={() => (status = 'intro ended')}
				on:outroend={() => (status = 'outro ended')}
				class:rounded-2xl={status == 'intro started' || status == 'outro started'}
				class="absolute inset-0 inline-block w-full transform overflow-hidden bg-white p-6 text-left align-middle transition-all dark:bg-slate-800 sm:relative sm:my-8 sm:max-w-md sm:rounded-2xl sm:shadow-xl"
			>
				<slot {closeModal} />
			</div>
		</div>
	</Dialog>
{/if}

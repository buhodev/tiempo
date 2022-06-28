<script lang="ts">
	import { DialogTitle } from '@rgossiaux/svelte-headlessui';
	import Dialog from '$lib/components/Dialog.svelte';
	import { savedLocations, deleteLocation } from '$lib/stores/savedLocations';

	export let isSavedLocationsOpen = false;
</script>

<Dialog bind:isOpen={isSavedLocationsOpen}>
	<svelte:fragment let:closeModal>
		<DialogTitle as="h3" class="text-lg text-gray-900 dark:text-white">Saved Locations</DialogTitle>

		<ul class="mt-4 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700">
			{#each $savedLocations as { name, id } (id)}
				<li class="flex items-center justify-between">
					<a href="#" class="font-medium leading-5">{name}</a>
					<button
						on:click={() => deleteLocation(name)}
						class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-2 py-1 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-red-600 dark:text-red-100 dark:focus-visible:ring-offset-slate-800"
						>delete</button
					>
				</li>
			{:else}
				<li>There are no saved locations.</li>
			{/each}
		</ul>

		<div class="mt-6">
			<button
				type="button"
				class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-600 dark:text-sky-100 dark:focus-visible:ring-offset-slate-800"
				on:click={closeModal}
			>
				Close
			</button>
		</div>
	</svelte:fragment>
</Dialog>

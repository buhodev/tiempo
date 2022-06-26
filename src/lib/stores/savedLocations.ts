import { writable } from '$lib/stores/localStorage';
import { get } from 'svelte/store';
import { addToast } from '$lib/stores/toast';

type Location = {
	id?: number;
	name: string;
};

export const savedLocations = writable('saved_locations', []);

export const addLocation = (locationEntry: Location) => {
	const id = Math.floor(Math.random() * 10000);
	const defaultLocation: Location = {
		id,
		name: ''
	};

	if (get(savedLocations).some((e: Location) => e.name === locationEntry.name)) {
		addToast({ type: 'info', timeout: 3000, message: 'Location already saved' });
		return;
	}
	savedLocations.update((all) => [{ ...defaultLocation, ...locationEntry }, ...all]);
	addToast({ type: 'info', timeout: 3000, message: 'Location saved' });
};

export const deleteLocation = (location: Location['name']) => {
	savedLocations.update((all) =>
		all.filter((locationEntry: Location) => locationEntry.name !== location)
	);
};

export const clearAll = () => {
	savedLocations.update(() => []);
};

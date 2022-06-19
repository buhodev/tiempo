import { writable } from 'svelte/store';

type ToastOptions = {
	id?: number;
	type: 'error' | 'success' | 'info';
	dismissible?: boolean;
	timeout: number;
	message: string;
};

function createToggle() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		open: () => set(true),
		close: () => set(false)
	};
}

export const overlay = createToggle();

export const settings = writable({ tempUnit: 'temp_c', windVelUnit: 'wind_kph' });

export const toasts = writable([]);

export const addToast = (toast: ToastOptions) => {
	const id = Math.floor(Math.random() * 10000);

	const defaults: ToastOptions = {
		id,
		type: 'info',
		dismissible: false,
		timeout: 3000,
		message: 'Hello!'
	};

	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

	if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

export const dismissToast = (id: ToastOptions['id']) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};

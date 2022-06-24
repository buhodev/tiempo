import { writable } from 'svelte/store';

export const settings = writable({ tempUnit: 'temp_c', windVelUnit: 'wind_kph' });

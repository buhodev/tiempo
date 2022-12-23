
import { error as $error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const { searchParams } = url;
	const query = searchParams.get('q');

	const res = await fetch(`/api/current?${query == null ? '' : 'q=' + query}`);

	const { data, ok, error } = await res.json();

	if (!ok) {
		console.log(error);
		throw $error(400, "Not found");
	}

	const { current, location } = data;

	return { current, location };
}


import { error as $error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const { searchParams } = url;
	const query = searchParams.get('q');

	const res = await fetch(`/api/current?${query == null ? '' : 'q=' + query}`);

	const { data, ok, error } = await res.json();

	if(query == null) throw redirect(307, `/map?q=${data.location.name}`)

	if (!ok) {
		console.log(error);
		throw $error(400, "Not found");
	}

	const { current, location } = data;

	return { current, location };
}

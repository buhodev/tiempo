import { error as $error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
	const { searchParams } = url;
	const query = searchParams.get('q');

	const res = await fetch(`/api/forecast?${query == null ? '' : 'q=' + query}`);

	const { data, ok, error } = await res.json();

	if(query == null) throw redirect(307, `/?q=${data.location.name}`)

	if (!ok) {
		// throw error(400, error.message);
		throw $error(400, "Not found");
	}

	const {
		current,
		location,
		forecast: { forecastday }
	} = data;

	return { current, location, forecastday };
}

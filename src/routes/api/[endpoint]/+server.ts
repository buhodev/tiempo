import { json as json$1 } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Location, Current, Forecast } from '$lib/types';

import { RAPIDAPI_HOST, RAPIDAPI_KEY } from '$lib/data/env';

const ENDPOINTS = ['current', 'forecast'];

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': RAPIDAPI_HOST,
		'X-RapidAPI-Key': RAPIDAPI_KEY
	}
};

async function getWeatherData({ endpoint, query, lang }) {
	const response = await fetch(
		`https://${RAPIDAPI_HOST}/${endpoint}.json?q=${query}&lang=${lang}&days=3`,
		FETCH_OPTIONS
	);
	return await response.json();
}

/** @type {import('./$types').RequestHandler} */
export async function GET(event: RequestEvent) {
	const {
		getClientAddress,
		params,
		url: { searchParams }
	} = event;
	const query = searchParams.get('q') ?? getClientAddress;
	const lang = searchParams.get('lang') ?? 'es';
	const { endpoint } = params;

	if (!ENDPOINTS.includes(endpoint)) {
		return json$1({
			ok: false,
			error: {
				code: 1005,
				message: 'API request url is invalid'
			}
		}, {
			status: 400
		});
	}

	try {
		const data = await getWeatherData({ endpoint, query, lang });

		if (data?.error) {
			return json$1({
				ok: false,
				error: data.error
			}, {
				status: 400
			});
		}

		return json$1({
			ok: true,
			data
		});
	} catch (error) {
		return json$1({
			ok: false,
			error: {
				code: 0,
				message: 'Request failed'
			}
		}, {
			status: 400
		});
	}
}

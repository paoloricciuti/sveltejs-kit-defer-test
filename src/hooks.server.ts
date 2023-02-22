import { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const newRequest = event.request.clone();
	newRequest.headers.set('Accept-Encoding', 'gzip');
	event.request = newRequest;
	const response = await resolve(event);
	return response;
};

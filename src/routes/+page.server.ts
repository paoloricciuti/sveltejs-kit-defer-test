const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function getBlog() {
	await wait(2000);
	return 'A cool blog post';
}

async function getComments() {
	await wait(5000);
	return ['Very cool', 'Super', 'Fantastic'];
}

async function getRecommended() {
	await wait(1000);
	return ['Another post', 'Suh interesting'];
}

async function getFail() {
	await wait(8000);
	return ['Another ppp', 'Suh interesting'];
}

export async function load() {
	const recommended = getRecommended();
	const comments = getComments();
	const fail = getFail();
	const blog = getBlog();
	return {
		blog,
		defer: {
			recommended,
			comments,
			fail
		}
	};
}

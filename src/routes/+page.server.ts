const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function getBlog() {
	await wait(2000);
	return 'A cool blog post';
}

async function getComments() {
	await wait(4000);
	return ['Very cool', 'Super', 'Fantastic'];
}

async function getRecommended() {
	await wait(1000);
	return ['Another post', 'Suh interesting'];
}

async function getFail() {
	await wait(8000);
	throw new Error('Dang!');
}

export async function load() {
	const recommended = getRecommended();
	const comments = getComments();
	const fail = getFail();
	const blog = await getBlog();
	return {
		blog,
		recommended: {
			lazy: recommended
		},
		comments: {
			lazy: comments
		},
		fail: {
			lazy: fail
		}
	};
}

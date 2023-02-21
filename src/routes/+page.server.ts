const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function getBlog() {
	await wait(5000);
	return 'A cool blog post';
}

async function getComments() {
	await wait(9000);
	return ['Very cool', 'Super', 'Fantastic'];
}

async function getRecommended() {
	await wait(3000);
	return ['Another post', 'Suh interesting'];
}

async function getFail() {
	await wait(15000);
	throw new Error('Dang!');
}

function logAndReturn(name: string) {
	return (res) => {
		console.log('Got ', name);
		return res;
	};
}

export async function load() {
	const recommended = getRecommended().then(logAndReturn('recommended'));
	const comments = getComments().then(logAndReturn('comments'));
	const fail = getFail();
	const blog = await getBlog();
	return {
		blog,
		defer: {
			recommended,
			comments,
			fail
		}
	};
}

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

export function load() {
	return {
		blog: getBlog(),
		defer: {
            recommended: getRecommended(),
			comments: getComments(),
		}
	};
}

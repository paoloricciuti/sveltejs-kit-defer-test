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
	await wait(6000);
	return ['Another ppp', 'Suh interesting'];
}

async function getFailTwo() {
	await wait(9000);
	return ['Another ppp', 'Suh interesting'];
}

export async function load({setHeaders}) {
	
	const recommended = getRecommended();
	const comments = getComments();
	const fail = getFail();
	const blog = getBlog();
	const failTwo = getFail();
	return {
		blog,
		recommended: {
			recommended
			
		},
		comments: {

			comments
		
		},
		fail: {

			fail
		
		},
		failTwo: {

			failTwo
		
		},
	};
}

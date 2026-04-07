export default async function getGoal() {
	try {
		const response = await fetch(
			'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCNJjFLxdmJVpMOTWdM559y5wWzxZ2ZFlxfmEBhXyx5KlKNLK2Nj0y6H9HXxoWHiQOrIVjcNDDDu1G/pub?output=csv'
		);

		if (!response.ok) {
			throw new Error('Fetch failed with statis' + response.status);
		}

		const csv = (await response.text()).replace('\r', '');
		const data = csv.replace('\n', ',').split(',');

		const o = {
			collected: +data[2],
			goal: +data[3]
		};

		if (o.collected > o.goal) {
			throw new Error('Mistake in the google sheet');
		}

		if (!o.collected || !o.goal) {
			throw new TypeError(
				`The object does not contain numeric values, check the csv file \n
                you received ${o.collected} and ${o.goal} `
			);
		}
		return o;
	} catch (e) {
		console.error(e.message);
		throw e;
	}
}

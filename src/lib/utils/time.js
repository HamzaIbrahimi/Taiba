/*
Since the csv file does not consider daylight saving times
We create a helper functions that will ease this process
The csv files gives us the time in hours:minutes hence we can increment the hour by one
if we are in DST
*/
import times from '$lib/data/times.json';

const pad = n => (n < 10 ? '0' + n : n);

export function addOneHour(time, date = new Date()) {
	if (date.getTimezoneOffset() === -120) {
		const splitTime = time.split(':');
		const incrementedHour = (Number(splitTime[0]) + 1) % 24;
		return `${pad(incrementedHour)}:${splitTime[1]}`;
	}
	return time;
}

export default function todaysPrayerTimes(today = new Date()) {
	let [day, month] = [today.getDate(), today.getMonth() + 1];
	let prayers = times[`${day}-${month}`];
	for (const key in prayers) {
		prayers[key] = addOneHour(prayers[key], today);
	}
	return prayers;
}

export function prayerTimesInAMonth(month) {
	let o = {};
	for (const key in times) {
		let m = key.split('-')[1];
		if (month == m) {
			o[key] = times[key];
		}
		if (month < m) {
			break;
		}
	}
	return o;
}

export const months = {
	fill: null,
	Januar: 'jan',
	Februar: 'feb',
	Marts: 'mar',
	April: 'apr',
	Maj: 'maj',
	Juni: 'jun',
	Juli: 'jul',
	August: 'aug',
	September: 'sep',
	Oktober: 'okt',
	November: 'nov',
	December: 'dec'
};

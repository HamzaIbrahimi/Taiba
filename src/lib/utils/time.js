/*
Since the csv file does not consider daylight saving times
We create a helper functions that will ease this process
The csv files gives us the time in hours:minutes hence we can increment the hour by one
if we are in DST
*/

const pad = n => (n < 10 ? '0' + n : n);

export default function addOneHour(time, date = new Date()) {
	if (date.getTimezoneOffset() === -120) {
		const splitTime = time.split(':');
		const incrementedHour = (Number(splitTime[0]) + 1) % 24;
		return `${pad(incrementedHour)}:${splitTime[1]}`;
	}
	return time;
}

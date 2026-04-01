import { describe, it, expect } from 'vitest';
import times from '$lib/data/times.json';
import todaysPrayerTimes, {
	addOneHour,
	prayerTimesInAMonth,
	pad
} from './time';

describe('General time tests', () => {
	it('adds one hour if we are in day light saving time otherwise returns normal time', () => {
		let day = times['3-3']['isha'];
		let dayDst = times['30-3']['isha']; //19:19
		expect(addOneHour(day)).toBe('20:19');
		expect(addOneHour(dayDst, new Date('2026-03-30'))).toBe('21:15');
		expect(addOneHour(dayDst, new Date(2026, 2, 29, 3))).toBe('21:15');
		expect(addOneHour(dayDst, new Date(2026, 2, 29, 1, 59, 59))).toBe('20:15');
	});

	it("provides an object with a given date's prayer times with respect to DST", () => {
		let prayersNotDst = todaysPrayerTimes(new Date('2026-03-06'));
		let prayersDst = todaysPrayerTimes(new Date('2026-03-30'));
		expect(prayersNotDst['fajr']).toBe('05:08');
		expect(prayersNotDst['dhuhr']).toBe('12:22');
		expect(prayersDst['fajr']).toBe('05:07');
		expect(prayersDst['dhuhr']).toBe('13:16');
	});

	it('Extracts the prayers times for a particular month', () => {
		let month = 1;
		let monthlyPrayers = prayerTimesInAMonth(month);
		expect(typeof monthlyPrayers).toBe('object');
		let timesKeyArray = Object.keys(monthlyPrayers);
		expect(timesKeyArray.length).toBe(31);
		for (let i = 1; i <= timesKeyArray.length; i++) {
			expect(timesKeyArray[i - 1]).toBe(`${i}-${month}`);
		}
	});
	it('Extracts the prayers times for a particular month 2', () => {
		let month = 2;
		let monthlyPrayers = prayerTimesInAMonth(month);
		expect(typeof monthlyPrayers).toBe('object');
		let timesKeyArray = Object.keys(monthlyPrayers);
		expect(timesKeyArray.length).toBe(29);
		for (let i = 1; i <= timesKeyArray.length; i++) {
			expect(timesKeyArray[i - 1]).toBe(`${i}-${month}`);
		}
	});

	it('Matches prayerTimesInAMonth with the json file', () => {
		let today = new Date();
		for (let i = 1; i <= 12; i++) {
			const monthlyPrayer = prayerTimesInAMonth(i);
			const monthlyPrayerFromJson = Object.entries(times)
				.filter(([key, _]) => {
					let month = key.split('-')[1];
					return month == i;
				})
				.map(([key, value]) => {
					let [day, m] = key.split('-');
					let date = `${today.getFullYear()}-${pad(m)}-${pad(day)}T03:00:00`;
					value = todaysPrayerTimes(new Date(date));
					return [key, value];
				});
			expect(monthlyPrayer).toEqual(Object.fromEntries(monthlyPrayerFromJson));
		}
	});
});

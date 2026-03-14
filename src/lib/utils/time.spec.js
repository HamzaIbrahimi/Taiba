import { describe, it, expect } from 'vitest';
import times from '$lib/data/times.json';
import todaysPrayerTimes, { addOneHour, prayerTimesInAMonth } from './time';

describe('General time tests', () => {
	it('adds one hour if we are in day light saving time otherwise returns normal time', () => {
		let day = times['3-3']['isha'];
		let dayDst = times['30-3']['isha']; //20:14
		expect(addOneHour(day)).toBe('19:49');
		expect(addOneHour(dayDst, new Date('2026-03-30'))).toBe('21:14');
		expect(addOneHour(dayDst, new Date(2026, 2, 29, 3))).toBe('21:14');
		expect(addOneHour(dayDst, new Date(2026, 2, 29, 1, 59, 59))).toBe('20:14');
	});

	it("provides an object with a given date's prayer times with respect to DST", () => {
		let prayersNotDst = todaysPrayerTimes(new Date('2026-03-06'));
		let prayersDst = todaysPrayerTimes(new Date('2026-03-30'));
		expect(prayersNotDst['fajr']).toBe('04:50');
		expect(prayersNotDst['dhuhr']).toBe('12:22');
		expect(prayersDst['fajr']).toBe('04:47');
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
		for (let i = 1; i <= 12; i++) {
			const monthlyPrayer = prayerTimesInAMonth(i);
			const monthlyPrayerFromJson = Object.entries(times).filter(([key, _]) => {
				let month = key.split('-')[1];
				return month == i;
			});
			expect(monthlyPrayer).toEqual(Object.fromEntries(monthlyPrayerFromJson));
		}
	});
});

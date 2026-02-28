import { describe, it, expect } from 'vitest';
import times from './times.json';

describe('General object tests', () => {
	it('Object should not be empty', () => {
		expect(times).toBeDefined();
		expect(typeof times).toBe('object');
		expect(Object.keys(times).length).toBe(366);
		expect(Object.keys(times)[0]).toMatch(/^\d{1,2}-\d{1,2}$/);
		expect(Object.keys(times['22-5']).length).toBe(5);
	});
});

describe('Check the prayer times for a given date', () => {
	it('Expects prayer times to match', () => {
		expect(times['28-2']['fajr']).toBe('05:04');
		expect(times['28-2']['dhuhr']).toBe('12:24');
		expect(times['28-2']['asr']).toBe('15:03');
		expect(times['28-2']['maghrib']).toBe('17:43');
		expect(times['28-2']['isha']).toBe('19:43');
	});
});

describe('Checks for data against current date', () => {
	it('Should return data for today', () => {
		const date = new Date();
		const key = `${date.getDay()}-${date.getMonth() + 1}`;
		expect(times[key]).toBeDefined();
	});
});

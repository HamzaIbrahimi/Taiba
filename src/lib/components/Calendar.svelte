<script>
	import { prayerTimesInAMonth } from '$lib/utils/time';
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let today = new Date();
	const months = [
		'jan',
		'feb',
		'mar',
		'apr',
		'maj',
		'jun',
		'jul',
		'aug',
		'sep',
		'okt',
		'nov',
		'dec'
	];
	let currMonth = $state(today.getMonth() + 1);
	let monthlyPrayers = $derived(prayerTimesInAMonth(currMonth));
	let jummahTime = new Date().getTimezoneOffset() === -120 ? '13:45' : '12:45';
</script>

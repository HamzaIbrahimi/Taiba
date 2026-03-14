<script>
	import { prayerTimesInAMonth, months, addOneHour } from '$lib/utils/time';
	import { fade } from 'svelte/transition';
	let tableHeaders = ['dato', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let [monthsLong, monthsShort] = [Object.keys(months), Object.values(months)];
	let today = new Date();
	let currMonth = $state(today.getMonth() + 1);
	let prevMonth = $derived(currMonth - 1);
	let nextMonth = $derived(currMonth + 1);
	let monthlyPrayers = $derived(Object.entries(prayerTimesInAMonth(currMonth)));
</script>

<div class="schedule-container">
	<div class="month-selector-sm-view">
		<button
			onclick={() => (currMonth = currMonth - 1)}
			style:display={currMonth == 1 ? 'none' : ''}
			>← {monthsShort[prevMonth]}</button
		>
		<div class="selector-curr-date">
			{monthsLong[currMonth] + ' ' + today.getFullYear()}
		</div>
		<button
			onclick={() => (currMonth = currMonth + 1)}
			style:display={currMonth == 12 ? 'none' : ''}
			>{monthsShort[nextMonth]} →</button
		>
	</div>
	<div class="month-selector-md-view">
		<div class="pick-month">Vælg Måned</div>
		<div class="month-selector">
			{#each monthsShort.slice(1) as month, i}
				<button
					class="month {i + 1 === currMonth ? 'active' : 'inactive'}"
					onclick={() => (currMonth = i + 1)}
				>
					{month}
				</button>
			{/each}
		</div>
	</div>
	<div class="month-schedule">
		<div class="table-date pick-month">
			{monthsLong[currMonth] + ' ' + today.getFullYear()}
		</div>
		<div class="table-header">
			{#each tableHeaders as hd}
				<div class="hd">{hd}</div>
			{/each}
		</div>
		<div class="table-rows">
			{#each monthlyPrayers as [key, prayers]}
				<div class="row">
					<div>{key}</div>
					<div>{prayers['fajr']}</div>
					<div>{prayers['dhuhr']}</div>
					<div>{prayers['asr']}</div>
					<div>{prayers['maghrib']}</div>
					<div>{prayers['isha']}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.month-selector-sm-view {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	.month-selector-sm-view,
	.month-selector-md-view {
		background-color: var(--clr-bg-page);
		padding: 0.75rem 1rem;
	}

	.month-selector-md-view {
		display: none;
	}

	.selector-curr-date {
		font-family: var(--ff-heading);
		font-size: 1.4rem;
	}

	button {
		color: var(--clr-gold);
		font-family: var(--ff-nav-links);
		background: none;
		border: 1px solid var(--clr-gold);
		padding: 0.3rem 1rem;
		cursor: pointer;
	}

	.month-schedule {
		padding: 1rem 3rem;
	}

	.table-header,
	.row {
		display: grid;
		grid-template-columns: 1.2fr repeat(5, 1fr);
		place-items: center;
	}

	@media (min-width: 768px) {
		.month-selector-sm-view {
			display: none;
		}
		.month-selector-md-view {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem 3rem;
			font-family: var(--ff-nav-links);
		}

		.month-selector {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
		}

		.month {
			cursor: pointer;
		}

		.pick-month {
			font-size: var(--fs-labels);
		}

		.month-selector .active {
			background: var(--clr-bg-emerald);
			color: var(--clr-gold);
		}

		.month-selector .inactive {
			color: var(--fc-labels);
			border: 2px solid rgba(42, 105, 78, 0.25);
			background: none;
		}

		@media (min-width: 1200px) {
			.month-selector-md-view {
				border-right: 1px solid var(--clr-border-green);
			}
			.schedule-container {
				display: grid;
				grid-template-columns: 0.3fr 1fr;
			}

			.month-selector {
				flex-direction: column;
			}
		}
	}
</style>

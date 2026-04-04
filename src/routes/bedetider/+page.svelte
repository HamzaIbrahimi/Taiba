<script>
	import Calendar from '$lib/components/Calendar.svelte';
	let today = new Date();
	const hijriDate = new Intl.DateTimeFormat('da-DK-u-ca-islamic', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(today);
	const gregorianDate = new Intl.DateTimeFormat('da-DK', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(today);
</script>

<div class="date">
	<div class="date-title">
		<div>Årskalender <br /> {today.getFullYear()}</div>
		<hr />
	</div>
	<div class="date-today">
		<div class="hijri">
			<div class="sm-view">Dato i dag</div>
			<div class="md-view">Hijri</div>
			<div class="hijri-date">{hijriDate}</div>
		</div>
		<hr />
		<div class="gregorian">
			<div class="md-view">Gregoriansk</div>
			<div class="gregorian-date">{gregorianDate}</div>
		</div>
	</div>
</div>

<Calendar />

<style>
	.date {
		background: var(--clr-bg-hero);
		font-size: 3rem;
		color: var(--fc-primary);
		font-family: var(--ff-heading);
		padding: 2rem 1rem;
		border-bottom: 3px solid var(--clr-gold);
	}

	.md-view {
		display: none;
	}

	.hijri,
	.gregorian,
	.date-today {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hijri-date {
		font-size: 2rem;
		color: var(--clr-gold);
		font-family: var(--ff-heading);
	}

	.gregorian-date,
	.sm-view {
		font-size: 1.2rem;
	}

	.sm-view,
	.md-view {
		color: var(--clr-sage);
	}

	hr {
		width: 10%;
		height: 1px;
		transform: rotate(180deg);
		background-color: var(--clr-gold);
		border: none;
	}

	@media (min-width: 768px) {
		.sm-view {
			display: none;
		}
		.md-view {
			display: block;
			font-size: 1rem;
		}

		.hijri .md-view {
			align-self: end;
		}

		.gregorian .md-view {
			align-self: start;
		}

		.date-today {
			flex-direction: row;
			justify-content: center;
			gap: 2rem;
			padding-inline: 7rem;
		}

		.date-today hr {
			transform: rotate(90deg);
			width: 15%;
		}

		.hijri-date,
		.gregorian-date {
			font-size: 2.4rem;
		}
	}

	@media (min-width: 1200px) {
		.date {
			display: flex;
			justify-content: space-between;
		}

		.date-today {
			background: inherit;
			border: 0.2px solid var(--clr-gold);
		}

		br {
			display: none;
		}

		.hijri-date,
		.gregorian-date {
			font-size: 1.8rem;
		}
	}
</style>

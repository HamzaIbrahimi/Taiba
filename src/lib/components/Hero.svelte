<script>
	import todaysPrayerTimes from '$lib/utils/time';
	import divider from '$lib/assets/hero-divider.svg';
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
	let jummahTime = new Date().getTimezoneOffset() === -120 ? '13:45' : '12:45';
</script>

<div class="hero-container">
	<div class="hero-left">
		<div class="basmallah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
		<div class="welcome">
			Velkommen til <br /> <span class="mosque-name">Taiba Moské</span>
		</div>
		<div class="hero-divider">
			<img src={divider} alt="nice text divider" />
		</div>
		<div class="welcome-support-text">
			Et fristed for tro, fællesskab og fred
		</div>
		<a href="/bedetider">Bønnetider</a>
		<a href="/om-os#subscriptions">Bliv Involveret </a>
		<a href="/arrangementer#news">Nyheder</a>
	</div>
	<div class="hero-right">
		<h3>Dagens Bønnertider</h3>
		<dl class="salah-times">
			{#each prayerNames as name}
				<div class="prayer">
					<dt>{name}</dt>
					<dd>{prayerTimes[name]}</dd>
				</div>
			{/each}
			<div class="prayer jummah">
				<dt>Jummah</dt>
				<dd>{jummahTime}</dd>
			</div>
		</dl>
	</div>
</div>

<style>
	a {
		border: 1px solid var(--clr-gold);
		padding: 1rem;
		color: var(--clr-gold);
		font-weight: 400;
		font-family: var(--ff-nav-links);
		font-size: var(--fs-labels);
	}

	a + a {
		background-color: var(--clr-gold);
		color: black;
		padding: 0.5rem 1rem;
		border: 2px solid #121212;
	}

	a:hover {
		outline: 1px solid var(--clr-gold-light);
		transition: 300ms ease;
	}

	h3 {
		font-family: var(--ff-nav-links);
		color: var(--clr-gold);
	}

	.jummah.prayer,
	h3 {
		display: none;
	}

	.hero-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		background: var(--clr-bg-hero);
		padding: 2rem 2rem;
		font-size: var(--fs-hero);
		position: relative;
		letter-spacing: 0.2rem;
	}

	.hero-divider img {
		width: 10rem;
	}

	.basmallah {
		color: var(--clr-gold-light);
		font-style: italic;
		font-size: 1.5rem;
	}

	.mosque-name {
		color: var(--clr-gold);
	}

	.basmallah,
	.welcome {
		font-family: var(--ff-heading);
		font-weight: 800;
	}

	.welcome,
	.welcome-support-text {
		color: var(--fc-primary);
	}
	.welcome-support-text {
		font-size: var(--fs-stats);
		letter-spacing: 0;
	}

	.salah-times {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		font-family: var(--ff-heading);
		background-color: var(--clr-gold);
		padding-block: 1rem;
	}

	.prayer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: 0.5rem;
	}
	dt {
		letter-spacing: 0.2rem;
	}

	dd {
		font-weight: 1000;
		font-size: 1.3rem;
	}

	.prayer + .prayer {
		border-left: 1px solid rgba(13, 40, 24, 0.25);
	}

	@media (min-width: 768px) {
		.hero-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			background-color: var(--clr-bg-jade);
		}
		h3 {
			display: block;
			padding-bottom: 1rem;
		}

		.hero-right {
			padding: 3rem 1rem;
			border-left: 1px solid var(--clr-gold);
		}

		.salah-times {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			background-color: inherit;
		}

		.salah-times .prayer {
			background-color: var(--clr-bg-emerald);
			background: rgba(0, 0, 0, 0.2);
			border-left: 3px solid var(--clr-gold);
			padding: 0.2rem;
		}
		.jummah.prayer {
			display: flex;
			border-left: 5px solid var(--clr-bg-nav);
		}

		dt {
			color: var(--clr-sage);
			font-family: var(--ff-nav-links);
		}

		dd {
			color: var(--clr-gold);
			font-size: 1.4rem;
		}
	}

	@media (min-width: 1200px) {
		.hero-container {
			grid-template-columns: 1.3fr 1fr;
			position: relative;
			background: linear-gradient(
				160deg,
				var(--clr-bg-nav) 0%,
				var(--clr-bg-emerald) 100%
			);
		}

		.hero-left {
			position: static;
			justify-content: start;
		}

		.welcome {
			font-size: 2.4rem;
		}

		.hero-right {
			background: inherit;
		}

		.welcome-support-text {
			font-weight: 600;
			font-style: italic;
			padding: 1rem 4rem;
		}

		.salah-times {
			grid-template-columns: 1fr;
		}

		.prayer {
			flex-direction: row;
			justify-content: space-between;
		}

		.salah-times .prayer:not(.jummah.prayer) {
			border-left: none;
			background: inherit;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		.jummah.prayer {
			padding-left: 1rem;
		}
	}
</style>

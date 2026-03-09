<script>
	import todaysPrayerTimes from '$lib/utils/time';
	import divider from '$lib/assets/hero-divider.svg';
	import pattern from '$lib/assets/taiba-geometric-pattern.svg';
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
</script>

<div class="hero-container">
	<div class="hero-left">
		<div class="basmallah-eng">I Allahs Navn, den mest Nådige</div>
		<div class="basmallah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
		<div class="welcome">
			Velkommen til <br /> <span class="mosque-name">Taiba</span> Moské
		</div>
		<div class="hero-divider">
			<img src={divider} alt="nice text divider" />
		</div>
		<div class="welcome-support-text">
			Et fristed for tro, fællesskab og fred
		</div>
		<a href="/salah-times">Bønnetider</a>
		<img class="geometric-pattern" src={pattern} alt="" />
	</div>
	<div class="hero-right">
		<dl class="salah-times">
			{#each prayerNames as name}
				<div class="prayer">
					<dt>{name}</dt>
					<dd>{prayerTimes[name]}</dd>
				</div>
			{/each}
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

	.hero-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background: var(--clr-bg-hero);
		padding: 2rem 2rem;
		font-size: var(--fs-hero);
		position: relative;
		letter-spacing: 0.2rem;
	}

	.hero-divider img {
		width: 5rem;
	}

	.geometric-pattern {
		position: absolute;
		opacity: 0.06;
		pointer-events: none;
	}

	.basmallah {
		color: var(--clr-gold-light);
		font-style: italic;
	}

	.basmallah,
	.welcome {
		font-family: var(--ff-heading);
		font-weight: 800;
	}

	.basmallah-eng {
		font-size: var(--fs-labels);
		color: var(--clr-bg-jade);
		font-weight: 700;
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
		padding-inline: 1rem;
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
</style>

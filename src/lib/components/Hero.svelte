<script>
	import todaysPrayerTimes from '$lib/utils/time';
	import divider from '$lib/assets/hero-divider.svg';
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
</script>

<div class="hero-container">
	<div class="hero-left">
		<div class="basmallah-eng">I Allahs Navn, den Nådige</div>
		<div class="basmallah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
		<div class="welcome">Velkommen til <br /> Taiba Moské</div>
		<div class="hero-divider">
			<img src={divider} alt="nice text divider" />
		</div>
	</div>
</div>

<style>
	.hero-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--clr-bg-hero);
		padding: 2rem 2rem;
		font-size: var(--fs-hero);
		letter-spacing: 0.35rem;
	}

	.basmallah {
		color: var(--clr-gold-light);
		font-style: italic;
	}

	.basmallah,
	.welcome {
		font-family: var(--ff-heading);
		font-weight: 500;
	}

	.basmallah-eng {
		font-size: var(--fs-labels);
		color: var(--clr-bg-jade);
		font-weight: 700;
	}

	.welcome {
		color: var(--fc-primary);
	}

	img {
		width: 5rem;
		height: auto;
		margin: 0.75rem auto;
	}
</style>

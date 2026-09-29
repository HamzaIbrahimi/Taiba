<script>
	let currentNews = [
		{
			title: 'PRE-MAAHAD i Masjid Taiba',
			text: 'Islamisk undervisningsforløb for brødre og søstre',
			info: `PRE-MAAHAD – Et 2,5-årigt struktureret undervisningsforløb med Shaykh Abu Muhammad. Shaykh Abu Muhammad har en bachelor i Shari’ah, master i Fiqh og PhD i komparativ Fiqh og har studeret under kendte lærde i England, Indien og Saudi-Arabien.`,
			extraInfo: [
				'🕡 Tirsdage 18.30–20.30',
				'📅 Introaften: 22. september kl. 18.30',
				'🚀 Opstart: 29. september',
				'👥 Brødre & søstre (16+)',
				'📍 Masjid Taiba, 2. sal',
				'💳 200 kr./md.'
			],
			date: '29. Sep 2026',
			link: 'https://docs.google.com/forms/d/18yI_7E6lLCBuLXr0kGxGJNThgboYUq0Nm5eH-q_BoCw/viewform?edit_requested=true',
			main: true
		},
		{
			title: 'Al-Minhaj min Mirath Al-Nubuwwah',
			text: 'Vejen fra Profetens Arv',
			info: 'En gennemgang af den rette metode og vejledning i lyset af proftens - må Allāhs velsignelser og fred være med ham- arv',
			date: 'Hver Onsdag - Underviser: Sheikh Ibn Husayn'
		},
		{
			title: 'EID FEST I MASJID TAIBA 🎉🥳',
			text: 'Mad, aktiviteter og hygge for here familien',
			info: 'Kom og fejre Eid med os den 29/05 kl. 15:00 efter Jumu’ah 🕌🎉 Der vil være hygge, fællesskab og god stemning for alle!',
			date: '29. Maj 2026'
		},
		{
			title: 'LÆR QURAN',
			text: 'Ugentlige Quran Undervisning fra bunden i Masjid Taiba',
			info: 'Vi starter med det arabiske alfabet og arbejder os frem mod at kunne læse Quranen selvstændigt, in shā’ Allāh. Starter 2 Maj, Lørdag kl. 14:00.',
			date: '2. Maj 2026'
		}
	];
</script>

<section class="news">
	<h1>Nyheder</h1>
	<div class="news-container">
		{#each currentNews as news, i}
			{#if news.main}
				<div class="card{i} card">
					<div class="background">
						<h2>{news.title}</h2>
						<h4>{news.text}</h4>
					</div>
					<div class="date">{news.date}</div>
					<h2>{news.title}</h2>
					<p>{news.info}</p>
					<ul>
						{#each news.extraInfo as info}
							<li>{info}</li>
						{/each}
					</ul>
					<a href={news.link} target="_blank">TILMELD NU</a>
				</div>
			{:else}
				<div class="card{i} card">
					<div class="date">{news.date}</div>
					<h3>{news.title}</h3>
					<p>{news.text}. {news.info}.</p>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		padding: 2rem;
		background-color: var(--clr-bg-alt);
	}

	.news-container {
		display: grid;
		gap: 1rem;
	}

	h1 {
		font-family: var(--ff-nav-links);
		letter-spacing: 0.3rem;
	}

	.card {
		border: 1px solid var(--clr-border-green);
		padding: 1rem;
	}

	a {
		border: 1px solid var(--clr-gold);
		padding: 1rem;
		display: block;
		color: var(--clr-gold);
		font-weight: 400;
		font-family: var(--ff-nav-links);
		font-size: var(--fs-labels);
		text-align: center;
	}

	a:hover {
		outline: 1px solid var(--clr-gold-light);
	}

	.card:not(.card0) {
		border-left: 3px solid var(--clr-bg-jade);
	}

	.background {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 350px;
		gap: 1rem;
		background: var(--clr-bg-hero);
		letter-spacing: 0.2rem;
	}

	.date .background h2 {
		font-family: var(--ff-nav-links);
	}

	.background h2 {
		color: var(--clr-gold);
	}

	.background h4 {
		color: var(--clr-sage);
		text-align: center;
	}

	.card0 .date {
		padding-top: 1rem;
	}

	.date {
		color: var(--clr-sage);
		font-weight: 800;
		text-transform: uppercase;
	}

	.title {
		font-family: var(--ff-heading);
		color: var(--clr-bg-emerald);
	}

	@media (min-width: 768px) {
		.news-container {
			grid-template-columns: 1.2fr 1fr;
			grid-template-rows: repeat(3, auto);
		}

		.card0 {
			grid-column: span 1;
			grid-row: span 3;
		}
	}
</style>

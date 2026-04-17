<script>
	let currentNews = [
		{
			title: 'Vores officielle hjemmeside er lanceret',
			text: 'Vi er stolte af at præsentere Taiba Moskés nye hjemmeside — dit digitale hjem for bønnetider, arrangementer og nyheder.',
			date: 'April 2026',
			main: true
		},
		{
			title: 'Nyt WhatsApp-fællesskab — Bliv en del af holdet',
			text: 'Vi har oprettet fire frivillighold: SoMe, Events & påmindelser, Ungdomsbestyrelse og Rengøring. Skriv til os for at tilmelde dig.',
			date: 'April 2026'
		},
		{
			title: 'Ny ugentlig Aqidah-undervisning',
			text: 'Ugentlige Aqidah-lektioner er nu tilføjet til vores program. Se den aktuelle begivenhed i karusellen ovenfor.',
			date: 'April 2026'
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
						<h2>TAIBA MOSKÉ</h2>
						<h4>OFFICIEL HJEMMESIDE</h4>
					</div>
					<div class="date">{news.date}</div>
					<h2>{news.title}</h2>
					<p>{news.text}</p>
				</div>
			{:else}
				<div class="card{i} card">
					<div class="date">{news.date}</div>
					<h3>{news.title}</h3>
					<p>{news.text}</p>
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

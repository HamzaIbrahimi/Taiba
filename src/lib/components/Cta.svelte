<section class="cta">
	<div>
		<blockquote>
			"Lignelsen for dem, der giver ud af deres rigdom på Allahs vej, er som et
			[korn] frø, der gror syv aks; i hvert aks er der hundrede korn. Og Allah
			mangedobler [Sin belønning] for hvem Han vil. Og Allah er altomfattende og
			Vidende."
		</blockquote>
		<cite>— KORANEN 2:261 </cite>
		<p>Støt Masjid til at tilbagebetale gæld!</p>
	</div>
	<div>
		<a href="/about" class="lg-view donate-btn">Se Alle Muligheder </a>
		<a
			class="donate-btn"
			href="https://buy.stripe.com/8wMdUefCodnybmM5kH"
			target="_blank">Donér nu →</a
		>
	</div>
</section>

<style>
	.cta {
		display: grid;
		padding: 2rem;
		background-color: var(--clr-bg-nav);
		border-bottom: 1px solid var(--clr-gold);
		gap: 0.7rem;
	}

	p {
		margin-top: 1rem;
		color: var(--fc-primary);
		font-weight: 600;
		font-size: 1.1rem;
		font-style: italic;
	}

	.donate-btn {
		background: var(--clr-gold);
		padding: 0.5rem 2rem;
		font-size: 1.1rem;
	}

	.lg-view {
		background-color: var(--clr-bg-nav);
		border: 2px solid var(--clr-gold);
		padding: 0.5rem 2rem;
		color: var(--clr-gold);
	}

	div:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	blockquote {
		color: var(--clr-gold-light);
		font-weight: 500;
		font-family: var(--ff-heading);
		font-style: italic;
		font-size: 1.1rem;
	}

	cite {
		color: var(--clr-sage);
		font-family: var(--ff-nav-links);
	}

	@media (min-width: 768px) {
		.cta {
			grid-template-columns: 1.2fr 1fr;
			place-items: center;
		}
	}
	@media (min-width: 1200px) {
		div:nth-child(2) {
			flex-direction: row;
		}
	}
</style>

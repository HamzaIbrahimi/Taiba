<script>
	import freetierQr from '$lib/assets/donations-links/Donation.webp';
	import tier100 from '$lib/assets/donations-links/Kontingent-100.webp';
	import tier150 from '$lib/assets/donations-links/Kontingent-150.webp';
	import tier200 from '$lib/assets/donations-links/Kontingent-200.webp';
	import diamond from '$lib/assets/diamond.svg';

	let cards = [
		{
			title: 'Hvad du kan',
			tier: 'Fri Donation',
			description: 'Donér et selvvalgt beløb — enhver gave gør en forskel.',
			QR: freetierQr,
			link: 'https://buy.stripe.com/7sI7vQ9e083e8aA14i'
		},
		{
			title: 'Støttemedlem',
			tier: '100 kr/md',
			description: 'Bliv en del af vores faste støtter og hjælp os månedligt.',
			QR: tier100,
			link: 'https://buy.stripe.com/14k7vQai41EQ1Mc5kD'
		},
		{
			title: 'Velgører',
			tier: '150 kr/md',
			description: 'Din månedlige støtte gør en stor forskel for masjid Taiba.',
			QR: tier150,
			link: 'https://buy.stripe.com/8wM17sbm8gzK1Mc8wO'
		},
		{
			title: 'Beskytter',
			tier: '200 kr/md',
			description:
				'Det højeste niveau af månedlig støtte — Jazak Allah Khayran.',
			QR: tier200,
			link: 'https://buy.stripe.com/6oEaI2fCo97i2Qg9AR'
		}
	];
</script>

<section>
	<div class="small-title">
		<h3>Vælge dit bidrag</h3>
	</div>
	<div class="cards">
		{#each cards as card}
			<div class={card.title == 'Velgører' ? 'card popular' : 'card'}>
				<div class="title-tier">
					<div class="title">{card.title}</div>
					<div class="tier">{card.tier}</div>
				</div>
				<p>{card.description}</p>
				<div class="link-qr">
					<a class="donate-btn" href={card.link}
						>{card.tier.startsWith('F') ? 'Donér Frit →' : 'Abonner →'}
					</a>
					<img
						class="md-view"
						src={card.QR}
						alt="Qr code for quick payment link"
					/>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding: 2rem;
		background-color: var(--clr-bg-alt);
	}

	.cards {
		display: grid;
		gap: 1rem;
	}

	.card {
		display: grid;
		background-color: var(--clr-bg-page);
		padding: 1rem;
		gap: 1rem;
	}

	.card:not(.card.popular) {
		border: 1px solid var(--clr-border-green);
		border-top: 7px solid var(--clr-bg-jade);
	}

	.card.popular {
		border: 5px solid var(--clr-gold);
		border-top: 7px solid var(--clr-gold);
		position: relative;
	}

	.card.popular::after {
		content: 'Mest Populær';
		font-family: var(--ff-nav-links);
		background-color: var(--clr-gold);
		position: absolute;
		width: fit-content;
		padding: 0.1rem 1rem;
		right: 10%;
		top: -1.1rem;
	}

	.card.popular .tier {
		color: var(--clr-gold);
	}

	.md-view {
		display: none;
	}

	.title-tier {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.small-title {
		margin-bottom: 1rem;
		color: var(--clr-bg-jade);
	}

	h3 {
		font-family: var(--ff-nav-links);
		letter-spacing: 0;
		word-spacing: 0.5rem;
	}

	.title {
		font-family: var(--ff-nav-links);
		color: var(--clr-bg-emerald);
		text-transform: uppercase;
	}

	.tier {
		font-family: var(--ff-heading);
		color: var(--clr-bg-jade);
		font-size: 1.7rem;
		font-weight: 500;
	}

	.donate-btn {
		font-size: 1.1rem;
		padding: 0.5rem 1rem;
	}

	@media (min-width: 768px) {
		.cards {
			grid-template-columns: 1fr 1fr;
		}

		.md-view {
			display: block;
		}

		.link-qr {
			display: grid;
			grid-template-columns: 3fr 1fr;
			justify-items: space-between;
		}

		.link-qr img {
			width: 50px;
			height: 50px;
			justify-self: end;
		}
	}
	@media (min-width: 1200px) {
		.cards {
			grid-template-columns: repeat(4, 1fr);
		}

		.link-qr {
			grid-template-columns: 1fr;
			gap: 1rem;
			place-items: center;
		}

		.link-qr img {
			justify-self: center;
			width: 100px;
			height: 100px;
		}

		.link-qr a {
			order: 1;
			width: 100%;
		}

		.title {
			font-size: 0.8rem;
		}
	}
</style>

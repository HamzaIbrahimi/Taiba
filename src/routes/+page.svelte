<script>
	import Hero from '$lib/components/Hero.svelte';
	import diamond from '$lib/assets/diamond.svg';
	import hadith from '$lib/data/hadith.json';
	import khutbaImg from '$lib/assets/masjid-photos/khutba.webp';
	import salah from '$lib/assets/masjid-photos/salah.webp';
	import event1 from '$lib/assets/masjid-photos/event-1.webp';
	import event2 from '$lib/assets/masjid-photos/event-2.webp';
	import event3 from '$lib/assets/masjid-photos/event-3.webp';
	let jummahTime = new Date().getTimezoneOffset() === -120 ? '13:45' : '12:45';
</script>

<Hero />

<div class="homepage-content">
	<section class="description">
		<div class="intro">
			<div class="small-title">
				<h5>Vores Fællesskab</h5>
				<img src={diamond} alt="diamond with a golden color" />
			</div>
			<h1 class="big-title">Et Sted for Hvert Hjerte</h1>
			<p class="short-description">
				Muslimske borgere har været en del af Danmarks kulturlandskab i over et
				århundrede. På trods af den voksende muslimske befolkning, som nu tæller
				flere hundrede tusinder, er der begrænsede faciliteter for dem, når det
				kommer til at dyrke deres tro, opbygge fællesskaber, fremme læring og
				engagere sig aktivt i samfundet. Taibah blev etableret i 1992 for at
				imødekomme dette behov.
			</p>
		</div>
	</section>
	<section class="hadith-display">
		<h3>Dagens Hadith</h3>
		<div class="hadith-container">
			<blockquote cite="https://hadeethenc.com/da/home">
				{hadith['hadeeth']}
			</blockquote>
			<p><cite>{hadith['attribution']}</cite></p>
			<p>حديث {hadith['grade']}</p>
		</div>
	</section>
</div>

<div class="third-section">
	<section class="description">
		<div class="intro">
			<div class="small-title">
				<h5>Ny ejendom</h5>
				<img src={diamond} alt="diamond with a golden color" />
			</div>
			<h1 class="big-title">
				3 etager dedikeret til tro, fællesskab og læring
			</h1>
			<p class="short-description">
				Vi har igennem årene boet forskellige steder, men i 2022 købte vi
				ejendommen <a href="https://maps.app.goo.gl/UZg4CY8UK4w45reBA"
					>Frederikssundsvej 276 i Brønshøj</a
				>. Dermed fik vi realiseret en mangeårig drøm om at samle alle vores
				samarbejdspartnere, målgrupper og aktiviteter under ét tag. Vores formål
				er at skabe de nødvendige rammer og faciliteter, hvor primært muslimske
				foreninger, grupper og ildsjæle kan organisere gavnlige aktiviteter og
				arrangementer for både dem selv og det bredere samfund.
			</p>
		</div>
	</section>
	<section class="photo-grid">
		<div class="card">
			<img
				src={khutbaImg}
				alt="Imam giving the friday sermon to individuals in the mosque"
			/>
		</div>
		<div class="card salah">
			<img src={salah} alt="Individuals praying behind the imam at a mosque" />
		</div>
	</section>
</div>

<style>
	.homepage-content,
	.third-section {
		display: grid;
	}

	.description h1 {
		color: var(--clr-bg-emerald);
		line-height: 1.15;
		margin-bottom: 0.635rem;
		font-weight: 300;
	}

	div > section {
		padding: 2rem;
	}

	.small-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--clr-bg-jade);
		text-transform: uppercase;
		padding-bottom: 0.635rem;
	}

	.small-title img {
		width: 8px;
	}

	.hadith-display {
		background-color: var(--clr-bg-alt);
		display: flex;
		flex-direction: column;
	}

	.hadith-display h3 {
		color: var(--clr-gold);
		letter-spacing: 0.1rem;
	}

	.hadith-container {
		padding: 1rem;
	}

	blockquote {
		font-family: var(--ff-heading);
		font-style: italic;
		font-weight: 300;
		font-size: 1.2rem;
		border-left: 3px solid var(--clr-gold);
		padding-left: 1rem;
		height: 180px;
		overflow-y: scroll;
		scrollbar-color: #c9a84c #c9a84c;
		scrollbar-width: thin;
	}

	.hadith-container p {
		color: var(--clr-gold);
		text-align: right;
		letter-spacing: 0.5rem;
	}

	img {
		object-fit: cover;
	}

	.photo-grid {
		background-color: var(--clr-bg-alt);
		display: grid;
		place-items: center;
		gap: 1rem;
	}

	.card {
		box-shadow: 25px 20px 0.3rem var(--clr-border-gold);
		border-radius: 2rem;
	}

	.card:not(.salah) img {
		filter: grayscale(100);
	}

	.card img {
		border-radius: 2rem;
		height: 450px;
		transition: 300ms ease-out;
	}

	.card img:hover {
		transition: 300ms ease-in;
		filter: grayscale(0);
	}

	@media (min-width: 768px) {
		.homepage-content,
		.third-section {
			grid-template-columns: 1fr 1fr;
		}

		.homepage-content .hadith-display {
			grid-column: 1/2;
		}

		.homepage-content .description {
			grid-column: 2/3;
			grid-row: 1/2;
		}

		.photo-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1200px) {
		.homepage-content,
		.third-section {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

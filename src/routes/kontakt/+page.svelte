<script>
	import Cta from '$lib/components/Cta.svelte';
	import masjid from '$lib/assets/masjid-photos/masjid-photo1.webp';
</script>

<section class="intro">
	<div class="contact">
		<h4>Kontakt</h4>
		<h1>Find Os & <br /> Kontakt Os</h1>
		<hr />
		<p>Vi er altid glade for at høre fra jer.</p>
	</div>
	<div class="masjid-photo-container">
		<div class="address">
			<h2>Taiba Moské</h2>
			<a href="https://maps.app.goo.gl/UZg4CY8UK4w45reBA" target="_blank">
				Frederikssundsvej 276, Brønshøj
			</a>
		</div>
	</div>
</section>

<Cta />

<style>
	.intro {
		display: grid;
	}

	.contact {
		background: var(--clr-bg-hero);
		padding: 2rem;
	}

	h1 {
		font-family: var(--ff-heading);
		color: var(--fc-primary);
		font-size: 2.9rem;
	}

	h4 {
		color: var(--clr-sage);
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	hr {
		width: 30%;
		height: 2px;
		background-color: var(--clr-gold);
		border: none;
	}

	.contact p {
		margin-top: 1rem;
		color: var(--fc-primary);
	}

	.masjid-photo-container {
		background: no-repeat center
			url('$lib/assets/masjid-photos/masjid-photo1.webp');
		background-size: cover;
		min-width: 300px;
		min-height: 400px;
		filter: grayscale(30%) brightness(85%);
		position: relative;
	}

	a {
		color: var(--fc-primary);
	}

	a:hover {
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		color: var(--clr-gold-light);
	}

	.address {
		position: absolute;
		right: 0;
		top: 0;
		font-weight: 900;
		font-size: 1.5rem;
		padding: 1rem;
		filter: drop-shadow(0 0 1rem black);
		font-family: var(--ff-heading);
		color: var(--fc-primary);
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
	}

	@media (min-width: 768px) {
		.intro {
			grid-template-columns: 1fr 1fr;
		}

		.masjid-photo-container {
			border-left: 3px solid var(--clr-gold);
		}
	}
</style>

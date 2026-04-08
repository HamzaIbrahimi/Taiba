<script>
	import Cta from '$lib/components/Cta.svelte';
	import masjid from '$lib/assets/masjid-photos/masjid-photo1.webp';
	import facebook from '$lib/assets/facebook.svg';
	import email from '$lib/assets/email.svg';
	import instagram from '$lib/assets/instagram-logo.svg';
	import pin from '$lib/assets/heroicons_map_pin.svg';
</script>

<section class="intro">
	<div class="hero">
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
<section class="contact">
	<div class="info">
		<h3>Kontaktoplysninger</h3>
		<div class="card">
			<div class="img-container">
				<img src={pin} alt="pin logo indicating location" />
			</div>
			<div>
				<h5>Adresse</h5>
				<a href="https://maps.app.goo.gl/UZg4CY8UK4w45reBA"
					>Frederikssundsvej 276 Brønshøj</a
				>
			</div>
		</div>
		<div class="card">
			<div class="img-container">
				<img src={email} alt="email logo indicating email" />
			</div>
			<div>
				<h5>Email</h5>
				<a href="mailto:info@taiba.dk" target="_blank">info@taiba.dk</a>
			</div>
		</div>
	</div>
	<div class="opening-hours"></div>
	<div class="follow-us">
		<h3>Følg Os</h3>
		<div class="card">
			<div class="img-container">
				<img src={facebook} alt="Facebook logo" />
			</div>
			<div>
				<h5>Facebook</h5>
				<a href="https://www.facebook.com/MasjidTaiba1">@taibamokse</a>
			</div>
		</div>
		<div class="card">
			<div class="img-container">
				<img src={instagram} alt="Instagram logo" />
			</div>
			<div>
				<h5>Instagram</h5>
				<a href="https://www.instagram.com/masjidtaiba">@taibamokse</a>
			</div>
		</div>
	</div>
</section>

<Cta />

<style>
	.intro {
		display: grid;
	}

	.hero {
		background: var(--clr-bg-hero);
		padding: 2rem;
	}

	h1 {
		font-family: var(--ff-heading);
		color: var(--fc-primary);
		font-size: 2.9rem;
	}

	h3 {
		color: var(--clr-bg-jade);
		letter-spacing: 0.2rem;
		text-transform: uppercase;
	}

	h4 {
		color: var(--clr-sage);
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	h5 {
		font-size: 1.2rem;
	}

	hr {
		width: 30%;
		height: 2px;
		background-color: var(--clr-gold);
		border: none;
	}

	.hero p {
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

	.masjid-photo-container a {
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

	.contact > * {
		padding: 1rem;
	}

	.img-container {
		width: 50px;
		height: 50px;
		background: var(--clr-bg-nav);
		padding: 1rem;
		border-radius: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
		padding-bottom: 0.5rem;
	}

	a {
		color: var(--fc-body);
	}

	.follow-us .card {
		border: 1px solid var(--clr-border-green);
		padding: 1rem;
		background: var(--clr-bg-alt);
	}

	.card:not(:last-of-type) {
		border-bottom: 1px solid var(--clr-border-green);
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

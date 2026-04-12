<script>
	import Cta from '$lib/components/Cta.svelte';
	import masjid from '$lib/assets/masjid-photos/masjid-photo1.webp';
	import facebook from '$lib/assets/facebook.svg';
	import email from '$lib/assets/email.svg';
	import instagram from '$lib/assets/instagram-logo.svg';
	import pin from '$lib/assets/heroicons_map_pin.svg';
	import pin_yellow from '$lib/assets/heroicons_map_pin_yellow.svg';

	let jummahTime = new Date().getTimezoneOffset() === -120 ? '13:45' : '12:45';
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
	<div class="opening-hours">
		<h3>Åbningstider</h3>
		<p>
			Moskéen er åben ved hver bøn samt ved arrangementer. Der er ingen faste
			åbningstider.
		</p>
		<div class="friday-prayer">
			<div>Fredagsbøn · Jumu'ah</div>
			<div class="jummah">Hver Fredag · {jummahTime}</div>
		</div>
		<a href="/bedetider">Se alle bønnetider → </a>
		<a href="/arrangementer">Se alle arrangementer → </a>
	</div>
	<div class="follow-us">
		<h3>Følg Os</h3>
		<div class="container">
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
	</div>
</section>

<section>
	<a
		class="map"
		href="https://maps.app.goo.gl/UZg4CY8UK4w45reBA"
		target="_blank"
	>
		<img src={pin_yellow} alt="" />
		<div class="container">
			<div>
				<h4>Find OS</h4>
				<h1>Frederikssundsvej 276,<br /> 2700 Brønshøj</h1>
			</div>
			<div class="highlight">Åbn i Google Maps →</div>
		</div>
	</a>
</section>

<Cta />

<style>
	.intro,
	.opening-hours,
	.contact {
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
		font-family: var(--ff-nav-links);
		color: var(--clr-bg-emerald);
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

	.contact div a:hover,
	.intro a:hover {
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
		padding: 2rem;
	}

	.opening-hours {
		background-color: var(--clr-bg-alt);
		gap: 1rem;
	}

	.friday-prayer {
		background-color: var(--clr-bg-page);
		padding: 1rem;
		border-left: 5px solid var(--clr-gold);
	}

	.friday-prayer,
	.opening-hours a {
		font-family: var(--ff-nav-links);
	}

	.opening-hours a {
		color: var(--clr-gold);
	}

	.friday-prayer div:first-child {
		color: var(--clr-bg-jade);
	}

	.jummah {
		font-family: var(--ff-heading);
		font-size: 2rem;
		color: var(--clr-bg-emerald);
		font-weight: 600;
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

	.map {
		background-color: var(--clr-bg-emerald);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 2rem 1rem;
	}

	.map .container div:nth-child(2) {
		color: var(--clr-gold);
		letter-spacing: 0.2rem;
		font-weight: 700;
	}

	.map img {
		width: 100px;
	}

	.map .container {
		padding-block: 1rem;
		display: grid;
	}

	.map h1 {
		font-size: 1.8rem;
	}

	.map h4 {
		font-family: var(--ff-nav-links);
	}

	@media (min-width: 768px) {
		.intro {
			grid-template-columns: 1fr 1fr;
		}

		.masjid-photo-container {
			border-left: 3px solid var(--clr-gold);
		}

		.contact {
			grid-template-columns: 1fr 1fr;
		}

		.opening-hours {
			background-color: var(--clr-bg-page);
			border-left: 1px solid var(--clr-border-green);
		}

		.info,
		.opening-hours {
			border-bottom: 1px solid var(--clr-border-green);
		}

		.friday-prayer {
			background-color: var(--clr-bg-alt);
		}

		.follow-us {
			grid-column: 1/-1;
		}

		.follow-us .container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}

		.follow-us {
			background-color: var(--clr-bg-alt);
		}

		.follow-us h3 {
			display: none;
		}

		.map .container {
			grid-template-columns: 1fr 1fr;
			place-items: center;
		}

		br {
			display: none;
		}

		.highlight {
			border: 1px solid var(--clr-gold);
			padding: 0.5rem 1rem;
		}
	}

	@media (min-width: 1200px) {
		.follow-us h3 {
			display: block;
		}

		.follow-us .container {
			grid-template-columns: 1fr;
		}

		.contact {
			grid-template-columns: repeat(3, 1fr);
		}

		.follow-us {
			grid-column: 3/-1;
			border-bottom: 1px solid var(--clr-border-green);
			border-left: 1px solid var(--clr-border-green);
		}

		.contact > * {
			background-color: var(--clr-bg-page);
		}
	}
</style>

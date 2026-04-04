<script>
	import diamond from '$lib/assets/diamond.svg';
	import logo from '$lib/assets/favicon.svg';
	import gather from '$lib/assets/masjid-photos/event-3.webp';
	import Goal from '$lib/components/Goal.svelte';
</script>

<div class="main-content">
	<div class="about-us">
		<h5>Om Os</h5>
		<div>Vores Historie <br /> & Mission</div>
		<hr />
		<p>Taiba Moské — I muslimernes tjeneste siden 1992</p>
	</div>
	<div class="about-us-info">
		<div class="small-title">
			<h5>Vores Baggrund</h5>
			<img src={diamond} alt="diamond with a golden color" />
		</div>
		<div class="big-title">Ny ejendom – flere muligheder</div>
		<p>
			Takket være Allah har Masjid Taiba nu for tredje år været velsignet med
			muligheden for at tilbyde vores muslimske fælleskab en række aktiviteter
			fra de fem daglige bønner til sociale arrangementer, weekendskole for børn
			og Koran undervisning for alle. Alt dette er som følge af de gode
			faciliteter i vores nye bygning på <a
				href="https://maps.app.goo.gl/UZg4CY8UK4w45reBA"
				>Frederikssundsvej 276 i Brønshøj.</a
			>
		</p>
		<img class="logo" src={logo} alt="" />
	</div>
	<div class="stats">
		<dl>
			<div>
				<dt>Grundlagt</dt>
				<dd>1992</dd>
			</div>
			<div>
				<dt>Medlemmer</dt>
				<dd>125+</dd>
			</div>
			<div>
				<dt>Programmer</dt>
				<dd>5</dd>
			</div>
			<div class="md-view">
				<dt>Adresse</dt>
				<dd>Frederikssundsvej 276 Brønshøj</dd>
			</div>
		</dl>
	</div>
	<div class="img-container"><img src={gather} alt="" /></div>
</div>

<Goal />

<style>
	.main-content {
		display: grid;
	}

	.img-container {
		grid-row: 3/4;
	}

	.img-container img {
		max-height: 500px;
		width: 100%;
		object-fit: cover;
		border-radius: 95% 5% 82% 18% / 2% 94% 6% 98%;
		filter: grayscale(50%);
	}

	.about-us {
		background: var(--clr-bg-hero);
		padding: 2rem;
	}

	.about-us div {
		font-size: 2.9rem;
		color: var(--fc-primary);
		font-family: var(--ff-heading);
	}

	.about-us p {
		margin-top: 1rem;
		color: var(--clr-parchment);
		font-style: italic;
	}

	.about-us-info {
		padding: 2rem;
	}

	.logo {
		max-width: 200px;
		max-height: 200px;
		margin-inline: auto;
	}

	.small-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--clr-bg-jade);
		letter-spacing: 0.3rem;
	}

	.small-title img {
		width: 8px;
	}

	.big-title {
		color: var(--clr-bg-emerald);
		font-family: var(--ff-heading);
		font-size: 2rem;
	}

	a {
		color: var(--clr-gold);
		font-weight: 600;
	}

	.about-us h5 {
		letter-spacing: 0.2rem;
		color: var(--clr-sage);
		text-transform: uppercase;
	}

	hr {
		width: 20%;
		height: 1px;
		background-color: var(--clr-gold);
		border: none;
	}

	.stats {
		background-color: var(--clr-bg-nav);
		padding-block: 1rem;
	}

	dl {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	dl div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	dl div + div {
		border-left: 1px solid rgba(201, 168, 76, 0.7);
	}

	dl .md-view {
		display: none;
	}

	dd {
		color: var(--clr-gold);
		font-family: var(--ff-heading);
		font-size: 2rem;
	}

	dt {
		order: 1;
		font-family: var(--ff-nav-links);
		color: var(--clr-sage);
	}

	@media (min-width: 768px) {
		.main-content {
			grid-template-columns: 1fr 1fr;
		}

		.img-container {
			grid-row: 2/3;
		}

		.about-us {
			grid-column: 1/2;
		}

		.stats {
			grid-column: 2/3;
			grid-row: 1/2;
			background-color: #121212;
			padding: 2rem;
		}

		dl {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(4, 1fr);
			height: 100%;
		}

		dl .md-view {
			display: flex;
		}

		.md-view dd {
			font-size: 1.2rem;
			color: var(--fc-primary);
		}

		dl div + div {
			border-left: none;
		}

		dl div:not(.md-view) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		dl div {
			flex-direction: row;
			justify-content: space-between;
		}

		dt {
			order: 0;
		}
	}

	@media (min-width: 1200px) {
		.main-content {
			grid-template-columns: 1.3fr 1fr;
		}

		br {
			display: none;
		}

		.stats {
			background: var(--clr-bg-hero);
			border-left: 1px solid var(--clr-gold);
		}
	}
</style>

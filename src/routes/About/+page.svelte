<script>
	import diamond from '$lib/assets/diamond.svg';
</script>

<div class="main-content">
	<div class="about-us">
		<h5>Om Os</h5>
		<div>Vores Historie & <br /> Mission</div>
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
			Takket vare Allah har Masjid Taiba nu for tredje år været velsignet med
			muligheden for at tilbyde vores muslimske fælleskab en række aktiviteter
			fra de fem daglige bønner til sociale arrangementer, weekendskole for børn
			og Koran undervisning for alle. Alt dette er som følge af de gode
			faciliteter i vores nye bygning på <a
				href="https://maps.app.goo.gl/UZg4CY8UK4w45reBA"
				>Frederikssundsvej 276 i Brønshøj.</a
			>
		</p>
		<p>
			Endelig har vi fået vores egen bygning, som skal danne rammen om masser af
			gode gerninger og fællesskab. Vi har stadig et stort stykke arbejde foran
			os, og vi får brug for al den hjælp, vi kan få, for at skabe en levende og
			succesfuld moské.
		</p>
	</div>
</div>

<style>
	.main-content > div {
		padding: 2rem;
	}

	.main-content {
		display: grid;
	}

	.about-us {
		background: var(--clr-bg-hero);
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

	p + p {
		margin-top: 1rem;
	}

	hr {
		width: 20%;
		height: 1px;
		background-color: var(--clr-gold);
		border: none;
	}
</style>

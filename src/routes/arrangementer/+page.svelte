<script>
	import Cta from '$lib/components/Cta.svelte';
	import EventCardList from '$lib/components/EventCardList.svelte';
	import News from '$lib/components/News.svelte';
</script>

<svelte:head>
	<title>Arrangementer — Taiba Moské</title>
	<meta
		name="description"
		content="Se vores kalender med kommende arrangementer, programmer og begivenheder hos Taiba Moské i Brønshøj."
	/>
	<link rel="canonical" href="https://taiba.dk/arrangementer/" />
</svelte:head>

<div class="head">
	<div class="about-us">
		<h4>Arrangementer</h4>
		<div>Kommende <br /> Arrangementer</div>
		<hr />
		<p>Hold dig opdateret med vores kommende arrangementer.</p>
		<a href="#news" class="news">Se Nyheder</a>
	</div>
</div>
<EventCardList />
<div id="news">
	<News />
</div>
<Cta />

<style>
	hr {
		width: 30%;
		height: 2px;
		background-color: var(--clr-gold);
		border: none;
	}

	h4 {
		color: var(--clr-sage);
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	.head {
		background: var(--clr-bg-hero);
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
		margin-block: 1rem;
		color: var(--clr-parchment);
		font-style: italic;
	}

	.news {
		border: 1px solid var(--clr-gold-light);
		color: var(--clr-gold);
		padding: 0.5rem 2rem;
		font-weight: 600;
	}

	@media (min-width: 768px) {
		.about-us div br {
			display: none;
		}

		hr {
			width: 20%;
		}
	}
</style>

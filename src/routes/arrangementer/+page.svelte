<script>
	import Cta from '$lib/components/Cta.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import i from '$lib/assets/events/dars-kids.webp';
	const images = import.meta.glob(['../../lib/assets/events/*'], {
		eager: true,
		import: 'default'
	});

	const imgSources = Object.values(images);
</script>

<div class="head">
	<div class="about-us">
		<h4>Arrangementer</h4>
		<div>Kommende <br /> Arrangementer</div>
		<hr />
		<p>Hold dig opdateret med vores kommende arrangementer.</p>
	</div>
</div>
<Carousel {imgSources} />
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
		margin-top: 1rem;
		color: var(--clr-parchment);
		font-style: italic;
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

<script>
	import Hero from '$lib/components/Hero.svelte';
	import diamond from '$lib/assets/diamond.svg';
	import hadith from '$lib/data/hadith.json';
</script>

<Hero />

{#snippet offers(className)}
	<div class="container {className}">
		<div>
			<div class="activity">Daglige Bønner</div>
			<div class="activity-description">
				Fem daglige bønner. Jumu'ah kl. 13:30.
			</div>
		</div>
		<div>
			<div class="activity">Islamisk Undervisning</div>
			<div class="activity-description">
				Tarbiyah og Arabisk til børn, Koran & foredrag.
			</div>
		</div>
		<div>
			<div class="activity">Samfundstjenester</div>
			<div class="activity-description">
				Madbank, rådgivning & ungdomsprogrammer.
			</div>
		</div>
	</div>
{/snippet}

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
	{@render offers('lg-view')}
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

<style>
	.description h1 {
		color: var(--clr-bg-emerald);
		line-height: 1.15;
		margin-bottom: 0.635rem;
		font-weight: 300;
	}

	.container.lg-view {
		display: none;
	}

	.description {
		padding: 2rem;
		background-color: --;
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
		background-color: var(--clr-bg-emerald);
		padding: 2rem;
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
		color: var(--clr-bg-alt);
		font-family: var(--ff-heading);
		font-style: italic;
		font-weight: 300;
		font-size: 1.2rem;
		border-left: 3px solid var(--clr-gold);
		padding-left: 1rem;
		height: 150px;
		overflow-y: scroll;
		scrollbar-color: #c9a84c #c9a84c;
		scrollbar-width: thin;
	}

	.hadith-container p {
		color: var(--clr-gold);
		text-align: right;
		letter-spacing: 0.5rem;
	}
</style>

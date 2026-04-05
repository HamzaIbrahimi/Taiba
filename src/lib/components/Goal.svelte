<script>
	import getGoal from '$lib/utils/goal';
	import Spinner from './Spinner.svelte';
	let promise = getGoal();
</script>

{#snippet progress(response = null)}
	<!-- if no response add the latest value manually -->
	<div class="goal">
		<div>
			<p class="collected">
				{response ? response.collected : '452000'} kr <span>indsamlet</span>
			</p>
		</div>
		<div>
			<p class="goalgoal">Mål: {response ? response.goal : '1100000'} kr</p>
		</div>
	</div>
	<div class="bar">
		<div
			class="inner-bar"
			style="width: {response
				? ((response.collected / response.goal) * 100).toFixed(2)
				: ((452000 / 1100000) * 100).toFixed(2)}% ;"
		></div>
	</div>
{/snippet}

<section>
	<div class="intro">
		<h4>Støt Masjid Taiba</h4>
		<h1>Sammen når vi målet · <br /> <span>Frederikssundsvej 276</span></h1>
		<p>
			Alle indsamlede midler vil blive brugt til at tilbagebetale vores gæld til
			enkeltpersoner og skattestyrelsen.
		</p>
		<div class="progress-bar">
			{#await promise}
				<p>Henter Donations Data...</p>
				<Spinner />
			{:then value}
				{@render progress(value)}
			{:catch error}
				{@render progress()}
			{/await}
		</div>
	</div>
	<div class="donation md-view">
		<a
			class="donate-btn"
			href="https://buy.stripe.com/8wMdUefCodnybmM5kH"
			target="_blank">Donér nu →</a
		>
		<a class="donate-btn lg-view" href="#subscriptions">Se Bank Info</a>
		<a class="donate-btn lg-view" href="#subscriptions">Vis QR-Kode</a>
	</div>
</section>

<style>
	section {
		display: grid;
		padding: 2rem;
		background-color: var(--clr-bg-nav);
	}

	.md-view,
	.lg-view {
		display: none;
	}

	h4 {
		color: var(--clr-sage);
		font-family: var(--ff-nav-links);
	}

	h1 {
		color: var(--fc-primary);
		font-family: var(--ff-heading);
	}
	h1 span {
		color: var(--clr-gold);
	}

	p {
		color: var(--fc-primary);
	}

	.goal {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}

	.collected {
		color: var(--clr-gold);
		font-size: 1.9rem;
		font-family: var(--ff-heading);
	}

	.goalgoal,
	p span {
		color: var(--clr-sage);
		font-size: 1rem;
	}

	.inner-bar,
	.bar {
		border-radius: 2rem;
		height: 6px;
	}

	.bar {
		/* Same gold light color in rgba */
		background-color: rgba(232, 201, 122, 0.3);
		position: relative;
	}

	.inner-bar {
		position: absolute;
		background-color: var(--clr-gold);
	}

	@media (min-width: 768px) {
		section {
			grid-template-columns: 2fr 1fr;
			gap: 0.8rem;
		}

		.donate-btn {
			padding: 0.5rem 0.5rem;
			font-size: 1.1rem;
			width: 70%;
		}
		.md-view {
			display: flex;
			align-self: center;
		}
	}

	@media (min-width: 1200px) {
		.lg-view {
			display: flex;
			margin-top: 1rem;
			background-color: inherit;
			border: 1px solid var(--clr-gold);
			color: var(--clr-gold);
		}

		.md-view {
			flex-direction: column;
			align-items: center;
		}
		br {
			display: none;
		}
	}
</style>

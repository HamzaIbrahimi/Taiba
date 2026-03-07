<script>
	import diamond from '$lib/assets/diamond.svg';
	import caret from '$lib/assets/caret-right.svg';
	import pattern from '$lib/assets/taiba-geometric-pattern.svg';
	import { page } from '$app/state';
	import todaysPrayerTimes from '$lib/utils/time';
	let currentPage = $state(page.url.pathname);
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
	let { changeState } = $props();
</script>

<div class="sidebar-container">
	<nav>
		<a onclick={changeState} href="/">
			<div
				style="color: {currentPage === '/'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
				class="current-title"
			>
				Forside<span>Startside</span>
			</div>
			<img
				src={currentPage === '/' ? diamond : caret}
				alt="direct to about page"
			/>
		</a>

		<a onclick={changeState} href="/About">
			<div
				class="current-title"
				style="color: {currentPage === '/About'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
			>
				Om Os <span>Vores Historie & Mission</span>
			</div>
			<img
				src={currentPage === '/About' ? diamond : caret}
				alt="direct to about page"
			/>
		</a>

		<a onclick={changeState} href="/Events">
			<div
				class="current-title"
				style="color: {currentPage === '/Events'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
			>
				Arrangementer<span>Kalender & Programmer</span>
			</div>
			<img
				src={currentPage === '/Events' ? diamond : caret}
				alt="direct to about page"
			/>
		</a>
		<a onclick={changeState} href="/Contact">
			<div
				class="current-title"
				style="color: {currentPage === '/Contact'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
			>
				Kontakt<span>Find Os & Åbningstider</span>
			</div>
			<img
				src={currentPage === '/Contact' ? diamond : caret}
				alt="direct to about page"
			/>
		</a>
	</nav>
	<div class="prayer-times-container">
		<div class="salahs">
			{#each prayerNames as name}
				<div>{name}</div>
			{/each}
		</div>
		<div class="times">
			{#each prayerNames as name}
				<div>{prayerTimes[name]}</div>
			{/each}
		</div>
		<a
			class="donate-btn"
			href="https://buy.stripe.com/3cIaEXgDqg2k2ygaWCfw40w"
			target="_blank">Donér nu</a
		>
	</div>

	<img class="geometric-pattern" src={pattern} alt="Islamic geometric art" />
</div>

<style>
	img {
		width: 10px;
		height: 10px;
		pointer-events: none;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--clr-border-gold);
		text-decoration: none;
		width: 100%;
	}

	span {
		color: var(--clr-sage);
		font-size: var(--fs-body);
		display: block;
		text-transform: uppercase;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem 1.5rem;
		letter-spacing: 0.3rem;
	}
	nav > * {
		flex: 1;
	}

	.sidebar-container {
		background-color: var(--clr-bg-nav);
		width: 100%;
		height: 90%;
		position: absolute;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
		right: 0;
		overflow: hidden;
	}

	.current-title {
		font-family: var(--ff-heading);
		font-size: var(--fs-nav-links-burger);
		color: var(--fc-primary);
	}

	.prayer-times-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 40px 30px 40px 40px;
		padding: 0.5rem 1.5rem;
		gap: 0.1rem;
	}

	.salahs,
	.times {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
	}

	.salahs {
		border-top: 1px solid var(--clr-border-gold);
		color: var(--clr-sage);
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		padding-top: 0.5rem;
	}

	.times {
		color: var(--clr-gold);
	}

	.geometric-pattern {
		position: absolute;
		z-index: 1;
		width: 400px;
		height: 400px;
		opacity: 0.06;
		right: 0;
		bottom: 200px;
		left: 100px;
	}

	.donate-btn {
		background: var(--clr-gold);
		padding: 0.375rem 0.75rem;
		border-radius: 0.125rem;
		font-family: var(--ff-nav-links);
		color: var(--clr-bg-nav);
		text-align: center;
	}
</style>

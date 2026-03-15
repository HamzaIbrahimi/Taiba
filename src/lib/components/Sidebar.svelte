<script>
	import diamond from '$lib/assets/diamond.svg';
	import caret from '$lib/assets/caret-right.svg';
	import pattern from '$lib/assets/taiba-geometric-pattern.svg';
	import facebook from '$lib/assets/facebook.svg';
	import email from '$lib/assets/email.svg';
	import instagram from '$lib/assets/instagram-logo.svg';
	import { page } from '$app/state';
	import todaysPrayerTimes from '$lib/utils/time';
	import { fly } from 'svelte/transition';
	let currentPage = $state(page.url.pathname);
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
	let { changeState } = $props();
</script>

<div class="sidebar-container" transition:fly={{ x: 560, duration: 700 }}>
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

		<a onclick={changeState} href="/about">
			<div
				class="current-title"
				style="color: {currentPage === '/about'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
			>
				Om Os <span>Vores Historie & Mission</span>
			</div>
			<img
				src={currentPage === '/about' ? diamond : caret}
				alt="direct to about page"
			/>
		</a>

		<a onclick={changeState} href="/events">
			<div
				class="current-title"
				style="color: {currentPage === '/events'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
			>
				Arrangementer<span>Kalender & Programmer</span>
			</div>
			<img
				src={currentPage === '/events' ? diamond : caret}
				alt="direct to about page"
			/>
		</a>
		<a onclick={changeState} href="/contact">
			<div
				class="current-title"
				style="color: {currentPage === '/contact'
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
			>
				Kontakt<span>Find Os & Åbningstider</span>
			</div>
			<img
				src={currentPage === '/contact' ? diamond : caret}
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
	</div>
	<img class="geometric-pattern" src={pattern} alt="Islamic geometric art" />
	<footer>
		<div class="donation-container">
			<a
				class="donate-btn"
				href="https://buy.stripe.com/8wMdUefCodnybmM5kH"
				target="_blank">Donér nu</a
			>
		</div>
		<dir class="social-links">
			<a href="https://www.facebook.com/MasjidTaiba1/" target="_blank">
				<img src={facebook} alt="facebook logo" /></a
			>
			<a
				href="https://www.instagram.com/masjidtaiba?igsh=ZmhmYWRiaXNjOGY4"
				target="_blank"
			>
				<img src={instagram} alt="instagram logo" /></a
			>
			<a href="mailto:info@taiba.dk" target="_blank">
				<img src={email} alt="email logo" /></a
			>
		</dir>
	</footer>
</div>

<style>
	img {
		width: 10px;
		height: 10px;
		pointer-events: none;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 1rem 1.5rem;
		letter-spacing: 0.3rem;
	}

	nav a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		border-bottom: 1px solid var(--clr-border-gold);
		width: 100%;
	}

	span {
		color: var(--clr-sage);
		font-size: var(--fs-body);
		display: block;
		text-transform: uppercase;
	}

	nav > * {
		flex: 1;
	}

	.sidebar-container {
		background: var(--clr-bg-nav);
		min-width: 100%;
		min-height: 90%;
		position: absolute;
		display: grid;
		grid-template-columns: 1fr;
		overflow: hidden;
		z-index: 100;
	}

	.current-title {
		font-family: var(--ff-heading);
		font-size: var(--fs-nav-links-burger);
		color: var(--fc-primary);
	}

	.prayer-times-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 30px 50px;
		padding: 0.5rem 1.5rem;
		gap: 0.1rem;
		height: fit-content;
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
		font-size: 1.7rem;
		font-family: var(--ff-heading);
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

	footer {
		padding: 1.5rem 1.5rem 0;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		border-top: 1px solid var(--clr-border-gold);
	}

	.donate-btn {
		background: var(--clr-gold);
		padding: 1.2rem 0.9rem;
		border-radius: 0.125rem;
		font-family: var(--ff-nav-links);
		color: var(--clr-bg-nav);
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	.social-links img {
		width: 40px;
		height: 40px;
	}
</style>

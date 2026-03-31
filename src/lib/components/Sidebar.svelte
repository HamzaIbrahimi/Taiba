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
	let currentPage = page.url.pathname;
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
	let { changeState } = $props();
</script>

<div class="sidebar-container" transition:fly={{ x: 560, duration: 700 }}>
	{#snippet navLink(route, txt, spanTxt)}
		<a onclick={changeState} href={route}>
			<div
				style="color: {currentPage === route
					? 'var(--clr-gold)'
					: 'var(--fc-primary)'}"
				class="current-title"
			>
				{txt}<span>{spanTxt}</span>
			</div>
			<img
				src={currentPage === route ? diamond : caret}
				alt="direct to {route === '/' ? 'home' : route} page"
			/>
		</a>
	{/snippet}
	<nav>
		{@render navLink('/', 'Forside', 'Startside')}
		{@render navLink('/about', 'Om Os', 'Vores Historie & Mission')}
		{@render navLink('/events', 'Arrangementer', 'Kalender & Programmer')}
		{@render navLink('/contact', 'Kontakt', 'Find Os & Åbningstider')}
		{@render navLink('/salah-times', 'Bønnetider', 'Salah Årskalender')}
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
		<div class="social-links">
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
		</div>
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
		gap: 1rem;
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

	footer {
		padding: 1.5rem 1.5rem;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		gap: 2rem;
		height: 300px;
		border-top: 1px solid var(--clr-border-gold);
	}

	.sidebar-container {
		position: absolute;
		background: var(--clr-bg-nav);
		width: 100%;
		overflow: hidden;
		right: 0;
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
		padding: 1rem 1.5rem;
		gap: 0.1rem;
		height: fit-content;
		justify-content: start;
	}

	.salahs,
	.times {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
	}

	.salahs {
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

<script>
	import Sidebar from './Sidebar.svelte';
	import burger from '$lib/assets/hamburger-menu.svg';
	import close from '$lib/assets/close.svg';
	import { page } from '$app/state';
	let currentPage = $derived(page.url.pathname);
	let windowWidth = $state(0);
	let open = $state(false);
	function closeSidebarOnResize() {
		if (windowWidth > 550) {
			open = false;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} onresize={closeSidebarOnResize} />
<header>
	<nav>
		<a class="nav-logo" href="/" onclick={() => (open = false)}
			>TAIBA <br /> MOSKÉ</a
		>
		<ul>
			<li>
				<a class={currentPage === '/' ? 'active' : ''} href="/">FORSIDE</a>
			</li>
			<li>
				<a class={currentPage === '/om-os' ? 'active' : ''} href="/om-os"
					>OM OS</a
				>
			</li>
			<li>
				<a
					class={currentPage === '/arrangementer' ? 'active' : ''}
					href="/arrangementer">ARRANGEMENTER</a
				>
			</li>
			<li>
				<a class={currentPage === '/kontakt' ? 'active' : ''} href="/kontakt"
					>KONTAKT</a
				>
			</li>
		</ul>
		<a
			class="donate-link"
			href="https://buy.stripe.com/8wMdUefCodnybmM5kH"
			target="_blank">Donér nu</a
		>
		<button class="burger-button" onclick={() => (open = !open)}>
			<img src={open ? close : burger} alt="burger menu button" />
		</button>
	</nav>
</header>
{#if open}
	<aside>
		<Sidebar changeState={() => (open = !open)} />
	</aside>
{/if}

<style>
	header {
		padding: 1rem 2.5rem;
		background-color: var(--clr-bg-nav);
		border-bottom: 1px solid var(--clr-gold);
		min-width: 100%;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--fs-nav-links);
	}

	.nav-logo {
		color: var(--clr-gold);
		font-family: var(--ff-nav-links);
	}

	.nav-logo span {
		color: var(--clr-bg-jade);
	}

	.donate-link {
		background: var(--clr-gold);
		padding: 0.375rem 0.75rem;
		border-radius: 0.125rem;
		font-family: var(--ff-nav-links);
		color: var(--clr-bg-nav);
	}

	.donate-link:hover {
		text-decoration: underline;
		text-underline-offset: 0.5rem;
	}

	img {
		width: 40px;
		height: 40px;
		color: var(--clr-gold);
	}

	ul {
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	a {
		color: var(--clr-bg-alt);
		letter-spacing: 0.2rem;
	}

	.active,
	li a:hover {
		color: var(--clr-gold);
		text-decoration: underline;
		text-underline-offset: 8px;
	}

	li a:hover {
		transition: 200ms ease-in;
	}

	.burger-button {
		color: var(--clr-gold);
		background: var(--clr-bg-nav);
		border: none;
		outline: none;
		cursor: pointer;
		display: none;
	}

	span {
		display: block;
	}
	.sm-view {
		display: none;
	}

	@media (max-width: 1300px) {
		.sm-view {
			display: block;
		}
		.lg-view {
			display: none;
		}
	}
	@media (max-width: 920px) {
		.burger-button {
			display: block;
		}
		ul,
		.donate-link {
			display: none;
		}
	}
</style>

<script>
	import { page } from '$app/state';
	import Sidebar from './Sidebar.svelte';
	import burger from '$lib/assets/hamburger-menu.svg';
	import close from '$lib/assets/close.svg';
	let windowWidth = $state(0);
	let open = $state(false);
	$effect(() => {
		if (windowWidth > 550) {
			open = false;
		}
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />
<header>
	<nav>
		<a class="nav-logo" href="/" onclick={() => (open = false)}
			>TAIBA<span class="lg-view">MOSKÉ · EST. 2000</span>
			<span class="sm-view">MOSKÉ</span></a
		>
		<ul>
			<li><a href="/">FORSIDE</a></li>
			<li><a href="/about">OM OS</a></li>
			<li><a href="/events">ARRANGEMENTER</a></li>
			<li><a href="/contact">KONTAKT</a></li>
		</ul>
		<a
			class="donate-link"
			href="https://buy.stripe.com/3cIaEXgDqg2k2ygaWCfw40w"
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
		font-family: var(--ff-lato-regular);
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

	li a {
		opacity: 0.8;
	}

	li a:hover {
		opacity: 1;
		color: var(--clr-gold);
		text-decoration: underline;
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

	@media (max-width: 850px) {
		ul {
			flex-wrap: wrap;
		}

		.sm-view {
			display: block;
		}
		.lg-view {
			display: none;
		}
	}
	@media (max-width: 550px) {
		.burger-button {
			display: block;
		}

		ul,
		.donate-link {
			display: none;
		}
		.nav-logo {
			font-size: 1.1rem;
		}
	}
</style>

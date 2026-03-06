<script>
	import { page } from '$app/state';
</script>

<header>
	<nav>
		<a class="nav-logo" href="/">TAIBA<span>MOSKÉ · EST. 2000</span></a>
		<ul>
			<li><a href="/">FORSIDE</a></li>
			<li><a href="/About">OM OS</a></li>
			<li><a href="/Events">ARRANGEMENTER</a></li>
			<li><a href="/Contact">KONTAKT</a></li>
		</ul>
		<a
			class="donate-link"
			href="https://buy.stripe.com/3cIaEXgDqg2k2ygaWCfw40w"
			target="_blank">Donér nu</a
		>
	</nav>
</header>

<style>
	header {
		padding: 1rem 2rem;
		background-color: var(--clr-bg-nav);
		border-bottom: 1px solid var(--clr-gold);
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--fs-nav-links);
	}

	ul {
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	a {
		font-size: var(--fs-nav-links);
		color: var(--clr-bg-alt);
		text-decoration: none;
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

	span {
		display: block;
	}

	.nav-logo {
		color: var(--clr-gold);
		font-family: var(--ff-nav-links);
	}

	.nav-logo span {
		color: var(--clr-bg-jade);
		font-family: var(--ff-lato-regular);
		font-size: 0.8rem;
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

	@media (max-width: 768px) {
	}
</style>

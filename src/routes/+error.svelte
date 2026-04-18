<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Siden blev ikke fundet · Taiba Moské</title>
</svelte:head>

<div class="error-page">
	<div class="error-content">
		<div class="error-number">{page.status}</div>
		<h1>Siden blev ikke fundet</h1>
		<p>Den side du leder efter eksisterer ikke eller er blevet flyttet.</p>
		<a href="/" class="home-btn">← Tilbage til Forsiden</a>
		<nav class="quick-links">
			<span>Eller besøg</span>
			<a href="/bønnetider">Bønnetider</a>
			<a href="/arrangementer">Arrangementer</a>
			<a href="/om-os">Om Os</a>
			<a href="/kontakt">Kontakt</a>
		</nav>
	</div>
</div>

<style>
	.error-page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: var(--clr-bg-hero);
		gap: 2rem;
	}

	h1 {
		font-size: 2.5rem;
	}

	.error-number,
	h1 {
		font-family: var(--ff-heading);
	}

	h1,
	p {
		color: var(--fc-primary);
		margin-bottom: 1rem;
	}

	.error-number {
		font-size: 10rem;
		color: var(--clr-gold);
	}

	a {
		font-family: var(--ff-nav-links);
		color: var(--clr-gold);
	}

	.home-btn {
		padding: 1rem 2rem;
		border: 1px solid black;
		color: black;
		background-color: var(--clr-gold);
		letter-spacing: 0.2rem;
	}

	.home-btn:hover {
		outline: 1px solid black;
	}

	nav {
		margin-top: 1rem;
	}

	nav a {
		margin-left: 1rem;
		text-decoration: underline;
		text-underline-offset: 0.3rem;
	}

	span {
		display: block;
		color: var(--clr-sage);
	}
</style>

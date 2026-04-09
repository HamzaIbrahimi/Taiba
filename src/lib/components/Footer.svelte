<script>
	let today = new Date();
</script>

<footer class="footer-strip">
	<div class="footer-logo">TAIBA MOSKÉ</div>
	<div class="footer-copy">
		<div>
			&copy {today.getFullYear()} Taiba Moské · Alle rettigheder forbeholdes
		</div>
		<div class="credits">
			Hjemmeside Udviklet af <a href="mailto:haib5@icloud.com">Hamza</a>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 1rem;
		background-color: var(--clr-bg-nav);
	}

	.footer-logo,
	.credits,
	a {
		color: var(--clr-gold);
	}

	.footer-logo {
		font-size: 1.2rem;
		font-family: var(--ff-nav-links);
	}

	.footer-copy {
		font-size: 0.7rem;
		color: var(--clr-sage);
	}

	a {
		transition: 1000ms ease-out;
	}

	a:hover {
		padding-left: 1rem;
		letter-spacing: 0.3rem;
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		transition: 1000ms ease-in-out;
	}
</style>

<script>
	let today = new Date();
</script>

<footer class="footer-strip">
	<div class="footer-logo">TAIBA MOSKÉ</div>
	<div class="footer-copy">
		&copy {today.getFullYear()} Taiba Moské · Alle rettigheder forbeholdes
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: var(--clr-bg-nav);
	}

	.footer-logo {
		color: var(--clr-gold);
		font-size: 1.2rem;
		font-family: var(--ff-nav-links);
	}

	.footer-copy {
		font-size: 0.7rem;
		color: var(--clr-sage);
	}
</style>

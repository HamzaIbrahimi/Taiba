<script>
	let eidDate = new Date('2026-05-27T11:00:00');
	let today = new Date();
	let banner = $state(today <= eidDate);
</script>

{#if banner}
	<div class="banner">
		<div class="banner-left">
			<div>
				<div class="event">Kommende begivenhed</div>
				<div class="event-type">
					Eid ul-Adha 2026 <span class="time">kl 9:30</span>
				</div>
			</div>
		</div>
		<div class="banner-right">
			<div>Dato</div>
			<div>Onsdag 27 Maj 09:30</div>
		</div>
	</div>
{/if}

<style>
	.banner {
		display: flex;
		justify-content: space-between;
		background-color: var(--clr-bg-nav);
		border-bottom: 4px solid var(--clr-gold);
		padding: 2rem;
		font-family: var(--ff-nav-links);
	}

	.banner-left {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.banner-right {
		display: none;
	}

	.event {
		letter-spacing: 0.2rem;
		color: var(--clr-sage);
		font-weight: 900;
		font-size: 1.2rem;
	}

	.event-type {
		color: var(--clr-gold);
		font-size: 1.4rem;
	}

	.time {
		margin-left: 1rem;
	}

	@media (min-width: 768px) {
		.time {
			display: none;
		}
		.banner-right {
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 1px solid var(--clr-gold-light);
			padding: 0.2rem 2rem;
			background-color: rgba(201, 168, 76, 0.12);
		}
		.banner-right div:first-child {
			color: var(--clr-sage);
		}
		.banner-right div:nth-child(2) {
			color: var(--clr-gold);
			font-weight: 900;
		}
	}
</style>

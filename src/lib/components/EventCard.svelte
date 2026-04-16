<script>
	import clock from '$lib/assets/clock.svg';
	let info = $props();
</script>

<div class="card">
	<div class="header">
		<div class="type">{info.repeat} klasse</div>
		<div class="day">{info.day}</div>
	</div>
	<div class="body">
		<div class="body-left">
			<div class="time-img-container">
				<img src={clock} alt="clock" />
			</div>
			<div class="time">
				<div class="time-start">{info.timeStart}</div>
				<div>—</div>
				<div class="time-end">{info.timeEnd}</div>
			</div>
		</div>
		<div class="body-right">
			<div class="title">
				{info.title ? info.title : info.type}
			</div>
			<div class="teacher">{info.teacher}</div>
		</div>
	</div>
	{#if info.for != 'alle'}
		<div class="gender">Kun for {info.for}</div>
	{:else}
		<div class="gender">Åben for {info.for}</div>
	{/if}
</div>

<style>
	.card {
		min-width: 400px;
		background: var(--gradient, var(--clr-bg-nav));
		padding: 2rem;
		font-family: var(--ff-heading);
		text-transform: uppercase;
		border-radius: 0.5rem;
		color: var(--fc-primary);
		border-top: 5px solid;
		border-image: var(--card-top-accent);
		scroll-snap-align: start;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.type,
	.teacher {
		color: var(--clr-gold);
	}

	.type {
		letter-spacing: 0.2rem;
	}

	.day {
		font-size: 2rem;
		font-weight: 600;
	}

	.body {
		font-size: 1.2rem;
		padding-block: 1rem;
		display: flex;
		gap: 2rem;
		border-bottom: 1px solid var(--clr-border-gold);
		border-top: 1px solid var(--clr-border-gold);
	}

	.body-left {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		border-right: 1px solid;
		padding-right: 1rem;
		border-image: linear-gradient(
				to bottom,
				transparent 0%,
				var(--clr-gold) 50%,
				transparent 100%
			)
			1;
		gap: 0.5rem;
	}

	.body-right {
		font-size: 1rem;
		align-self: center;
	}

	.time {
		display: flex;
		gap: 0.4rem;
	}

	.time-img-container {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(212, 175, 55, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.time-img-container img {
		width: 22px;
		height: 22px;
	}

	.teacher {
		text-transform: none;
	}

	.gender {
		border: 1px solid var(--clr-border-gold);
		background: rgba(255, 255, 255, 0.05);
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		width: fit-content;
		border-radius: 2rem;
		font-weight: 900;
		color: var(--clr-gold);
	}
</style>

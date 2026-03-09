<script>
	import todaysPrayerTimes from '$lib/utils/time';
	let prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
	let prayerTimes = todaysPrayerTimes();
</script>

<dl class="salah-times">
	{#each prayerNames as name}
		<div class="prayer">
			<dt>{name}</dt>
			<dd>{prayerTimes[name]}</dd>
		</div>
	{/each}
</dl>

<style>
	.salah-times {
		display: grid;
		grid-template-columns: var(--gtc, repeat(5, 1fr));
		font-family: var(--container--ff, var(--ff-heading));
		background-color: var(--container-bg);
		padding-block: var(--container-padding-block, 0);
		padding-inline: var(--container-padding-in, 0);
	}

	dt {
		letter-spacing: 0.2rem;
		color: var(--dt-color);
	}

	dd {
		font-weight: 1000;
		font-size: 1.3rem;
		color: var(--dd-color);
	}

	.prayer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: var(--padding-in, 0);
	}

	.prayer + .prayer {
		border-left: var(--border-l, none);
	}
</style>

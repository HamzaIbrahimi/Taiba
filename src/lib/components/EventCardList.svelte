<script>
	import EventCard from './EventCard.svelte';
	import events from '$lib/data/events.json';
	let gradients = {
		quran: 'var(--card-green-gradient)',
		aqeedah: 'var(--card-brown-gradient)',
		general: 'var(--card-blue-gradient)'
	};
</script>

<div class="event-cards-container">
	<div class="swipe">Swipe for at se mere ·</div>
	{#each events as info}
		<EventCard --gradient={gradients[info.type]} {...info} />
	{/each}
</div>

<style>
	.event-cards-container {
		display: flex;
		gap: 1rem;
		background-color: var(--clr-bg-alt);
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
		padding: 2rem;
		position: relative;
	}
	.swipe {
		position: absolute;
		top: 0;
		font-style: italic;
		font-family: var(--ff-nav-links);
		padding-inline: 2rem;
	}

	@media (min-width: 768px) {
		.event-cards-container {
			flex: none;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
			overflow: visible;
		}
		.swipe {
			display: none;
		}
	}
</style>

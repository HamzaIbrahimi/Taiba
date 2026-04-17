<script>
	import EventCard from './EventCard.svelte';
	import events from '$lib/data/events.json';

	let gradients = {
		quran: 'var(--card-green-gradient)',
		aqeedah: 'var(--card-brown-gradient)',
		general: 'var(--card-blue-gradient)'
	};
</script>

<h1>Sker Nu</h1>
<hr />
<div class="event-cards-container">
	<div class="swipe">Swipe for at se mere</div>
	{#each events as info}
		<EventCard --gradient={gradients[info.type]} {...info} />
	{/each}
</div>

<style>
	h1 {
		letter-spacing: 0.3rem;
		font-family: var(--ff-nav-links);
		animation: jump 2s infinite ease-in-out;
	}

	hr {
		border: none;
		height: 3px;
		background-color: var(--clr-border-green);
		margin-inline: 2rem;
	}

	.event-cards-container,
	h1 {
		background-color: var(--clr-bg-page);
		padding-inline: 2rem;
	}
	.event-cards-container {
		display: flex;
		gap: 1rem;
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
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
			overflow: visible;
		}
		.swipe {
			display: none;
		}
	}

	@keyframes jump {
		25% {
			transform: translateY(5%);
		}

		75% {
			transform: translateY(0px);
		}
	}
</style>

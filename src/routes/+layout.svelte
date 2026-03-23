<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../reset.css';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>{@render children()}</main>

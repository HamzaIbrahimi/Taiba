<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../reset.css';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Banner from '$lib/components/Banner.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Banner />
<Header />
<main>{@render children()}</main>
<Footer />

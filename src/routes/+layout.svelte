<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';

	import "../app.css";
</script>

<Header />

<main>
	<slot />
</main>

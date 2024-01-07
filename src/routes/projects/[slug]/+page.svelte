<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<h5>
		<p>
			Created @ {data.date}
			<br />
			Source @ {data.source}
		</p>
	</h5>
	<svelte:component this={data.content} />
</article>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');

	h5 {
		font-family: 'Caveat', cursive;
		font-size: larger;
	}
</style>

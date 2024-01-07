<script>
	export let data;
</script>

<h1>Projects</h1>

<ul>
	{#each data.projects as entry}
		<li>
			<h3>
				<a href="/projec{entry.path}">
					{entry.meta.title}
				</a>
				<p style="font-size: x-small;">{entry.meta.slug}</p>
			</h3>
			<h4>{entry.meta.date}</h4>
		</li>
	{/each}
</ul>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tektur&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Mooli&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 20px;
	}

	li {
		background-color: #c5cec2;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: 200px; /* Set the width of each card */
	}

	h3 {
		font-family: 'Tektur', sans-serif;
	}

	h4 {
		font-family: 'Caveat', cursive;
		font-size: larger;
	}
</style>

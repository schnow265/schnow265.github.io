<script>
	export let data;
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h3>
				<a href="/blog/{post.path}">
					{post.meta.title}
				</a>
			</h3>
			<h4>{post.meta.date}</h4>
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

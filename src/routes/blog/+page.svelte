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
			Published {post.meta.date}
		</li>
	{/each}
</ul>
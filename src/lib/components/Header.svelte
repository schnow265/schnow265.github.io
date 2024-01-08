<script>
	let getRandomFont = () => {
		const fontFamilies = [
			"'Long Cang', cursive",
			"'Wavefont', system-ui",
			"'Alex Brush', cursive",
			"'Blaka Ink', system-ui",
			"'Cairo Play', sans-serif",
			"'JetBrains Mono', monospace",
			"'Pacifico', cursive"
		];

		const randomIndex = Math.floor(Math.random() * fontFamilies.length);
		return fontFamilies[randomIndex];
	};
</script>

<header>
	<a class="random-font" href="/" style="font-family: {getRandomFont()}">schnow265</a>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>|</li>
			<li>
				<a href="/projects">My Projects</a>
			</li>
			<li>|</li>
			<li>
				<a href="/docs">Docs</a>
			</li>
			<li>|</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
			<li>|</li>
			<li>
				<a href="https://github.com/schnow265" target="_blank">GitHub</a>
			</li>
		</ul>
	</nav>

	<!-- <p style=" font-family: ;">(c) 2024 @ schnow265</p> -->
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Long+Cang&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Wavefont&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Blaka+Ink&family=Cairo+Play&family=JetBrains+Mono&family=Pacifico&display=swap');

	.random-font {
		font-size: x-large;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	header {
		padding: 1rem;
		background: #4b6971;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		color: #e6f4f1;
	}

	nav {
		font-family: 'IBM Plex Mono', monospace;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
</style>

export async function load({ params }) {
	const post = await import(`../../../projects/${params.slug}.md`);
	const { title, date, source, slug } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		source,
		slug
	};
}

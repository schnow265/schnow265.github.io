export const load = async ({ fetch }) => {
	const response1 = await fetch(`/api/posts`);
	const posts = await response1.json();
	const response = await fetch(`/api/projects`);
	const projects = await response.json();

	return {
		posts,
		projects
	};
};

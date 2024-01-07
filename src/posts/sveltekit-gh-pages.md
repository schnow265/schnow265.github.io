---
title: SvelteKit sites on GitHub pages. This time an updated version.
date: '2024-01-07'
---

I really hate it when I was researching a guide on how I will host my docs using GitHub Pages. All guides that I found were outdated. So I grabbed all the code that I need, and struk gold.

## What you need

- Existing Svelte Project
- A Terminal

## How to do it

1. Run `npm i -D @sveltejs/adapter-static` to install the static Adapter for svelte. We will need this for the generation of the site.
2. Copy the first code block on the [Svelte Static Adapter Docs](https://kit.svelte.dev/docs/adapter-static) into your svelte.config.js file.
3. And add `export const prerender = true;` to `src/routes/+layout.js`. Create this file, if it not exists.
4. _If_ you need to add a "base" URL, because it's a subpage you make (like @ [https://schnow265.github.io/docs]) you will need to add the followingh lines of code into the svelte.config.js's "kit" option: `paths: { base: '/docs' },`.
5. Next strp: installing `gh-pages`: run `npm i --save-dev gh-pages`.
6. Now we need to write our own deploy rule. I am using the following code snippet to automaticly build the page, and then remove it. add the following line unter the `"scripts": {}` Tag: `"deploy": "vite build && gh-pages -d build && rm -rf build"`.
7. Now run `npm run deploy`. You should now have a second branch called "gh-pages", which includes the static website build.
8. If you see "Branch gh-pages has recent pushes a moment ago" on your repo, please go to `Settings -> Pages` and change the branch to gh-pages.
9. Congrats! You now can host your static site on GH Pages!

---
title: The SNOW-Stack v1.0
date: '2024-01-06'
---

The SNOW-Stack will be my web development stack for the next few years. But what is included? A full TLDR is on the bottom.

## Long Overview, with explanations

The SNOW-Stack is fully self-hostable. This is the main reason why I made this Stack the way it is.

### Technologies

As my main OS of choice: Fedora. But if I ever need to use Windows, I just make verything with WSL with systemD.
But there are other things to mention, like programming languages and tools.

#### Programming languages

- TypeScript
- Markdown
- Java
  - Zulu 17, _without_ JavaFX
  - Zulu 17, _with_ JavaFX
  - Adoptium Temurin 17
  - JBR (JetBrains Runtime) for HotSwapping Java Code.

#### Software & Tools

- Docker Engine (for designing & solving imaginary scaling problems at scale)
- nodejs for writing Frontends.
- git as VCS. Currently using GitHub, but will later use a self-hosted GitLab, when I have my own domain.
- Visual Studio Code as my main editor. Yes, even for Java. I initialy came from IntelliJ, but I love VSCode more for working with WSL

##### VSCode integrations

- WSL integration
- DevContainers for a quick & easy development environment.
- Tunnels. Oh god I love tunnels. I use them as an alternative for ssh.

### Frontend

- Svelte. Just Svelte. I like it. It's better than Angular. Also this site is built with Svelte.

### Full Backend (REST/GraphQL API's)

- Spring. (I told you that I would need Java.)

### Databases

- pocketbase (for User Authentication & basic storage)
- postgres (If pocketbase isn't enough)

## TL;DR

So, you want a quick summary of the SNOW-Stack v1.0? Here it is:

- Operating System
  - Fedora or Windows, WSL only with systemD and in host network mode.
- Languages
  - TypeScript
  - Markdown
  - Java
    - Zulu 17, _without_ JavaFX
    - Zulu 17, _with_ JavaFX
    - Adoptium Temurin 17
    - JBR (JetBrains Runtime) for HotSwapping Java Code.
- Software & Tools
  - Docker Engine
  - nodejs
  - git
  - Visual Studio Code
    - WSL
    - DevContainers
    - Remote Tunnels
- Frontend
  - Svelte
- Backends with RestAPI and GraphQL Support
  - Spring
- Databses
  - pocketbase
  - postgres

---
title: The SNOW-Stack v1.0
date: '2024-01-06'
---

The SNOW-Stack will be my web development stack for the next few years. But what is included? A full TLDR is on the bottom.

## Long Overview, with explanations

The SNOW-Stack is fully self-hostable. This is the main reason why I made this Stack the way it is.

### Technologies

As my main OS of choice: [Fedora](https://fedoraproject.org). But if I ever need to use Windows, I just make verything with WSL with [systemD](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/).
But there are other things to mention, like programming languages and tools.

#### Programming languages

- [TypeScript](https://www.typescriptlang.org/)
- [Markdown](https://www.markdownguide.org/cheat-sheet/)
- Java
  - [Zulu 17, *without* JavaFX](https://www.azul.com/downloads/?version=java-17-lts&package=jdk#zulu)
  - [Zulu 17, *with* JavaFX](https://www.azul.com/downloads/?version=java-17-lts&package=jdk-fx#zulu)
  - [Adoptium Temurin 17](https://adoptium.net/temurin/releases/?package=jdk&version=17)
  - [JBR (JetBrains Runtime)](https://github.com/JetBrains/JetBrainsRuntime) for HotSwapping Java Code.

#### Software & Tools

- [Docker Engine](https://docs.docker.com/engine/install/) (for designing & solving imaginary scaling problems)
- [nodejs](https://nodejs.org/en) for writing Frontends.
- [git](https://git-scm.com) as VCS. Currently using GitHub, but will later use a self-hosted GitLab, when I have my own domain.
- [Visual Studio Code](https://code.visualstudio.com/) as my main editor. Yes, even for Java. I initialy came from IntelliJ, but I love VSCode more for working with WSL

##### VSCode integrations

- WSL integration
- [DevContainers](https://containers.dev/) for a quick & easy development environment.
- Tunnels. Oh god I love tunnels. I use them as an alternative for ssh.

### Frontend

- [Svelte](https://svelte.dev/). Just Svelte. I like it. It's better than Angular. Also this site is [built with Svelte](https://github.com/schnow265/schnow265.github.io)

### Full Backend (REST/GraphQL API's)

- [Spring](https://spring.io/). (I told you that I would need Java.)

### Databases

- [pocketbase](https://pocketbase.io/) (for User Authentication & basic storage)
- [postgres](https://www.postgresql.org/) (If pocketbase isn't enough)

## TL;DR

So, you want a quick summary of the SNOW-Stack v1.0? Here it is:

- Operating System
  - [Fedora](https://fedoraproject.org)
  - Windows, WSL only with [systemD](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/) and in host network mode.
- Languages
  - [TypeScript](https://www.typescriptlang.org/)
  - [Markdown](https://www.markdownguide.org/cheat-sheet/)
  - Java
    - [Zulu 17, *without* JavaFX](https://www.azul.com/downloads/?version=java-17-lts&package=jdk#zulu)
    - [Zulu 17, *with* JavaFX](https://www.azul.com/downloads/?version=java-17-lts&package=jdk-fx#zulu)
    - [Adoptium Temurin 17](https://adoptium.net/temurin/releases/?package=jdk&version=17)
    - [JBR (JetBrains Runtime)](https://github.com/JetBrains/JetBrainsRuntime) for HotSwapping Java Code.
- Software & Tools
  - [Docker Engine](https://docs.docker.com/engine/install/)
  - [nodejs](https://nodejs.org/en)
  - [git](https://git-scm.com)
  - [Visual Studio Code](https://code.visualstudio.com/)
    - WSL
    - [DevContainers](https://containers.dev/)
    - Remote Tunnels
- Frontend
  - [Svelte](https://svelte.dev/)
- Backends with RestAPI and GraphQL Support
  - [Spring](https://spring.io/)
- Databses
  - [pocketbase](https://pocketbase.io/)
  - [postgres](https://www.postgresql.org/)

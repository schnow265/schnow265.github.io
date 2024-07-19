<template>
  <div class="container">
    <div class="image">
      <img src="/favicon.ico" />
    </div>
    <div class="welcome">
      <h1 class="text-3xl">Hello there!</h1>
      <p>
        I am an Austrian developer with a passion for coding. I have experience
        with various programming languages such as:
      </p>
      <br />
      <ul>
        <li>- Python</li>
        <li>- Java</li>
        <li>- TypeScript/JavaScript</li>
        <li>- bit of bash(ing my head)</li>
        <li>- C# (.Net)</li>
      </ul>
    </div>
    <br />
    <br />
    <div class="content">
      Yes, I use Linux. Currently running Fedora 40. (Entire history currently
      only on my GitHub Profile README, until I find out how to make a Table
      with TailwindCSS)
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 300px 256px 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "image welcome welcome"
    "content content content"
    "content content content";
}

.image {
  grid-area: image;
}

.welcome {
  grid-area: welcome;
}

.content {
  grid-area: content;
}
</style>

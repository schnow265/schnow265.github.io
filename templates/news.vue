<template>
  <div class="container">
    <div class="img"></div>
    <div class="content"></div>
    <div class="links"></div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 0.5fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "img content"
    "links content";
}

.img {
  grid-area: img;
}

.content {
  grid-area: content;
}

.links {
  grid-area: links;
}
</style>

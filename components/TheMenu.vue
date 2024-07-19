<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSubContent,
  MenubarSub,
  MenubarSubTrigger,
} from "@/components/ui/menubar";
</script>

<template>
  <div class="menu" style="bg-nord0">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Navigate</MenubarTrigger>
        <MenubarContent>
          <MenubarItem @click="navigateTo('/')">Home</MenubarItem>
          <MenubarItem @click="navigateTo('/about')">About</MenubarItem>
          <MenubarSeparator></MenubarSeparator>
          <MenubarSub>
            <MenubarSubTrigger>Linux</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem @click="navigateTo('/linux/fedora')"
                >Fedora</MenubarItem
              >
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>News</MenubarTrigger>
        <MenubarContent>
          <MenubarItem @click="navigateTo('/news')">News</MenubarItem>
          <MenubarSeparator></MenubarSeparator>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Projects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Projects</MenubarItem>
          <MenubarSeparator></MenubarSeparator>
          <MenubarItem
            @click="
              navigateTo('https://schnow265.github.io/booksAPI', {
                open: {
                  target: '_self',
                },
              })
            "
            >BooksAPI Docs</MenubarItem
          >
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Blog</MenubarTrigger>
        <MenubarContent>
          <MenubarItem @click="navigateTo('/blog')">Blog</MenubarItem>
          <MenubarSeparator></MenubarSeparator>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>My Links</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            @click="
              navigateTo('https://github.com/schnow265', {
                open: {
                  target: '_blank',
                },
              })
            "
            >GitHub</MenubarItem
          >
          <MenubarItem
            @click="
              navigateTo('https://reddit.com/u/TamSchnow/', {
                open: {
                  target: '_blank',
                },
              })
            "
            >Reddit</MenubarItem
          >
          <MenubarItem
            @click="
              navigateTo('https://mastodon.social/@schnow265', {
                open: {
                  target: '_blank',
                },
              })
            "
            >Mastodon @ mastodon.social</MenubarItem
          >
          <MenubarItem
            @click="
              navigateTo('https://matrix.to/#/@schnow265:matrix.org', {
                open: {
                  target: '_blank',
                },
              })
            "
            >Matrix</MenubarItem
          >
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style>
.menu {
  padding: 5px;
}
</style>

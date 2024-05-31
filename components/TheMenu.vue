<script setup lang="ts">
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
    <div class="menu">
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Navigate</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem @click="navigateTo('/')">Home</MenubarItem>
                    <MenubarItem @click="navigateTo('/about')">About</MenubarItem>
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
                <MenubarTrigger>Blog</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem @click="navigateTo('/blog')">Blog</MenubarItem>
                    <MenubarSeparator></MenubarSeparator>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>My Links</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem @click="navigateTo('https://github.com/schnow265', {
                        open: {
                            target: '_blank',
                        }
                    })">GitHub</MenubarItem>
                    <MenubarItem @click="navigateTo('https://reddit.com/u/TamSchnow/', {
                        open: {
                            target: '_blank',
                        }
                    })">Reddit</MenubarItem>
                    <MenubarItem @click="navigateTo('https://mastodon.social/@schnow265', {
                        open: {
                            target: '_blank'
                        }
                    })">Mastodon @ mastodon.social</MenubarItem>
                    <MenubarItem @click="navigateTo('https://matrix.to/#/@schnow265:matrix.org', {
                        open: {
                            target: '_blank'
                        }
                    })">Matrix</MenubarItem>
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
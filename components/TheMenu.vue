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
    <Menubar>
        <MenubarMenu>
            <MenubarTrigger>Navigate</MenubarTrigger>
            <MenubarContent>
                <MenubarItem @click="navigateTo('/')">Home</MenubarItem>
                <MenubarItem @click="navigateTo('/about')">About</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
            <MenubarContent>
                <MenubarItem @click="navigateTo('https://github.com/schnow265', {
                    open: {
                        target: '_blank',
                    }
                })">schnow265 - GitHub</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
</template>
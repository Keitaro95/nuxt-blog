<script setup lang="ts">
import { 
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
 } from '@/components/ui/navigation-menu'

const links = [
    { title: "ブログ", href: "/blog"},
    { title: "お問い合わせ", href: "/contact"},
]
</script>

<template>
        <NavigationMenu :viewport="false">
            <NavigationMenuList>
                <NavigationMenuItem v-for="link in links" :key="link.href">
                    <NavigationMenuLink as-child>
                        <NuxtLink :to="link.href">{{ link.title }}</NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
</template>

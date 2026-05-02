<script setup lang="ts">
import { 
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
 } from '@/components/ui/navigation-menu'


import { ref } from 'vue'

interface Props {
    title? :string
}

withDefaults(defineProps<Props>(), {
    title: 'Nontitle'
})

const isOpen = ref(false)

const links = [
    { title: 'ホーム', href: "/" },
    { title: 'ブログ', href: "blog" },
    { title: 'お問い合わせ', href: "/contact" },
    { title: 'About', href: "/about" },
]
</script>

<template>
    <header class="flex items-center justify-between bg-sky-200 px-6 py-3">
        <h1 class="text-sm font-medium tracking-wider text-zinc-800">
            AI-SWIFT.COM
        </h1>
        <!-- PC: NavigationMenu (md以上で表示) -->
        <NavigationMenu :viewport="false">
            <NavigationMenuList class="flex gap-2">
                <NavigationMenuItem v-for="link in links" :key="link.href">
                    <NavigationMenuLink as-child>
                        <NuxtLink
                            :to="link.href"
                            class="rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-white"
                            >{{ link.title }}
                        </NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </header>
</template>

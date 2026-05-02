<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import  TheFooter from "../components/parts/TheFooter.vue"
import TheHeader from '~/components/parts/TheHeader.vue';
</script>

<template>
    <div>
        <TheHeader title="無題" />
            <main>
                <slot />
            </main>
        <TheFooter />
    </div>
</template>
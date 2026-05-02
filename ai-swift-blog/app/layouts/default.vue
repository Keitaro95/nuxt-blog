<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import  TheFooter from "../components/layout/TheFooter.vue"

</script>

<template>
    <div class="layout">
            <main>
                <slot />
            </main>
        <TheFooter />
    </div>
</template>
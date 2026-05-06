<script setup lang="ts">
import {
    ArrowBigDownDash,
    ArrowBigLeftDash,
    ArrowBigUpDash,
    ArrowBigRightDash
    } from 'lucide-vue-next';
</script>

<template>
        <div class="flex flex-col items-center">
            <ArrowBigUpDash />
        </div>
        <div class="flex justify-center gap-4">
            <ArrowBigLeftDash />
            <ArrowBigRightDash />
        </div>
        <div class="flex flex-col items-center">
            <ArrowBigDownDash />
        </div>
</template>
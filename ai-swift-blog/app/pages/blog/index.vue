<script lang="ts" setup>
const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryCollection("content")
    .path("sample")
    .where("draft", "=", false)
    .first())

const formattedDate = computed(() =>
    data.value?.date
        ? new Date(data.value.date as string | number | Date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
        : '')
</script>

<template>
    <div v-if="data">
        <p>公開日：{{ formattedDate }}</p>
        <ContentRenderer :value="data" />
    </div>
    <div v-else>コンテンツが見つかりませんでした。</div>
</template>

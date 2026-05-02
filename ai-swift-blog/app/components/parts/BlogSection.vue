<script setup lang="ts">
interface Props {
  title?: string
  limit?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: '最新の記事',
  limit: 4,
})

const { getLatestPosts } = useBlogPosts()
const posts = computed(() => getLatestPosts(props.limit))
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium">{{ title }}</h2>
      <NuxtLink
        to="/blog"
        class="text-sm text-muted-foreground hover:text-foreground"
      >
        すべて見る →
      </NuxtLink>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="`/blog/${post.id}`"
        class="group flex flex-col gap-2"
      >
        <div class="aspect-square overflow-hidden rounded-md bg-muted">
          <img
            :src="post.thumbnail"
            :alt="post.title"
            class="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <h3 class="text-sm font-medium line-clamp-2">
          {{ post.title }}
        </h3>
      </NuxtLink>
    </div>
  </section>
</template>
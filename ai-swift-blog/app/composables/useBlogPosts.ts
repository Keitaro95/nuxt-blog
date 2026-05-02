export interface BlogPost {
  id: number
  title: string
  thumbnail: string
  publishedAt: string
}

export const useBlogPosts = () => {
  // 仮データ。本番では useFetch('/api/posts') などに置き換え
  const allPosts: BlogPost[] = [
    { id: 1, title: '記事タイトル 1', thumbnail: '/images/sample1.jpg', publishedAt: '2026-04-28' },
    { id: 2, title: '記事タイトル 2', thumbnail: '/images/sample2.jpg', publishedAt: '2026-04-25' },
    { id: 3, title: '記事タイトル 3', thumbnail: '/images/sample3.jpg', publishedAt: '2026-04-20' },
    { id: 4, title: '記事タイトル 4', thumbnail: '/images/sample4.jpg', publishedAt: '2026-04-15' },
    { id: 5, title: '記事タイトル 5', thumbnail: '/images/sample5.jpg', publishedAt: '2026-04-10' },
    { id: 6, title: '記事タイトル 6', thumbnail: '/images/sample6.jpg', publishedAt: '2026-04-05' },
  ]

  // 最新順にソート
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const getLatestPosts = (limit = 4) => sortedPosts.slice(0, limit)

  return {
    allPosts: sortedPosts,
    getLatestPosts,
  }
}
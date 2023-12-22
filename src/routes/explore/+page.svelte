<script lang="ts">
  import ArticleCard from '$lib/components/article-card.svelte';
  import type { Article } from '$lib/types';

  const articles: Article[] = [
    {
      title: 'My First Blog Post',
      createdAt: '2020-01-01',
      author: 'John Doe',
    },
    {
      title: 'My Second Blog Post',
      createdAt: '2020-01-02',
      author: 'Jane Doe',
    },
    {
      title: 'My Third Blog Post',
      createdAt: '2020-01-03',
      author: 'Bob Smith',
    },
  ];
</script>

<svelte:head>
  <title>Explore</title>
</svelte:head>

<div class="w-full max-w-xl flex flex-col gap-4">
  <h1 class="font-semibold">Explore</h1>
  {#each articles as article}
    <ArticleCard {article} />
  {/each}
</div>

<script lang="ts">
  import ArticleCard from '$lib/components/article-card.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  let { articles, session }: { articles: any; session: any } = data;
  $: ({ articles, session } = data);
</script>

<svelte:head>
  <title>Explore</title>
</svelte:head>

<div class="w-full max-w-xl flex flex-col gap-4">
  <h1 class="font-semibold">Explore</h1>
  {#each articles as article}
    <ArticleCard {article} {session} />
  {/each}
</div>

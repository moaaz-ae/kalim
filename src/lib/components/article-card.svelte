<script lang="ts">
  import type { Article } from '$lib/types';
  export let article: Article;
</script>

<div class="border rounded-lg bg-card p-4 flex flex-col gap-2">
  <a href="account/{article.author}">
    <h1 class="hover:underline hover:cursor-pointer">{article.title}</h1>
  </a>
  <p class="text-sm text-muted-foreground">
    <span class="cursor-pointer">{article.author}</span> · {article.createdAt}
  </p>
</div>

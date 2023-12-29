<script lang="ts">
  import type { Article } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  let { article } = data;
  $: ({ article } = data);
</script>

<div class="w-full max-w-xl flex flex-col gap-8 pb-8">
  <div class="flex flex-col gap-1">
    <h1 class="">{article.title}</h1>
    <a href="/{article.profile.username}" class="text-muted-foreground">
      {article.profile.name}
    </a>
  </div>
  <p class="leading-relaxed whitespace-pre-wrap">
    {article.content}
  </p>
</div>

<script lang="ts">
  import type { Article } from '$lib/types';
  import { PencilLine } from 'lucide-svelte';
  import { formatDate } from '$lib/utils';

  export let article: Article;
  export let session: any;
</script>

<div class="border rounded-lg bg-card p-4 flex flex-col gap-2">
  <div class="flex flex-row gap-4 justify-between">
    <a href="{article.profile.username}/{article.slug}">
      <h1 class="hover:underline hover:cursor-pointer">{article.title}</h1>
    </a>
    {#if session}
      {#if article.user_id === session.user.id}
        <a href="edit/{article.id}">
          <PencilLine
            class="w-3.h-3.5 h-3.5 text-muted-foreground hover:text-primary"
          />
        </a>
      {/if}
    {/if}
  </div>
  <p class="text-sm text-muted-foreground">
    <a href="/{article.profile.username}">{article.profile.name}</a>
    · {formatDate(article.created_at)}
  </p>
</div>

<script lang="ts">
  import ArticleCard from '$lib/components/article-card.svelte';
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Label } from '$lib/components/ui/label';
  import type { Article } from '$lib/types';
  import { Plus } from 'lucide-svelte';

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

<div class="w-full max-w-xl flex flex-col gap-4">
  <div class="flex flex-col gap-1">
    <div class="flex justify-between">
      <h1 class="font-semibold">Moaaz Abdelmonem</h1>
      <p>mz</p>
    </div>
    <p class="text-muted-foreground">a human.</p>
  </div>

  <Dialog.Root>
    <Dialog.Trigger class="self-end">
      <div
        class="text-muted-foreground hover:text-accent-foreground flex flex-row items-center gap-1"
      >
        <Plus class="h-4 w-4" />
        Add
      </div>
    </Dialog.Trigger>
    <Dialog.Content
      class="w-[90vw] h-[90vh] sm:max-w-xl sm:w-full mx-auto flex flex-col"
    >
      <Dialog.Header class="mb-4">
        <div class="flex flex-row w-full items-center max-w-sm gap-4">
          <Label for="title" class="text-muted-foreground w-14 text-start"
            >Title</Label
          >
          <input
            autocomplete="off"
            spellcheck="false"
            class="outline-none border-none focus:outline-none focus:border-none focus:ring-0 ring-0 focus:shadow-none shadow-none bg-transparent"
            type="text"
            id="title"
            placeholder="The new world"
          />
        </div>

        <div class="flex flex-row w-full items-center max-w-sm gap-4">
          <p class="text-muted-foreground w-14 text-start">Status</p>
          <p>Draft</p>
        </div>
      </Dialog.Header>

      <textarea
        autocomplete="off"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        placeholder="write..."
        class="w-full h-full resize-none bg-transparent text-foreground text-lg border-none outline-none leading-relaxed"
        aria-multiline="true"
        aria-label="write"
        aria-roledescription="text"
      />

      <Dialog.Footer>
        <Button type="submit" variant="outline">Publish</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>

  {#each articles as article}
    <ArticleCard {article} />
  {/each}
</div>

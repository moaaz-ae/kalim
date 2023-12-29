<script lang="ts">
  import { Label } from '$lib/components/ui/label';
  import { Trash2 } from 'lucide-svelte';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';

  export let data: PageData;
  let { supabase, article } = data;
  $: ({ supabase, article } = data);

  let is_published = article.is_published;
  let slugExists = false;

  const changeTitle = async (e: Event) => {
    let value = (e.target as HTMLInputElement).value;
    if (!value) value = 'Untitled';

    const { error } = await supabase
      .from('articles')
      .update({ title: value })
      .eq('id', article.id)
      .single();

    if (error) {
      console.log(error);
    }
  };

  const changeContent = async (e: Event) => {
    const target = e.target as HTMLInputElement;

    const { error } = await supabase
      .from('articles')
      .update({ content: target.value })
      .eq('id', article.id)
      .single();

    if (error) {
      console.log(error);
    }
  };

  const changeSlug = async (e: Event) => {
    let value = (e.target as HTMLInputElement).value;
    if (!value) value = article.id;
    value = value.trim().replace(/ /g, '-');

    const { error } = await supabase
      .from('articles')
      .update({ slug: value })
      .eq('id', article.id)
      .single();

    if (error) {
      if (error.code === '23505') {
        slugExists = true;
      }
      console.log(error);
    } else {
      slugExists = false;
    }
  };

  const togglePublish = async () => {
    is_published = !is_published;
    const { error } = await supabase
      .from('articles')
      .update({ is_published: is_published })
      .eq('id', article.id)
      .single();

    if (error) {
      console.log(error);
    }
  };

  const deleteArticle = async () => {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', article.id);

    if (error) {
      console.log(error);
    }

    goto(`/${article.profile.username}`);
  };
</script>

<div class="max-w-xl w-full h-full flex flex-col">
  <div class="mb-4 space-y-2">
    <div class="flex flex-row w-full items-center gap-4">
      {#if slugExists}
        <Label for="slug" class="text-destructive w-14 text-start">Slug</Label>
      {:else}
        <Label for="slug" class="text-muted-foreground w-14 text-start">
          Slug
        </Label>
      {/if}
      <input
        autocomplete="off"
        spellcheck="false"
        class="outline-none border-none focus:outline-none focus:border-none focus:ring-0 ring-0 focus:shadow-none shadow-none bg-transparent w-full"
        type="text"
        id="slug"
        placeholder="unique-slug"
        value={article.slug}
        on:input={(e) => changeSlug(e)}
      />
    </div>
    {#if slugExists}
      <p class="text-destructive">
        Slug already exists. This will not be saved.
      </p>
    {/if}

    <div class="flex flex-row w-full items-center gap-4">
      <Label for="title" class="text-muted-foreground w-14 text-start">
        Title
      </Label>
      <input
        autocomplete="off"
        spellcheck="false"
        class="outline-none border-none focus:outline-none focus:border-none focus:ring-0 ring-0 focus:shadow-none shadow-none bg-transparent w-full"
        type="text"
        id="title"
        placeholder="The new world"
        value={article.title}
        on:input={(e) => changeTitle(e)}
      />
    </div>

    <div class="flex flex-row gap-4 justify-between">
      <div class="flex flex-row w-full items-center max-w-sm gap-4">
        <p class="text-muted-foreground w-14 text-start">Status</p>
        {#if is_published}
          <button class="p-0" on:click={togglePublish}>Published</button>
        {:else}
          <button class="p-0" on:click={togglePublish}>Draft</button>
        {/if}
      </div>

      <button on:click={deleteArticle}>
        <Trash2 class="w-4 h-4 text-muted-foreground hover:text-destructive" />
      </button>
    </div>
  </div>

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
    id="content"
    on:input={(e) => changeContent(e)}
    value={article.content}
  />
</div>

<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import ArticleCard from '$lib/components/article-card.svelte';
  import ChangeProfile from '$lib/components/change-profile-modal.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let { profile, session, supabase } = data;

  $: ({ profile, session, supabase } = data);

  const createArticle = async () => {
    const { data, error } = await supabase
      .from('articles')
      .insert({
        title: 'Untitled',
        content: '',
        user_id: profile.id,
        is_published: false,
        slug: `${profile.id}${Date.now()}`,
      })
      .select('id')
      .single();

    if (error) {
      console.log(error);
    }

    invalidateAll();

    goto(`/edit/${data?.id}`);
  };
</script>

<svelte:head>
  <title>{profile.name}</title>
</svelte:head>

<div class="w-full max-w-xl flex flex-col gap-4">
  <div class="flex flex-col gap-1">
    {#if session && session.user.id === profile.id}
      <ChangeProfile {profile} />
    {/if}
    <div class="flex flex-row justify-between gap-4 mt-2">
      <h1>{profile.name}</h1>
      <p class="text-muted-foreground">@{profile.username}</p>
    </div>
    {#if profile.about}
      <p class="text-muted-foreground">{profile.about}</p>
    {/if}
  </div>

  {#if session && session.user.id === profile.id}
    <button
      on:click={createArticle}
      class="text-muted-foreground self-end hover:text-accent-foreground"
    >
      Add Article
    </button>
  {/if}

  {#if profile.articles && profile.articles.length > 0}
    <div class="flex flex-col gap-4">
      {#if session && session.user.id === profile.id}
        {#each profile.articles as article}
          <ArticleCard {article} {session} />
        {/each}
      {:else}
        {#each profile.articles.filter((article) => article.is_published) as article}
          <ArticleCard {article} {session} />
        {/each}
      {/if}
    </div>
  {:else}
    <p class="text-center text-muted-foreground">Nothing...</p>
  {/if}
</div>

<script lang="ts">
  import ArticleCard from '$lib/components/article-card.svelte';
  import AddArticle from '$lib/components/add-article.svelte';
  import type { Profile } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  const {
    profile,
    session,
    supabase,
  }: { profile: Profile; session: any; supabase: any } = data;

  const resize = (e: Event) => {
    const textarea = e.target as HTMLTextAreaElement;
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const changeName = async (e: Event) => {
    const target = e.target as HTMLInputElement;

    const { error } = await supabase
      .from('profiles')
      .update({ name: target.value })
      .eq('id', profile.id)
      .single();

    if (error) {
      console.error(error);
    }
  };

  const changeAbout = async (e: Event) => {
    const target = e.target as HTMLInputElement;

    const { error } = await supabase
      .from('profiles')
      .update({ about: target.value })
      .eq('id', profile.id)
      .single();

    if (error) {
      console.error(error);
    }
  };
</script>

<div class="w-full max-w-xl flex flex-col gap-4">
  <div class="flex flex-col gap-1">
    {#if session.user.id === profile.id}
      <div class="flex justify-between gap-4">
        <input
          autocomplete="off"
          spellcheck="false"
          value={profile.name}
          class="outline-none w-full border-none focus:outline-none focus:border-none focus:ring-0 ring-0 focus:shadow-none shadow-none bg-transparent"
          type="text"
          id="name"
          placeholder="name"
          on:input={(e) => changeName(e)}
        />
      </div>
      <textarea
        autocomplete="off"
        spellcheck="false"
        value={profile.about}
        placeholder="about..."
        on:input={(e) => resize(e)}
        class="outline-none resize-none overflow-hidden w-full h-fit border-none focus:outline-none focus:border-none focus:ring-0 ring-0 focus:shadow-none shadow-none bg-transparent text-muted-foreground"
        id="about"
        on:input={(e) => changeAbout(e)}
      />
    {:else}
      <h1 class="font-semibold">{profile.name}</h1>
      <p class="text-muted-foreground">{profile.about}</p>
    {/if}
  </div>

  {#if session.user.id === profile.id}
    <AddArticle />
  {:else}
    <p
      class="text-muted-foreground hover:text-accent-foreground self-end flex flex-row items-center gap-1"
    >
      Follow
    </p>
  {/if}

  {#if profile.articles.length > 0}
    {#each profile.articles as article}
      <ArticleCard {article} />
    {/each}
  {:else}
    <p class="text-center">Nothing...</p>
  {/if}
</div>

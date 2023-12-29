<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import type { PageData } from './$types.js';

  const resize = (e: Event) => {
    console.log(e);
    const textarea = e.target as HTMLTextAreaElement;
    if (textarea.value === '') textarea.style.height = '0px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const checkUsername = async (e: Event) => {
    loading = true;
    const target = e.target as HTMLInputElement;
    const { data } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', target.value)
      .single();

    if (data) usernameError = true;
    else usernameError = false;

    loading = false;
  };

  let usernameError: boolean = false;
  let loading: boolean = false;

  export let form;
  export let data: PageData;

  let { supabase } = data;
  $: ({ supabase } = data);
</script>

<svelte:head>
  <title>Create Profile</title>
</svelte:head>

<form
  method="POST"
  action="?/createProfile"
  use:enhance
  on:submit={() => (loading = true)}
  class="w-full max-w-xl flex flex-col gap-6 justify-center h-full"
>
  {#if form?.usernameExists || usernameError}
    <p class="text-red-500 text-center">Username already exists</p>
  {/if}
  <div class="flex flex-col w-full gap-1.5">
    <Label for="username">Username</Label>
    <Input
      autocomplete="off"
      spellcheck="false"
      class="w-full"
      type="text"
      id="username"
      required
      value={form?.username || ''}
      name="username"
      placeholder="the-unique-human"
      on:input={(e) => checkUsername(e)}
    />
  </div>

  <div class="flex flex-col w-full gap-1.5">
    <Label for="name">Name</Label>
    <Input
      autocomplete="off"
      spellcheck="false"
      class="w-full"
      type="text"
      id="name"
      required
      value={form?.name || ''}
      name="name"
      placeholder="moaaz"
    />
  </div>

  <div class="flex flex-col w-full gap-1.5">
    <Label for="about">About</Label>
    <Textarea
      autocomplete="off"
      autocapitalize="off"
      autocorrect="off"
      spellcheck="false"
      name="about"
      value={form?.about || ''}
      placeholder="about..."
      on:input={(e) => resize(e)}
      class="resize-none overflow-hidden w-full h-fit"
      id="about"
    />
  </div>

  <Button
    type="submit"
    class="w-full sm:self-end sm:w-fit"
    variant="outline"
    disabled={loading}
  >
    Save
  </Button>
</form>

<script lang="ts">
  import Nav from '$lib/components/nav.svelte';
  import '../app.pcss';
  import '@fontsource/cousine';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

<svelte:head>
  <title>Kalim</title>
</svelte:head>

<Nav {session} />
<main class="ml-12 pt-8 sm:pt-12 flex-1 flex flex-col items-center p-4">
  <slot />
</main>

<svg
  class="fixed inset-0 z-[999999] w-screen h-screen opacity-20 pointer-events-none translate-y-0 contrast-75 brightness-100"
  id="texture"
  ><filter id="noise"
    ><feTurbulence
      type="fractalNoise"
      baseFrequency=".8"
      numOctaves="4"
      stitchTiles="stitch"
    ></feTurbulence><feColorMatrix type="saturate" values="0"
    ></feColorMatrix></filter
  ><rect width="100%" height="100%" filter="url(#noise)"></rect></svg
>

<script lang="ts">
  import { Compass, Home, User } from 'lucide-svelte';
  import LoginModal from './login-modal.svelte';
  import MusicPlayer from './music-player.svelte';
  import FullscreenButton from './fullscreen-button.svelte';

  export let session: any;

  const userId = session?.user?.id;
</script>

<nav
  class="fixed h-screen w-12 flex justify-center items-center flex-col gap-4 border-r"
>
  <a href="/" class="p-2 text-muted-foreground">
    <Home class="w-[1.1rem] h-[1.1rem]" />
  </a>

  <a href="/explore" class="p-2 text-muted-foreground">
    <Compass class="w-[1.1rem] h-[1.1rem]" />
  </a>

  {#if session}
    <a href="/{userId}" class="p-2 text-muted-foreground">
      <User class="w-[1.1rem] h-[1.1rem]" />
    </a>
  {:else}
    <LoginModal Icon={User} />
  {/if}

  <MusicPlayer />

  <FullscreenButton />
</nav>

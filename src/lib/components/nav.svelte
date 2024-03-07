<script lang="ts">
  import { Compass, User, Info } from 'lucide-svelte';
  import LoginModal from './login-modal.svelte';
  import MusicPlayer from './music-player.svelte';
  import FullscreenButton from './fullscreen-button.svelte';
  import AboutModal from './about-modal.svelte';

  export let session: any;
  export let profile: any;
</script>

<nav
  class="fixed h-screen w-12 flex justify-center items-center flex-col gap-4 border-r"
>
  <a href="/explore" class="p-2 text-muted-foreground">
    <Compass class="w-[1.1rem] h-[1.1rem]" />
  </a>

  {#if session}
    {#if profile}
      <a href="/{profile.username}" class="p-2 text-muted-foreground">
        <User class="w-[1.1rem] h-[1.1rem]" />
      </a>
    {:else}
      <a href="/create" class="p-2 text-muted-foreground">
        <User class="w-[1.1rem] h-[1.1rem]" />
      </a>
    {/if}
  {:else}
    <LoginModal Icon={User} />
  {/if}

  <MusicPlayer />

  <FullscreenButton />

  <AboutModal Icon={Info} />
</nav>

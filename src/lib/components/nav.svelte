<script lang="ts">
  import { Compass, Home, Music2, Settings, User } from 'lucide-svelte';
  import LoginModal from './login-modal.svelte';
  export let session: any;

  const userId = session?.user?.id;
</script>

{#if session}
  <nav
    class="fixed h-screen w-12 flex justify-center items-center flex-col gap-4 border-r"
  >
    <a href="/" class="p-2 text-muted-foreground">
      <Home class="w-[1.1rem] h-[1.1rem]" />
    </a>
    <a href="/explore" class="p-2 text-muted-foreground">
      <Compass class="w-[1.1rem] h-[1.1rem]" />
    </a>
    <a href="/{userId}" class="p-2 text-muted-foreground">
      <User class="w-[1.1rem] h-[1.1rem]" />
    </a>
    <button class="p-2 text-muted-foreground">
      <Music2 class="w-[1.1rem] h-[1.1rem]" />
    </button>
  </nav>
{:else}
  <nav
    class="fixed h-screen w-12 flex justify-center items-center flex-col gap-4 border-r"
  >
    <a href="/explore" class="p-2 text-muted-foreground">
      <Compass class="w-[1.1rem] h-[1.1rem]" />
    </a>

    <LoginModal Icon={User} />

    <button class="p-2 text-muted-foreground">
      <Music2 class="w-[1.1rem] h-[1.1rem]" />
    </button>
  </nav>
{/if}

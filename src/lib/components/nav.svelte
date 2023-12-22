<script>
  import { Compass, Home, Music2, Settings, User } from 'lucide-svelte';
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
  <a href="/account" class="p-2 text-muted-foreground">
    <User class="w-[1.1rem] h-[1.1rem]" />
  </a>
  <a href="/" class="p-2 text-muted-foreground">
    <Music2 class="w-[1.1rem] h-[1.1rem]" />
  </a>
  <a href="/" class="p-2 text-muted-foreground">
    <Settings class="w-[1.1rem] h-[1.1rem]" />
  </a>
</nav>

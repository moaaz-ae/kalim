<script>
  import { Button } from '$lib/components/ui/button';
  import { Home, Search, User } from 'lucide-svelte';
</script>

<nav class="flex justify-center items-center flex-col p-2 gap-4 border-r">
  <Button href="/" variant="ghost" size="icon"><Home class="w-5 h-5" /></Button>
  <Button href="/" variant="ghost" size="icon"><User class="w-5 h-5" /></Button>
  <Button href="/" variant="ghost" size="icon">
    <Search class="w-5 h-5" />
  </Button>
</nav>

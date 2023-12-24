<script lang="ts">
  import { Expand, Shrink } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let expanded = false;

  const updateFullscreenState = () => {
    expanded = !!document.fullscreenElement;
  };

  const handleF11Press = (event: KeyboardEvent) => {
    if (event.key === 'F11') {
      event.preventDefault();
      toggleFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  onMount(() => {
    document.addEventListener('fullscreenchange', updateFullscreenState);
    window.addEventListener('keydown', handleF11Press);

    return () => {
      document.removeEventListener('fullscreenchange', updateFullscreenState);
      window.removeEventListener('keydown', handleF11Press);
    };
  });
</script>

<button on:click={toggleFullscreen} class="p-2 text-muted-foreground">
  {#if expanded}
    <Shrink class="w-[1.1rem] h-[1.1rem]" />
  {:else}
    <Expand class="w-[1.1rem] h-[1.1rem]" />
  {/if}
</button>

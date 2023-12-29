<script lang="ts">
  import { Disc2, Disc3 } from 'lucide-svelte';

  let playing = false;

  function toggleMusic() {
    playing = !playing;
    const audio = document.getElementById(
      'background-music'
    ) as HTMLAudioElement;

    if (audio) {
      audio.volume = 0.05;
      if (playing) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
</script>

<audio id="background-music" src="/background-music.mp3" loop>
  Your browser does not support the audio element.
</audio>

{#if playing}
  <button on:click={toggleMusic} class="p-2 text-muted-foreground">
    <Disc3 class="w-[1.1rem] h-[1.1rem]" />
  </button>
{:else}
  <button on:click={toggleMusic} class="p-2 text-muted-foreground">
    <Disc2 class="w-[1.1rem] h-[1.1rem]" />
  </button>
{/if}

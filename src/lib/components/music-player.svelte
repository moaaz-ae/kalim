<script lang="ts">
  import { Music2 } from 'lucide-svelte';

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

<button on:click={toggleMusic} class="p-2 text-muted-foreground">
  <Music2 class="w-[1.1rem] h-[1.1rem]" />
</button>

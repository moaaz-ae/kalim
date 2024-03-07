<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';

  export let Icon: any;
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <button class="p-2 text-muted-foreground">
      <svelte:component this={Icon} class="w-[1.1rem] h-[1.1rem]" />
    </button>
  </Dialog.Trigger>
  <Dialog.Content class="w-[90vw] sm:max-w-[425px] sm:w-full">
    <Dialog.Header class="space-y-2">
      <Dialog.Title>About</Dialog.Title>
      <Dialog.Description>A Simple Story</Dialog.Description>
    </Dialog.Header>
    <p>I wanted to start writing.</p>
    <p>I thought that having a website to write on would help me to write.</p>
    <p>And this is how it turned out.</p>
    <p>Later, I discovered that writing needs more than a website.</p>
    <p>And this is the simple story of kalim.</p>
    <p>It is here if you want a simple place to write.</p>
    <p>Of course, you'll discover that you need more than a website.</p>
    <p>Good luck!</p>
    <a href="https://mzz.wtf" target="_blank" class="underline">moaaz</a>
  </Dialog.Content>
</Dialog.Root>

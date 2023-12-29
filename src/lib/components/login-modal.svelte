<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { enhance } from '$app/forms';

  export let Icon: any;

  let sent = false;
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <button class="p-2 text-muted-foreground">
      <svelte:component this={Icon} class="w-[1.1rem] h-[1.1rem]" />
    </button>
  </Dialog.Trigger>
  <Dialog.Content class="w-[90vw] sm:max-w-[425px] sm:w-full">
    <Dialog.Header class="space-y-2">
      <Dialog.Title>Log in</Dialog.Title>
      <Dialog.Description>
        We will send a magic link to your email
      </Dialog.Description>
    </Dialog.Header>
    {#if !sent}
      <form
        action="/?/sendMagicLink"
        use:enhance
        method="post"
        class="flex flex-col gap-4"
        on:submit={() => (sent = true)}
      >
        <div class="flex flex-col gap-2">
          <Label for="email">Email</Label>
          <Input
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            id="email"
            type="email"
            name="email"
            placeholder="me@example.com"
          />
        </div>
        <Dialog.Footer>
          <Button type="submit" size="sm">login</Button>
        </Dialog.Footer>
      </form>
    {:else}
      <div class="flex flex-col gap-4 text-center">
        <p>Check your email</p>
      </div>
    {/if}
  </Dialog.Content>
</Dialog.Root>

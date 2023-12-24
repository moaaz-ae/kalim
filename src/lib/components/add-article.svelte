<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Label } from '$lib/components/ui/label';
  import { Plus } from 'lucide-svelte';
</script>

<Dialog.Root>
  <Dialog.Trigger class="self-end">
    <div
      class="text-muted-foreground hover:text-accent-foreground flex flex-row items-center gap-1"
    >
      Add Article
    </div>
  </Dialog.Trigger>
  <Dialog.Content
    class="w-[90vw] h-[90vh] sm:max-w-xl sm:w-full mx-auto flex flex-col"
  >
    <Dialog.Header class="mb-4">
      <div class="flex flex-row w-full items-center max-w-sm gap-4">
        <Label for="title" class="text-muted-foreground w-14 text-start">
          Title
        </Label>
        <input
          autocomplete="off"
          spellcheck="false"
          class="outline-none border-none focus:outline-none focus:border-none focus:ring-0 ring-0 focus:shadow-none shadow-none bg-transparent"
          type="text"
          id="title"
          placeholder="The new world"
        />
      </div>

      <div class="flex flex-row w-full items-center max-w-sm gap-4">
        <p class="text-muted-foreground w-14 text-start">Status</p>
        <p>Draft</p>
      </div>
    </Dialog.Header>

    <textarea
      autocomplete="off"
      autocapitalize="off"
      autocorrect="off"
      spellcheck="false"
      placeholder="write..."
      class="w-full h-full resize-none bg-transparent text-foreground text-lg border-none outline-none leading-relaxed"
      aria-multiline="true"
      aria-label="write"
      aria-roledescription="text"
    />

    <Dialog.Footer>
      <Button type="submit" variant="outline">Publish</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>

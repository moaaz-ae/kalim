<script lang="ts">
  import { enhance } from '$app/forms';
  import * as AlertDialog from '$lib/components/ui/alert-dialog';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import type { Profile } from '$lib/types';

  export let profile: Profile;

  const resize = (e: Event) => {
    console.log(e);
    const textarea = e.target as HTMLTextAreaElement;
    if (textarea.value === '') textarea.style.height = '0px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger class="text-muted-foreground self-start">
    <button>Change</button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Edit Profile</AlertDialog.Title>
      <AlertDialog.Description>
        Make changes to your profile here. Click save when you're done.
      </AlertDialog.Description>
    </AlertDialog.Header>

    <form
      method="POST"
      action="/?/changeProfile"
      use:enhance
      class="w-full max-w-xl flex flex-col gap-4 justify-center h-full"
    >
      <div class="flex flex-col w-full gap-1.5">
        <Label for="name">Name</Label>
        <Input
          autocomplete="off"
          spellcheck="false"
          class="w-full"
          type="text"
          id="name"
          required
          name="name"
          placeholder="moaaz"
          value={profile.name}
        />
      </div>

      <div class="flex flex-col w-full gap-1.5">
        <Label for="about">About</Label>
        <Textarea
          autocomplete="off"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          value={profile.about}
          name="about"
          placeholder="about..."
          on:input={(e) => resize(e)}
          class="resize-none overflow-hidden w-full h-fit"
          id="about"
        />
      </div>

      <AlertDialog.Footer>
        <AlertDialog.Cancel class="w-20">Cancel</AlertDialog.Cancel>
        <AlertDialog.Action type="submit" class="w-20">Save</AlertDialog.Action>
      </AlertDialog.Footer>
    </form>
  </AlertDialog.Content>
</AlertDialog.Root>

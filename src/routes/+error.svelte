<script>
  import { page } from '$app/stores';
</script>

<div class="flex flex-col gap-2 items-center justify-center w-full h-full">
  <h1 class="text-xl text-center">{$page.status}</h1>
  <p class="text-center">{$page.error?.message}</p>
</div>

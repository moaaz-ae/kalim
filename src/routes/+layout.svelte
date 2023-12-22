<script>
  import '../app.pcss';
  import Nav from '$lib/components/nav.svelte';
</script>

<svelte:head>
  <title>kalim</title>
</svelte:head>

<Nav />
<slot />
<svg
  class="fixed inset-0 z-50 w-screen h-screen opacity-20 pointer-events-none translate-y-0 contrast-75 brightness-100"
  id="texture"
  ><filter id="noise"
    ><feTurbulence
      type="fractalNoise"
      baseFrequency=".8"
      numOctaves="4"
      stitchTiles="stitch"
    ></feTurbulence><feColorMatrix type="saturate" values="0"
    ></feColorMatrix></filter
  ><rect width="100%" height="100%" filter="url(#noise)"></rect></svg
>

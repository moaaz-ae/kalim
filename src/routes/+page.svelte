<script lang="ts">
  const blogPosts = [
    {
      title: 'My First Blog Post',
      date: '2020-01-01',
      author: 'John Doe',
    },
    {
      title: 'My Second Blog Post',
      date: '2020-01-02',
      author: 'Jane Doe',
    },
    {
      title: 'My Third Blog Post',

      date: '2020-01-03',
      author: 'Bob Smith',
    },
  ];
</script>

<main class="flex flex-col flex-1 items-center p-4 mt-12">
  <div class="w-full max-w-xl flex flex-col gap-4">
    {#each blogPosts as post}
      <div class="border rounded-lg bg-card p-4 flex flex-col gap-2">
        <h1>{post.title}</h1>
        <p class="text-sm text-muted-foreground">{post.author} · {post.date}</p>
      </div>
    {/each}
  </div>
</main>

<script lang="ts">
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<main>
  <div>
    <nav class="flex mx-auto bg-black h-auto bg-opacity-20 shadow-xl">
      <div>
        <a href="https://packs.netlify.com">
          <img class="pl-16 py-1.5" src="images/Icon.png" alt="Icon" />
        </a>
      </div>
      <div class="self-center">
        <a type="button" class="text-left text-xl font-bold rounded-xl pl-4" href="https://packs.netlify.com">Packs</a>
      </div>
    </nav>
  </div>
  <div>
    <h1 class="py-16 px-36 font-bold text-7xl animate-pulse">Hello World !</h1>
    <h2 class="py-4 px-36 font-semibold text-4xl">Best Packs</h2>
  </div>
  <div class="py-36 pl-32 pr-32 place-items-center grid grid-cols-4 grid-flow-row-dense gap-y-20 gap-x-20">
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
    <div class="flex shadow-xl"><img class="rounded-3xl" src="images/pack.png" alt="" /></div>
  </div>
</main>

<style>
  main {
    font-family: Inter, sans-serif;
  }
  :global(body) {
    background: rgb(31, 41, 55);
    color: white;
    scrollbar-width: none;
  }
  :global()::-webkit-scrollbar {
    display: none;
  }
</style>

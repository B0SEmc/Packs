<script lang="ts">
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<main>
  <div>
    <nav id="nav" class="flex bg-black bg-fixed bg-cover h-auto bg-opacity-20 shadow-xl">
      <div>
        <a href="https://packs.netlify.com">
          <img class="pl-16 py-1.5 transform transition duration-150 ease-in-out hover:scale-110" src="images/Icon.png" alt="Icon" />
        </a>
      </div>
      <div class="self-center">
        <a type="button" class="text-left text-xl font-bold rounded-xl pl-4 transform transition duration-150 ease-in-out hover:scale-110" href="https://packs.netlify.com">Packs</a
        >
      </div>
    </nav>
  </div>
  <div>
    <h1 class="py-16 px-36 font-bold text-7xl transition duration-500 ease-in-out text-blue-600 hover:text-red-600 transform">Hello World !</h1>
    <h2 class="py-4 px-36 font-semibold text-4xl">Best Packs</h2>
  </div>
  <div class="py-36 pl-32 pr-32 place-items-center grid grid-cols-4 grid-flow-row-dense gap-y-20 gap-x-20">
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
    <div class="flex"><a href=""><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-125" src="images/pack.png" alt="" /></a></div>
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

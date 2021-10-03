<script lang="ts">
  function getRandomNum(max) {
    return Math.floor(Math.random() * max + 1);
  }
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<main>
  <div class="sticky top-0 z-50 overflow-visible">
    <nav id="nav" class="flex bg-black bg-fixed backdrop-filter backdrop-blur-xl h-auto bg-opacity-30 shadow-xl">
      <div>
        <a href="https://packs.netlify.com">
          <img class="pl-16 py-1.5 transform transition duration-150 ease-in-out hover:scale-110" src="images/Icon.png" alt="Icon" />
        </a>
      </div>
      <div class="self-center">
        <a type="button" class="text-left text-xl font-bold rounded-xl pl-4 transform transition duration-150 ease-in-out hover:scale-110" href="https://packs.netlify.com">Packs</a>
      </div>
    </nav>
  </div>
  <div>
    <h1 class="py-16 px-36 font-bold text-7xl transition duration-500 ease-in-out text-blue-600 transform hover:animate-pulse">Hello World !</h1>
    <h2 class="py-4 px-36 font-semibold text-4xl">Best Packs</h2>
  </div>
  <div class="py-36 pl-32 pr-32 place-items-center grid grid-cols-4 grid-flow-row-dense gap-y-20 gap-x-20">
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class="rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50" src="images/pack{getRandomNum(5)}.png" alt="" />
        <p class="select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100">Sample Texture Pack</p></a
      >
    </div>
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

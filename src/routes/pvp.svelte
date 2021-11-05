<script>
  function RandomNum(max) {
  return Math.floor(Math.random() * max + 1);
}
  let imgClass = "rounded-3xl shadow-2xl transform transition duration-300 ease-in-out group-hover:scale-125 filter group-hover:blur group-hover:opacity-50";
  let packNameClass = "select-none opacity-0 text-center transition duration-300 ease-in-out -translate-y-28 font-bold text-2xl group-hover:visible group-hover:opacity-100";
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<main>
  <div>
    <h1 class="py-16 px-36 font-bold text-7xl transition duration-500 ease-in-out text-blue-600 transform hover:animate-pulse">Hello World !</h1>
    <h2 class="py-4 px-36 font-semibold text-4xl">Best Packs</h2>
  </div>
  <div class="py-36 pl-32 pr-32 place-items-center grid grid-cols-4 grid-flow-row-dense lg:gap-x-20 lg:gap-y-20 md:gap-x-10 md:gap-y-10 sm:gap-x-1 sm:gap-y-1">
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
    <div class="group flex">
      <a href=""
        ><img class={imgClass} src="pack{RandomNum(5)}.png" alt="" />
        <p class={packNameClass}>Sample Texture Pack</p></a
      >
    </div>
  </div>
  <footer class="bg-gray-900 h-auto shadow-xl">
    <div>
      <div class="grid grid-cols-2 px-96 pt-2">
        <a class="justify-self-center py-4 text-lg pl-96" href="https://github.com/colonel260/Packs">Github</a>
        <a class="justify-self-center py-4 text-lg pr-96" href="/about">About</a>
      </div>
      <div class="grid grid-cols-1 pt-2">
        <p class="justify-self-center text-xs font-light">We do not claim to own any pack.</p>
        <p class="justify-self-center text-xs font-light">© 2021 Kai</p>
      </div>
    </div>
  </footer>
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

<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Packs</title>
</svelte:head>

<main>
	<div class="sticky top-0 z-50 overflow-visible">
		<nav id="nav" class="flex bg-black bg-fixed backdrop-filter backdrop-blur-xl h-auto bg-opacity-30 shadow-xl">
		  <div>
			<a href="/">
			  <img class="pl-16 py-1.5 transform transition duration-150 ease-in-out hover:scale-110" src="Icon.png" alt="Icon" />
			</a>
		  </div>
		  <div class="self-center">
			<a type="button" class="text-left text-xl font-bold rounded-xl pl-4 transform transition duration-150 ease-in-out hover:scale-110" href="/">Packs</a>
		  </div>
		</nav>
	  </div>
	<slot />
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
  
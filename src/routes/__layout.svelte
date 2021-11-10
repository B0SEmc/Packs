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
	<footer class="bg-gray-900 h-">
		<div>
		  <div class="grid grid-cols-2 px-96 pt-2">
			<a class="justify-self-center py-4 text-lg ml-96" href="https://github.com/colonel260/Packs"><i class="fab fa-github scale-90"></i> Github</a>
			<a class="justify-self-center py-4 text-lg mr-96" href="/about"><i class="fas fa-info-circle scale-90"></i> About</a>
		  </div>
		  <div class="grid grid-cols-1 pt-2">
			<p class="justify-self-center text-xs font-light">We do not claim to own any pack.</p>
			<p class="justify-self-center text-xs font-light"><i class="fas fa-copyright"></i> 2021 Kai</p>
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
  
<script>
	export let name;
</script>

<main>
	<header>Bonjour ?</header>
	<h1>Hello {name}!</h1>
	<p>Le site ne devrait pas ressembler a ca très longtemps !</p>
</main>

<style>
	main {
		font-family: "JetBrains Mono", serif;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #1d89f9;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

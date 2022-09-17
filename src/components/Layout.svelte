<script>
</script>

<main>
	<header>
		<div class="container">
			<a href="/" class="navlink">movies</a>
			<a href="/shows" class="navlink">shows</a>
		</div>
	</header>
	<div class="container">
		<slot />
	</div>
</main>

<style>
	header {
		padding: 2rem 0;
		margin-bottom: 2rem;
		background: rgb(243, 243, 243);
	}

	.navlink {
		font-size: 1.5rem;
		text-decoration: none;
		color: #333;
	}
</style>

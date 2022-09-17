<script>
	// @ts-nocheck

	export let movieOrShow;

	const path = `${'name' in movieOrShow ? '/shows' : '/movies'}/${movieOrShow.id}`;
</script>

<div class="card">
	<div
		class="backdrop"
		style={`background: url('https://image.tmdb.org/t/p/w500/${movieOrShow.backdrop_path}')`}
		alt="movie-backdrop"
	>
		<img src={`https://image.tmdb.org/t/p/w500/${movieOrShow.poster_path}`} alt="movie-poster" />
	</div>

	<div class="content">
		<a href={path}>{'name' in movieOrShow ? movieOrShow.name : movieOrShow.title}</a>
		<p class="overview">{movieOrShow.overview}</p>
		<div class="info">
			<p>
				<span class="rating">★</span>
				{movieOrShow.vote_average}
			</p>
			{#if movieOrShow.release_date}
				<p>&#128197; {movieOrShow.release_date}</p>{/if}
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		overflow: hidden;
		border-radius: 1rem;
		height: 100%;
	}

	.backdrop {
		width: 100%;
		height: 100px;
		position: relative;
	}

	.backdrop::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.backdrop img {
		position: absolute;
		top: 4rem;
		left: 1rem;
		width: 80px;
		height: auto;
		z-index: 2;
	}

	.content {
		height: 100%;
		padding: 1rem 1rem 1rem 7rem;
		background-color: #f3f3f3;
	}

	.overview {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 0.5rem;
		color: #555;
	}

	a {
		display: block;
		margin-bottom: 0.5rem;
		text-decoration: none;
		color: black;
		font-weight: 500;
		font-size: 1.3rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.info {
		display: flex;
		gap: 1rem;
	}

	.rating {
		color: gold;
	}
</style>

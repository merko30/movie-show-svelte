<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import { getDetails } from '../api';

	import InfoLabel from '../components/InfoLabel.svelte';
	import Cast from '../components/Cast.svelte';

	import Star from '../assets/Star.svelte';
	import Calendar from '../assets/Calendar.svelte';
	import Movie from '../assets/Movie.svelte';

	import { TMDB_IMAGE_URL } from '../constants';

	export let id;
	export let mediaType = 'movie';

	let data;
	let loading = true;

	onMount(async () => {
		const response = await getDetails(id, mediaType);
		data = response;
		loading = false;
	});

	let dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
</script>

<div class="container">
	{#if loading}
		loading...
	{/if}

	{#if data}
		<div class="page-container">
			<a href="/">go back</a>
			<div class="details-container">
				<img src={`${TMDB_IMAGE_URL}${data.poster_path}`} alt="poster" />
				<div class="content">
					<h1>
						{'title' in data ? data.title : data.name}
					</h1>
					<p>{data.overview}</p>
					<div class="info">
						<div class="row">
							<InfoLabel label="Rating" value={data.vote_average}>
								<Star width="30px" slot="icon" />
							</InfoLabel>
							<InfoLabel
								label="Release date"
								value={new Intl.DateTimeFormat('en-GB', dateFormatOptions).format(
									new Date(data.release_date)
								)}
							>
								<Calendar width="30px" height="30px" slot="icon" />
							</InfoLabel>
						</div>
						<InfoLabel label="Genres">
							<Movie width="36px" height="36px" slot="icon" />
							<div class="genres">
								{#each data.genres as genre, index}
									<p>
										{genre.name}{#if index !== data.genres.length - 1},{/if}{'  '}
									</p>
								{/each}
							</div>
						</InfoLabel>
					</div>
				</div>
			</div>
			<Cast {id} />
		</div>
	{/if}
</div>

<style scoped>
	.page-container {
		margin: 100px auto;
		max-width: 800px;
	}

	.details-container {
		display: flex;
		flex-direction: column;
	}

	img {
		height: 480px;
		width: fit-content;
		margin: 0 auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100%;
		margin-top: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	.info {
		margin-top: 1rem;
	}

	.info .row {
		display: flex;
		margin-bottom: 1rem;
	}

	.genres {
		display: block;
		margin-left: 0.5rem;
		margin-bottom: 2px;
		width: 100%;
	}

	.genres p {
		display: inline;
	}

	@media (min-width: 768px) {
		.details-container {
			flex-direction: row;
		}

		.content {
			margin-top: 0;
			margin-left: 2rem;
		}
	}
</style>

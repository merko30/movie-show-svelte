<script>
	// @ts-nocheck

	import Search from '../components/Search.svelte';

	import { onMount } from 'svelte';

	import { fetchMovies } from '../api';

	import Layout from '../components/Layout.svelte';
	import MovieShowList from '../components/MovieShowList.svelte';
	import SearchSubscriber from '../components/SearchSubscriber.svelte';

	let movies = [];

	onMount(async () => {
		const response = await fetchMovies({});
		movies = response.results;
	});
</script>

<Layout>
	<Search />
	<SearchSubscriber>
		<MovieShowList data={movies} />
	</SearchSubscriber>
</Layout>

<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import { fetchMovies } from '../../api';

	import SearchSubscriber from '../../components/SearchSubscriber.svelte';
	import MovieShowList from '../../components/MovieShowList.svelte';
	import Layout from '../../components/Layout.svelte';
	import Search from '../../components/Search.svelte';

	let shows = [];

	onMount(async () => {
		const response = await fetchMovies({ mediaType: 'tv' });
		shows = response.results;
	});
</script>

<Layout>
	<Search />
	<SearchSubscriber>
		<MovieShowList data={shows} />
	</SearchSubscriber>
</Layout>

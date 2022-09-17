<script>
	// @ts-nocheck

	import { get, writable } from 'svelte/store';

	import { search } from '../api';

	import { searchStore } from '../stores/search';

	const onSearch = async (value) => {
		// localStorage.setItem('searchTerm', value ?? '');
		if (value && value.length > 3) {
			const response = await search({ term: value });
			searchStore.set({
				searchActive: true,
				searchResults: response.results
			});
		} else {
			searchStore.set({ searchActive: false, searchResults: [] });
		}
	};

	// const storageTerm = window && window?.localStorage.getItem('searchTerm');
	let storageTerm = '';

	const searchValue = writable(storageTerm || storageTerm !== 'undefined' ? storageTerm : '');

	const debounce = (func) => {
		let timeout;

		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				func.apply(this, args);
			}, 1000);
		};
	};

	searchValue.subscribe(debounce(onSearch));
</script>

<input
	placeholder="Search movies and shows"
	value={get(searchValue)}
	on:input={(event) => searchValue.set(event.currentTarget.value)}
/>

<style scoped>
	input {
		display: block;
		width: 100%;
		padding: 1rem;
		border: 1px solid lightgray;
		border-radius: 0.5rem;
		margin: 1rem 0 2rem;
	}
</style>

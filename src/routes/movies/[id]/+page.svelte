<script>
	// @ts-nocheck

	import { page } from '$app/stores';

	import DetailPageContainer from '../../../components/DetailPageContainer.svelte';
</script>

<DetailPageContainer id={$page.params.id} mediaType="movie" />

<script>
  import { onDestroy } from "svelte";

  import { searchStore } from "../stores/search";

  import MovieShowList from "./MovieShowList.svelte";

  let searchResults = [];
  let searchActive = false;

  const unsubscribe = searchStore.subscribe(
    ({ searchActive: active, searchResults: results }) => {
      searchResults = results;
      searchActive = active;
    }
  );

  onDestroy(unsubscribe);
</script>

<div>
  {#if searchResults.length && searchActive}
    <MovieShowList data={searchResults} />
  {/if}

  {#if !searchActive}
    <slot />
  {/if}
</div>

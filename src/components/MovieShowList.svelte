<script>
  import MovieShowCard from "./MovieShowCard.svelte";

  export let data;
</script>

<div class="grid">
  {#each data as movieOrShow}
    <MovieShowCard {movieOrShow} />
  {/each}
</div>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 860px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>

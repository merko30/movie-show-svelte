<script>
  import { getCast } from "../api";
  import { onMount } from "svelte";
  import Person from "./Person.svelte";

  export let id;
  let cast;

  onMount(async () => {
    const response = await getCast(id);
    cast = response.cast;
  });
</script>

<div>
  <h1>Cast</h1>
  {#if cast}
    <ul>
      {#each cast as person}
        <Person {person} />
      {/each}
    </ul>
  {/if}
</div>

<style scoped>
  div {
    margin: 1rem 0;
  }

  ul {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    list-style: none;
  }
</style>

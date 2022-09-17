<script>
  import { TMDB_IMAGE_URL } from "../constants";

  export let person;
  console.log(person);
</script>

<div class="card">
  <img src={`${TMDB_IMAGE_URL}${person.profile_path}`} alt="person" />
  <h3>{person.character}</h3>
  <h4>{person.name}</h4>
</div>

<style scoped>
  .card {
    padding: 1rem;
    text-align: center;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    color: darkgray;
  }
</style>

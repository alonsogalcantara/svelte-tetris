<script>
  // Puedes importar cualquier store global o utilidad aquí si es necesario.
  import ScoreBoard from "../components/ScoreBoard.svelte";
  import GameControls from "../components/GameControls.svelte";
  import Page from "./+page.svelte";
</script>

<header>
  <ScoreBoard />
</header>

<main>
  <!-- El contenido de cualquier página se inyectará aquí. -->
  <Page />
  <GameControls />
</main>

<footer>
  <p>Desarrollado con ❤️ usando SvelteKit</p>
</footer>

<style>
  /* body {
    font-family: "Arial", sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  } */

  header,
  footer {
    padding: 1rem;
    background-color: #333;
    color: #f4f4f4;
    width: 100%;
    text-align: center;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
  }
</style>

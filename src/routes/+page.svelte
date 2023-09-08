<script>
  import TetrisBoard from "../components/TetrisBoard.svelte";
</script>

<section class="game-section">
  <TetrisBoard />
</section>

<style>
  .game-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .game-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

<script>
  import { score, lines, level } from '../stores/gameStore.js';
</script>

<section class="scoreboard">
  <h1>Scoreboard</h1>
  <div class="score-info">
    <span>Score: {$score}</span>
    <span>Lines: {$lines}</span>
    <span>Level: {$level}</span>
  </div>
</section>

<style>
  .scoreboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 2px solid #333;
    border-radius: 8px;
  }

  .score-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  span {
    font-size: 1.2rem;
  }
</style>

<script>
  import { moveLeft, moveRight, moveDown, rotate, pause, start } from '../stores/gameActions.js';

  function handleMoveLeft() {
    console.log('Movimiento a la izquierda')
    moveLeft();
  }

  function handleMoveRight() {
    console.log('Movimiento a la derecha')
    moveRight();
  }

  function handleMoveDown() {
    console.log('Movimiento hacia abajo')
    moveDown();
  }

  function handleRotate() {
    console.log('Movimiento para rotas')
    rotate();
  }

  function handlePause() {
    console.log('Pausar')
    pause();
  }

  function handleStart() {
    console.log('Iniciar')
    start();
  }
</script>

<div class="controls">
  <button on:click={handleStart}>Start</button>
  <button on:click={handlePause}>Pause</button>
  <button on:click={handleMoveLeft}>&larr;</button>
  <button on:click={handleMoveRight}>&rarr;</button>
  <button on:click={handleMoveDown}>&darr;</button>
  <button on:click={handleRotate}>Rotate</button>
</div>

<style>
  .controls {
    display: flex;
    gap: 10px;
    padding: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>

<script>
  import { onMount } from "svelte";
  import {
    getRandomTetromino,
    initializeBoard,
    isValidMove,
    merge,
    clearLines,
  } from "../lib/utils";
  import { BOARD_HEIGHT, BOARD_WIDTH } from "../lib/constants";

  // Variables
  let gameInterval;
  let gameOver = false;
  let board = initializeBoard(BOARD_WIDTH, BOARD_HEIGHT);
  let position = { x: 4, y: 0 }; // Initial position of the tetromino


  function drop() {
    const newPosition = { ...position, y: position.y + 1 };
    if (isValidMove(currentTetromino, board, newPosition)) {
      position = newPosition;
    } else {
      board = merge(currentTetromino, board, position);
      board = clearLines(board);
      currentTetromino = getRandomTetromino();
      position = { x: 4, y: 0 };

      // Check game over condition
      if (!isValidMove(currentTetromino, board, position)) {
        clearInterval(gameInterval);
        gameOver = true;
      }
    }
  }

  onMount(() => {
    gameInterval = setInterval(drop, 1000);
    return () => clearInterval(gameInterval);
  });
</script>

<div class="tetris-board">
  {#if gameOver}
    <div class="game-over">Game Over!</div>
  {:else}
    {#each board as row, rowIndex}
      <div class="row" key={rowIndex}>
        {#each row as cell, cellIndex}
          <div class="cell" style="background-color: {cell}" key={cellIndex}>
            <!-- empty cell or tetromino block -->
          </div>
        {/each}
      </div>
    {/each}
  {/if}
</div>

<style>
  .tetris-board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1px;
    width: 300px;
  }

  .row {
    display: flex;
  }

  .cell {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
</style>

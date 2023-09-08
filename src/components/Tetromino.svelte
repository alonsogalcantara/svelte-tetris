<script>
  export let tetromino = [];
  export let color = '#000';  // Puedes establecer un color por defecto si lo deseas
</script>

<div class="tetromino-container">
  {#each tetromino as row}
    <div class="row">
      {#each row as cell}
        <div class="cell" style="background-color: {cell ? color : 'transparent'}"></div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .tetromino-container {
    display: inline-grid;
    gap: 1px;
  }

  .row {
    display: flex;
  }

  .cell {
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
  }
</style>

import { TETROMINOS } from "./constants";

export function initializeBoard(BOARD_WIDTH, BOARD_HEIGHT) {
    // Inicializa el tablero como un array 2D lleno de 0s.
    const board = Array.from({ length: BOARD_HEIGHT }).map(() => Array(BOARD_WIDTH).fill(0));
    // const board = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));
    return board;
}

export function isValidMove(tetromino, board, { x, y }) {
    for (let rowIndex = 0; rowIndex < tetromino.shape.length; rowIndex++) {
        for (let colIndex = 0; colIndex < tetromino.shape[rowIndex].length; colIndex++) {
            if (
                tetromino.shape[rowIndex][colIndex] &&
                (board[rowIndex + y] && board[rowIndex + y][colIndex + x]) !== 0
            ) {
                return false;
            }
        }
    }
    return true;
}

export function rotateTetromino(tetromino) {
    const newTetromino = JSON.parse(JSON.stringify(tetromino));
    for (let y = 0; y < tetromino.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [newTetromino.shape[x][y], newTetromino.shape[y][x]] = [newTetromino.shape[y][x], newTetromino.shape[x][y]];
        }
    }
    newTetromino.shape.forEach(row => row.reverse());
    return newTetromino;
}

export function merge(tetromino, board, { x, y }) {
    for (let rowIndex = 0; rowIndex < tetromino.shape.length; rowIndex++) {
        for (let colIndex = 0; colIndex < tetromino.shape[rowIndex].length; colIndex++) {
            if (tetromino.shape[rowIndex][colIndex]) {
                board[rowIndex + y][colIndex + x] = tetromino.color;
            }
        }
    }
    return board;
}

export function clearLines(board) {
    for (let y = board.length - 1; y >= 0; --y) {
        if (board[y].every(value => value !== 0)) {
            const row = Array(board[y].length).fill(0);
            board.splice(y, 1);
            board.unshift(row);
            y++;
        }
    }
    return board;
}

export function checkCollision(gameState, direction, tetromino = null) {
    const currentTetromino = tetromino || gameState.tetromino;
    const board = gameState.board;

    for (let y = 0; y < currentTetromino.shape.length; y++) {
        for (let x = 0; x < currentTetromino.shape[y].length; x++) {
            // Solo verifica las partes ocupadas del tetromino
            if (currentTetromino.shape[y][x] !== 0) {
                let newX = currentTetromino.position.x + x;
                let newY = currentTetromino.position.y + y;

                // Aplica el desplazamiento según la dirección
                if (direction === "LEFT") {
                    newX -= 1;
                } else if (direction === "RIGHT") {
                    newX += 1;
                } else if (direction === "DOWN") {
                    newY += 1;
                }

                // Verifica colisión con las paredes del tablero
                if (newX < 0 || newX >= board[0].length || newY >= board.length) {
                    return true;
                }

                // Verifica colisión con otros bloques en el tablero
                if (board[newY][newX] !== 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function getRandomTetromino() {
    const keys = Object.keys(TETROMINOS); // Las llaves del diccionario
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    return TETROMINOS[randomKey];
}
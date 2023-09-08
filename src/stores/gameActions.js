// Suponiendo que tienes un store de gameStore.js que tenga un estado inicial
import { checkCollision, getRandomTetromino, rotateTetromino } from '../lib/utils.js';
import { gameState } from "../stores/gameStore.js";

// Acciones básicas
let dropInterval;
let currentTetromino = getRandomTetromino();

// Mover a la izquierda
function moveLeft() {
    if (!checkCollision(gameState, "LEFT", currentTetromino, board)) {
        gameState.update(state => {
            state.tetromino.position.x -= 1;
            return state;
        });
    }
}

// Mover a la derecha
function moveRight() {
    if (!checkCollision(gameState, "RIGHT", currentTetromino, board)) {
        gameState.update(state => {
            state.tetromino.position.x += 1;
            return state;
        });
    }
}

// Mover hacia abajo (hacer que el tetromino caiga)
function moveDown() {
    if (!checkCollision(gameState, "DOWN", currentTetromino, board)) {
        gameState.update(state => {
            state.tetromino.position.y += 1;
            return state;
        });
    } else {
        // Si hay una colisión, coloca el tetromino y genera uno nuevo
        // Podrías tener una función para esto en tu utilidad
        placeTetromino();
    }
}

// Rotar el tetromino
function rotate() {
    const rotatedTetromino = rotateTetromino(gameState.tetromino);
    if (!checkCollision(gameState, null, rotatedTetromino)) {
        gameState.update(state => {
            state.tetromino = rotatedTetromino;
            return state;
        });
    }
}

// Pausar el juego
function pause() {
    gameState.update(state => {
        state.isPaused = !state.isPaused;
        return state;
    });
}


function start() {
    // Reinicia el juego a su estado inicial.
    gameState.set({
        tetromino: getRandomTetromino(),
        board: [], // Un array 2D inicializado con valores vacíos o 0s.
        isPaused: false,
        score: 0,
        lines: 0,
        level: 1,
        //... y cualquier otro estado inicial que necesites.
    });

    // Si ya teníamos un intervalo, lo limpiamos.
    if (dropInterval) {
        clearInterval(dropInterval);
    }

    // Establecer un intervalo para mover el tetromino hacia abajo automáticamente.
    // El intervalo puede ser más rápido a medida que el jugador avanza de nivel.
    dropInterval = setInterval(() => {
        if (!gameState.isPaused) {
            moveDown();
        }
    }, 1000 - gameState.level * 50); // Por ejemplo, reducir 50ms por nivel.
}

export { moveLeft, moveRight, moveDown, rotate, pause, start };

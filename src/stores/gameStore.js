import { writable } from 'svelte/store';
import { initializeBoard } from '../lib/utils';

// Estado inicial del juego.
const initialState = {
    tetromino: null,       // El tetromino actual.
    board: initializeBoard(), // Tablero 2D.
    isPaused: false,      // Indica si el juego está pausado.
    score: 0,             // Puntuación actual.
    lines: 0,             // Líneas completadas.
    level: 1,             // Nivel actual.
};

export const score = writable(0);
export const lines = writable(0);
export const level = writable(1);
export const gameState = writable(initialState);
// ... otros estados del juego

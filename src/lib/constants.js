export const BOARD_WIDTH = 1;
export const BOARD_HEIGHT = 130;
export const TETROMINOS = {
    I: { shape: [[1, 1, 1, 1]], color: "cyan" },
    O: {
        shape: [
            [1, 1],
            [1, 1],],
        color: "yellow",
        position: { x: 4, y: 0 }  // Representa el tetromino O
    },
    T: {
        shape: [
            [0, 1, 0],
            [1, 1, 1],
        ],
        color: "purple",
        position: { x: 3, y: 0 }  // Representa el tetromino I

    },
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
        ],
        color: "green",
        position: { x: 3, y: 0 }  // Representa el tetromino I

    },
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
        ],
        color: "red",
        position: { x: 3, y: 0 }  // Representa el tetromino I

    },
    J: {
        shape: [
            [1, 0, 0],
            [1, 1, 1],
        ],
        color: "blue",
        position: { x: 3, y: 0 }  // Representa el tetromino I

    },
    L: {
        shape: [
            [0, 0, 1],
            [1, 1, 1],
        ],
        color: "orange",
        position: { x: 3, y: 0 }  // Representa el tetromino I

    },
};
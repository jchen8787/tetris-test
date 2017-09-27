import gameConstants from '../gameConstants.js';

export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const GAME_OVER = 'GAME_OVER';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ADD_TETROMINO = 'ADD_TETROMINO';
export const PAUSE_GAME = 'PAUSE_GAME';
export const UNPAUSE_GAME = 'UNPAUSE_GAME';

export const startGame = () => {
    const { shapesMapping } = gameConstants;
    const currentRandomNumber = Math.floor(Math.random() * 7);
    const nextRandomNumber = Math.floor(Math.random() * 7);
    const currentRandomShape = shapesMapping[currentRandomNumber];
    const nextRandomShape = shapesMapping[nextRandomNumber];

    return {
        type: START_GAME,
        currentRandomShape,
        nextRandomShape,
    };
};

export const loadMenu = () => (
    function (dispatch) {
        function handleSpaceBar(e) {
            if (e.keyCode === 32) {
                dispatch(loadGame());
                window.removeEventListener('keyup', handleSpaceBar);
            }
        }
        window.addEventListener('keyup', handleSpaceBar);
    }
);

export const loadGame = () => (
    function (dispatch, getState) {
        dispatch(startGame());
        function handleMoving(e) {
            switch (e.keyCode) {
                case 37:
                    e.preventDefault();
                    dispatch(moveTetromino('left'));
                    break;
                case 39:
                    e.preventDefault();
                    dispatch(moveTetromino('right'));
                    break;
                case 40:
                    e.preventDefault();
                    dispatch(moveTetromino('left'));
                    break;
                default:
                    break;
            }
        }
        function handleRotation(e) {
            switch (e.keyCode) {
                case 39:
                    e.preventDefault();
                    dispatch(rotateTetromino());
                    break;
                default:
                    break;
            }
        }
        dropTetromino(dispatch, Date.now(), getState);
        window.addEventListener('keydown', handleMoving);
        window.addEventListener('keydown', handleRotation);
    }
);

export const moveTetromino = (direction) => (
    function (dispatch, getState) {
        switch (direction) {
            default:
                return;
        }
    }
);

export const rotateTetromino = () => (
    function (dispatch, getState) {
        return;
    }
);

function dropTetromino(dispatch, startTime, getState) {
    const currentTime = Date.now();
    const { gameStatus } = getState();
    if (currentTime - startTime >= 500 && gameStatus !== 'PAUSED' && gameStatus !== 'GAME_OVER') {
        startTime = currentTime;
        dispatch(moveTetromino('down'));
    }
    requestAnimationFrame((dropTetromino.bind(this, dispatch, startTime, getState)));
}

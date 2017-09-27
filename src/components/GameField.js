import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import gameConstants from '../gameConstants.js';
import style from '../styles/styles.css';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
    if (isPlaying) {
        return (
            <div style={{display: 'inline'}}>
                <div className={style.gameField}>
                    <Stage width={fieldWidth} height={fieldHeight}>
                        <Layer>
                            {/* <CurrentTetromino />
                            <ActiveTetrominos /> */}
                        </Layer>
                    </Stage>
                </div>
            </div>
        );
    }
    return null;
};

const mapStateToProps = ({ gameStatus }) => ({
    isPlaying: gameStatus !== 'IDLE',
    isPaused: gameStatus === 'PAUSED',
    isGameOver: gameStatus === 'GAME_OVER',
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;

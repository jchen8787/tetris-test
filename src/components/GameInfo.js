import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { Layer, Stage} from 'react-konva';
import style from '../styles/styles.css';
import { changePauseState } from '../actions/index.js';

let GameInfo = ({points, clearedLines, nextTetromino, isPlaying, isPaused, isGameOver }) => {
    const buttonStyle = {
        margin: '20% 0',
    };
    if (!isPlaying) {
        return (
            <div className={style.gameInfo}>
                gameinfo placeholder
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

GameInfo = connect(mapStateToProps)(GameInfo);

export default GameInfo;

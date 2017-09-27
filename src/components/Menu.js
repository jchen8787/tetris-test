import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/styles.css';
import { loadMenu } from '../actions/index.js';

class Menu extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadMenu());
    }

    render() {
        return (
            <div>
                <h3 className={style.pageBanner}>react redux practice</h3>
                {!this.props.isPlaying ?
                    <h2 style={{color:'grey'}}>Press spacebar to start</h2>
                    : null}
            </div>
        );
    }
}

Menu.propTypes = {
    isPlaying: PropTypes.bool,
};

export default Menu;

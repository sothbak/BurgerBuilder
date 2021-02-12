import React from 'react';
import burgerImage from '../../Assets/Images/maccas-logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerImage} alt="Burger" />
        </div>
    );
};

export default logo;
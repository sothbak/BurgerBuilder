import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/Toggle/Toggle';

const toolbar =(props) => {
    return (
        <header className={classes.Toolbar}>
            <Toggle clicked={props.openSideDrawer} />
            <Logo height="80%" />
            <nav className={classes.DesktopOnly}>  {/* nav is the links */}
                <NavigationItems />
            </nav>
        </header>
    )
};

export default toolbar;

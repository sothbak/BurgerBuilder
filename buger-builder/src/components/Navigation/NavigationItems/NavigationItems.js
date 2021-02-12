import React from 'react';
import classes from './NavigationItems.css'

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
    // <a> tag is an anchor tag which is a link text, contains a href
    // li is a list item
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
            <NavigationItem link="/" >Checkout</NavigationItem>
        </ul>
    );
};

export default navigationItems;
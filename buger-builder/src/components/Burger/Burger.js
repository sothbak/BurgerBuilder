import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { //the Array() is just for the length of the map loop
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;
import React from 'react';

import Aux from '../../../hoc/Auxil';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your burger has the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Your total cost is: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;
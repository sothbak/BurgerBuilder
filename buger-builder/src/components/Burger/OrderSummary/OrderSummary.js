import React, { Component } from 'react';

import Aux from '../../../hoc/Auxil';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentDidUpdate() {
    //     console.log("[OrderSummar] updates");
    // };

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your burger has the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Your total cost is: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button buttonType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    };
};

export default OrderSummary;
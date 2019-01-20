import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
    onToken = (token) => {
    
    }

    render() {
    return (
        <StripeCheckout
            token={this.onToken}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        />
    )
    }
}
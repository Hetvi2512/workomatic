import React from 'react';

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price})=>{

    const priceforStripe = price * 100;
    const publishableKey = 'pk_test_51He3nCEh4YqnHl9qflnIuMyxel6qXiSooRHHj0OeBEajkGiFB2WzF5oyWRmtJS3XL2bBPv1PsGax9rOcm5Y6b74600nmVx81jx';
const onToken=token=>{
   alert('Payment Successful') 
}
    return(
        <StripeCheckout
        label ='Pay Now'
        name='Workomatic'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is Rs ${price}`}
        amount ={priceforStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStrpie = price * 100;
    const publishableKey = 'pk_test_51Jc6ttCg2ZbAsiTD55uirAclsQ8lJaCXnzjlFQ6PgZTp7G7ZS9zgmzscYB6DHYqcLV3e5QFH18btoSBUONewncKK00FK2Ny899';
    
    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shipingAddress
            description={`You total is $${price}`}
            amount={priceForStrpie}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
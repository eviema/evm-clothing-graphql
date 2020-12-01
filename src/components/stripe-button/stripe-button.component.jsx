import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe needs prices in cents
  const publishableKey =
    "pk_test_51HtT5gKZKEJkJpDe4327RBR8A9b9xtmb1jxzbuU5QCK7vwzjsMobkC6sSlZxoZW6pXs1cYrIfQ1bBG5hjyQRahoC00oU1dz1mD";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="EVM Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JZUMZSFNw7tz5jwcSJXiOd74LGJC6zEOSQ3vsWBgAzvBzfhFoYRBDTIKPLFwxSYRkE5928NLzP7mm7FsWwFdiZa00ELDF4w1L";

  const onToken = (token) => {
    console.log(token);
    alert("payment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothind Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

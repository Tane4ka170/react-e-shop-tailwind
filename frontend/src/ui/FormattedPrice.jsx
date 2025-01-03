import React from "react";

const FormattedPrice = ({ amount }) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <div>{formattedAmount}</div>;
};

export default FormattedPrice;

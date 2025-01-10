import React from "react";
import { store } from "../lib/store";

const CheckoutBtn = ({ products }) => {
  const { currentUser } = store();
  return <div>{currentUser ? <button></button> : ""}</div>;
};

export default CheckoutBtn;

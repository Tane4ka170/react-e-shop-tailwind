import React from "react";
import { Link } from "react-router";

const CartProduct = ({ product }) => {
    return <div className="flex py-6 sm:py-10">
        <Link to={ }>
        <img src={product?.images[0]} alt="" /></Link>
  </div>;
};

export default CartProduct;

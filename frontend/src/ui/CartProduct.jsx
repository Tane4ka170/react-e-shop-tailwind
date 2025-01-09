import React from "react";
import { Link } from "react-router";

const CartProduct = ({ product }) => {
  return (
    <div className="flex py-6 sm:py-10">
      <Link to={`/product/${product?._id}`}>
        <img
          src={product?.images[0]}
          alt="productImage"
          className="h-24 w-24 rounded-md object-cover sm:h-48 sm:w-48 border border-skyText/30 hover:border-skyText duration-300"
        />
      </Link>
      <div className="ml-4 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
          <div className="flex flex-col gap-1 col-span-3">
            <h3>{product?.name.substring(0, 80)}</h3>
            <p>
              Brand: <span>{product?.brand}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

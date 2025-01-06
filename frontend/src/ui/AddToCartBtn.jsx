import React from "react";
import { twMerge } from "tailwind-merge";
import { store } from "../lib/store";
import toast from "react-hot-toast";

const AddToCartBtn = ({ className, title, product }) => {
  const newClassName = twMerge(
    "bg-[#cc0aa6] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const { addToCart, cartProduct } = store();
  // console.log("cartProduct", cartProduct);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully`);
    } else {
      toast.error("The product is not defined");
    }
  };
  return (
    <button className={newClassName} onClick={handleAddToCart}>
      {title ? title : "Add to cart"}
    </button>
  );
};

export default AddToCartBtn;

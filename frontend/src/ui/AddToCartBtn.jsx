import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { store } from "../lib/store";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCartBtn = ({ className, title, product }) => {
  const { addToCart, cartProduct } = store();

  const [existingProduct, setExistingProduct] = useState(null);

  const newClassName = twMerge(
    "bg-[#cc0aa6] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully`);
    } else {
      toast.error("The product is not defined");
    }
  };

  const handleDeleteProduct = () => {};

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );

    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  return (
    <>
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button className={newClassName} onClick={handleAddToCart}>
          {title ? title : "Add to cart"}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;

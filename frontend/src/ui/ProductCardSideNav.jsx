import React, { useState } from "react";
import { FaRegStar, FaEye } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import { store } from "../lib/store";

const ProductCardSideNav = ({ product }) => {
  const { addToFavorite, favoriteProduct } = store();
  const [existingProduct, setExistingProduct] = useState(null);
  const handleFavorite = () => {};
  return (
    <div className="absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span
        className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200"
        onClick={handleFavorite}
      >
        <FaRegStar />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <LuArrowLeftRight />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <FaEye />
      </span>
    </div>
  );
};

export default ProductCardSideNav;

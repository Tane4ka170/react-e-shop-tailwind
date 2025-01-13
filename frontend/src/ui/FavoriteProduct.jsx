import React from "react";

const FavoriteProduct = ({ product }) => {
  return (
    <div className="flex py-6">
      <div className="min-w-0 flex-1 lg:flex lg:flex-col">
        <div className="lg:flex-1">
          <div className="sm:flex">
            <div>
              <h4 className="font-medium text-gray-900">{product?.name}</h4>
              <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                {product?.description}
              </p>
              <p className="text-sm mt-1">
                Brand: <span className="font-medium">{product?.brand}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4 flex-shrink-0 h-20 w-20 sm:w-40 sm:h-40 sm:order-first sm:m-0 sm:mr-6 border border-gray-200 rounded-md hover:border-skyText duration-200 cursor-pointer group overflow-hidden">
        <img
          src={product?.images[0]}
          alt="productImage"
          className="h-full w-full rounded-lg object-cover object-center group-hover:scale-110 duration-200"
        />
      </div>
    </div>
  );
};

export default FavoriteProduct;

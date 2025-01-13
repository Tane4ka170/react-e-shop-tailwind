import React from "react";
import Container from "../ui/Container";
import { store } from "../lib/store";
import FavoriteProduct from "../ui/FavoriteProduct";

const Favorite = () => {
  const { favoriteProduct } = store();
  return (
    <Container>
      {favoriteProduct?.length > 0 ? (
        <div className="border-b border-b-gray-300">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Saved Favorites
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-[500px] tracking-wide font-medium">
            Your favorite products are listed here. Start adding items to create
            your personalized collection.
          </p>
          <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
            <div className="-my-6 divide-y divide-gray-200">
              {favoriteProduct.map((product) => (
                <FavoriteProduct key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>No items added to Favorites</h2>
        </div>
      )}
    </Container>
  );
};

export default Favorite;

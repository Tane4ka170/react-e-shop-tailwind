import React from "react";
import { store } from "../lib/store";
import Container from "../ui/Container";
import { Link } from "react-router";
import CartProduct from "../ui/CartProduct";

const Cart = () => {
  const { cartProduct } = store();
  return (
    <Container>
      {cartProduct.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section className="lg:col-span-7">
              <div className="divide-y divide-gray-600 border-b border-t border-gray-200">
                {cartProduct.map((item) => (
                  <CartProduct product={item} key={product?._id} />
                ))}
              </div>
            </section>
            <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">
                Summary of Your Order
              </h2>
            </section>
          </div>
        </>
      ) : (
        <div className="bg-white h-96 flex flex-col gap-2 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="text-lg max-w-[600px] text-center text-gray-600">
            Your cart is empty. Start adding items to fill it up and proceed to
            checkout!
          </p>
          <Link to={"/product"}>Proceed to shopping</Link>
        </div>
      )}
    </Container>
  );
};

export default Cart;

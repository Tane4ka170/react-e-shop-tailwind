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
          <div>
            <section>
              <div>
                {cartProduct.map((item) => (
                  <CartProduct product={item} key={product?._id} />
                ))}
              </div>
            </section>
            <section></section>
          </div>
        </>
      ) : (
        <div>
          <h1>Shopping Cart</h1>
          <p>
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

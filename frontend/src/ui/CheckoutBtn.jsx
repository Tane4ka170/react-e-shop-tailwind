import React from "react";
import { store } from "../lib/store";
import { loadStripe } from "@stripe/stripe-js";
import { config } from "../../config";

const CheckoutBtn = ({ products }) => {
  const { currentUser } = store();
  const publishableKey = process.env.PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = fetch(`${config?.baseUrl}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: products,
        email: currentUser?.email,
      }),
    });
    const checkoutSession = await response.json();
  };
  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          Checkout
        </button>
      ) : (
        <button className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
          Checkout
        </button>
      )}
      {!currentUser && (
        <p className="mt-2 text-sm font-medium text-red-500 text-center">
          You need to sign in to complete the checkout
        </p>
      )}
    </div>
  );
};

export default CheckoutBtn;

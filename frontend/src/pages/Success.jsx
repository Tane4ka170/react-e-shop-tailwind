import React, { useEffect, useState } from "react";
import { store } from "../lib/store";
import { Link, useLocation, useNavigate } from "react-router";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
import Container from "../ui/Container";
import Loading from "../ui/Loading";

const Success = () => {
  const { currentUser, cartProduct, resetCart } = store();
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      navigate("/");
    } else if (cartProduct.length > 0) {
      const saveOrder = async () => {
        try {
          setLoading(true);
          const orderRef = doc(db, "orders", currentUser?.email);
          const docSnap = await getDoc(orderRef);
          if (docSnap.exists()) {
            await updateDoc(orderRef, {
              orders: arrayUnion({
                userEmail: currentUser?.email,
                paymentId: sessionId,
                orderItems: cartProduct,
                paymentMethod: "stripe",
                userId: currentUser?.id,
              }),
            });
            toast.success(
              "Payment processed successfully, and your order has been confirmed!"
            );
            resetCart();
          } else {
            await setDoc(orderRef, {
              orders: [
                {
                  userEmail: currentUser?.email,
                  paymentId: sessionId,
                  orderItems: cartProduct,
                  paymentMethod: "stripe",
                },
              ],
            });
          }
        } catch (error) {
          toast.error("Failed to save order information");
        } finally {
          setLoading(false);
        }
      };
      saveOrder();
    }
  }, [sessionId, navigate, currentUser, cartProduct]);

  return (
    <Container>
      {loading && <Loading />}
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {loading
            ? "Your payment for the order is currently being processed"
            : "Your payment has been successfully received by lastKiss.com"}
        </h2>
        <p>
          {loading ? "Processing your request" : "Success!"} You can now view
          your orders or continue shopping with us.
        </p>
        <div className="flex items-center gap-x-5">
          <Link to={"/orders"}>
            <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
              View Orders
            </button>
          </Link>
          <Link to={"/"}>
            <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Success;

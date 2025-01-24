import React, { useState } from "react";
import { store } from "../lib/store";
import { useLocation, useNavigate } from "react-router";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
import Container from "../ui/Container";

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

  return <Container>{loading}</Container>;
};

export default Success;

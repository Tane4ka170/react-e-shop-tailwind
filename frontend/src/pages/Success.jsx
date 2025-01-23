import React, { useState } from "react";
import { store } from "../lib/store";
import { useLocation, useNavigate } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";

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
          if (docSnap) {
          }
        } catch (error) {
          toast.error("Error saving order data");
        } finally {
          setLoading(false);
        }
      };
    }
  }, [sessionId]);

  return <div>Success</div>;
};

export default Success;

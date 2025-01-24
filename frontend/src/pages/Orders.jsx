import React, { useEffect, useState } from "react";
import { store } from "../lib/store";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const Orders = () => {
  const { currentUser } = store();
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "orders", currentUser?.email);
        const docSnap = await getDoc();
      } catch (error) {
        console.log("Data fetching error", error);
      } finally {
        setLoading(false);
      }
    };
  }, [third]);

  return <div>Orders</div>;
};

export default Orders;

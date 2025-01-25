import React, { useEffect, useState } from "react";
import { store } from "../lib/store";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import { Link } from "react-router";

const Orders = () => {
  const { currentUser } = store();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "orders", currentUser?.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const orderData = docSnap?.data()?.orders;
          setOrders(orderData);
        } else {
          console.log("No orders placed yet");
        }
      } catch (error) {
        console.log("Data fetching error", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [third]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : !orders.length > 0 ? (
        <div>
          <h2>Order Information for Customer</h2>
          <p>
            Customer name{" "}
            <span>
              {currentUser?.firstName}
              {currentUser?.lastName}
            </span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">No purchases found</p>
          <p>Looks like you haven’t made any orders yet!</p>
          <Link
            to={"/product"}
            className="mt-2 bg-gray-800 text-gray-100 px-6 py-2 rounded-md hover:bg-black hover:text-white duration-200"
          >
            Start Shopping Now
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Orders;

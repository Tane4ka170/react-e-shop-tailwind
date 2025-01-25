import React, { useEffect, useState } from "react";
import { store } from "../lib/store";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import { Link } from "react-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaPlus } from "react-icons/fa";
import FormattedPrice from "../ui/FormattedPrice";

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mt-1">
            Order Information for Customer
          </h2>
          <p className="text-gray-600">
            Customer name{" "}
            <span className="text-black font-semibold">
              {currentUser?.firstName}
              {currentUser?.lastName}
            </span>{" "}
          </p>
          <p className="text-gray-600">
            Total orders{" "}
            <span className="text-black font-semibold">{orders?.length}</span>
          </p>
          <p className="text-sm max-w-[600px] tracking-wide text-gray-500">
            Thank you for shopping with us! Below you will find the details
            about your orders. Keep track of your purchases, their status, and
            delivery information all in one place. For any inquiries or
            assistance, feel free to contact our support team.
          </p>
          <div className="flex flex-col gap-3">
            <div className="space-y-6 divide-6 divide-gray-900/10">
              {orders.map((order) => {
                const totalAmt = order?.orderItems.reduce(
                  (acc, item) =>
                    acc + (item?.discountedPrice * item?.quantity || 0),
                  0
                );
                return (
                  <Disclosure as="div" key={order?.paymentId} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <DisclosureButton className="flex w-full items-center justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              Tracking number:{" "}
                              <span className="font-normal">
                                {order?.paymentId}
                              </span>
                              <span>{open ? <FaMinus /> : <FaPlus />}</span>
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-5 pr-12">
                          <div className="flex flex-col gap-2 bg-[#f9a09b] p-5 border-gray-200">
                            <p className="text-base font-semibold">
                              Your order{" "}
                              <span className="text-skyText">
                                #{order?.paymentId.substring(0, 20)}...
                              </span>{" "}
                              is on its way and will reach you shortly.
                            </p>
                            <div className="flex flex-col gap-1">
                              <p className="text-gray-600">
                                Order Item Count:{" "}
                                <span className="text-black font-medium">
                                  {order?.orderItems?.length}
                                </span>
                              </p>
                              <p className="text-gray-600">
                                Payment Status:{" "}
                                <span className="text-black font-medium">
                                  Paid by Stripe
                                </span>
                              </p>
                              <p className="text-gray-600">
                                Order Amount:{" "}
                                <span className="text-black font-medium">
                                  <FormattedPrice amount={totalAmt} />
                                </span>
                              </p>
                            </div>
                            {order?.orderItems?.map((item) => (
                              <div
                                key={item?._id}
                                className="flex space-x-0 border-b border-gray-200"
                              >
                                <Link
                                  to={`/product/${item?._id}`}
                                  className="h-20 w-20 flex-none sm:h-40 sm:w-40 rounded-lg bg-gray-100 border border-gray-300 hover:border-skyText overflow-hidden"
                                >
                                  <img
                                    src={item?.images[0]}
                                    alt="productImage"
                                    className="h-full w-full object-cover object-center hover:scale-110"
                                  />
                                </Link>
                                <div className="flex flex-auto flex-col">
                                  <div>
                                    <Link
                                      to={`/product/${item?._id}`}
                                      className="font-medium text-gray-900"
                                    >
                                      {item?.name}
                                    </Link>
                                    <p className="mt-2 text-sm text-gray-900">
                                      {item?.description}
                                    </p>
                                  </div>
                                  <div className="mt-6 flex flex-1 items-end">
                                    <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                      <div className="flex">
                                        <dt className="font-medium text-gray-900">
                                          Quantity
                                        </dt>
                                        <dd className="ml-2 text-gray-700">
                                          {item?.quantity}
                                        </dd>
                                      </div>
                                      <div className="flex pl-4 sm:pl-6">
                                        <dt className="text-black font-bold">
                                          Price
                                        </dt>
                                        <dd className="ml-2 text-gray-700">
                                          <span className="text-black font-bold">
                                            <FormattedPrice
                                              amount={item?.discountedPrice}
                                            />
                                          </span>
                                        </dd>
                                      </div>
                                      <div className="flex pl-4 sm:pl-6">
                                        <dt className="font-medium text-gray-900">
                                          SubTotal
                                        </dt>
                                        <dd className="ml-2 text-gray-700">
                                          <span className="text-black font-bold">
                                            <FormattedPrice
                                              amount={
                                                item?.discountedPrice *
                                                item?.quantity
                                              }
                                            />
                                          </span>
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
          </div>
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

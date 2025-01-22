import React, { useState } from "react";
import { store } from "../lib/store";
import { useLocation, useNavigate } from "react-router";

const Success = () => {
  const { currentUser, cartProduct, resetCart } = store();
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return <div>Success</div>;
};

export default Success;

import React from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config";

const Product = () => {
  const { id } = useParams();
  const endpoint = id ? `${config?.baseUrl}` : "";
  return <div>Product</div>;
};

export default Product;

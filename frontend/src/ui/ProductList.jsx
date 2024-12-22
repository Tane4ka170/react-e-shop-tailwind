import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router";
import Pagination from "./Pagination";

const ProductList = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Top Selling Products" />
          <Link to={"/product"}>View all products</Link>
        </div>
        <div className="w-full h-[1px] bg-red-200 mt-2" />
      </div>

      {/* Pagination */}
      <Pagination />
    </Container>
  );
};

export default ProductList;

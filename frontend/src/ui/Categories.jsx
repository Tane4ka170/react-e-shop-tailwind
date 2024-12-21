import React, { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../../config";
import Title from "./Title";
import { Link } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <div>
        <div className="flex items-center justify-between">
          <Title text="Popular categories" />
          <Link
            to={"/category/tvAndAudio"}
            className="font-medium relative group overflow-hidden"
          >
            View all categories{" "}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%]" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Categories;

import React, { useEffect, useState } from "react";
import { getData } from "../lib";
import Carousel from "react-multi-carousel";
import { Link } from "react-router";
import { config } from "../../config";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BannerCategories = () => {
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
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={1000}
      className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {categories.map((item) => (
        <Link
          to={`category/${item._base}`}
          key={item?._id}
          className="flex items-center gap-x-2 p-1 border border-gray-100 flex-1 rounded-md hover:border-skyText hover:shadow-lg"
        >
          <img
            src={item?.image}
            alt="Category image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm font-semibold">{item?.name}</p>
        </Link>
      ))}
    </Carousel>
  );
};

export default BannerCategories;

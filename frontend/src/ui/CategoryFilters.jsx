import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import { FidgetSpinner } from "react-loader-spinner";
import { Link } from "react-router";

const CategoryFilters = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px]">
          Select categories
        </p>
        <div className="flex flex-col gap-2 min-w-40">
          {loading ? (
            <div className="flex items-center justify-center my-5">
              <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
                backgroundColor="#ee83a8"
                ballColors={["#d2d5e6", "#4e6e9e", "#6c2ec9"]}
              />
            </div>
          ) : (
            categories.map((item) => (
              <Link
                to={`/category/${item?._base}`}
                key={item?._id}
                className={`text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                  item?._base === id ? "text-greenText" : "text-lightText"
                } `}
              >
                {item?.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;

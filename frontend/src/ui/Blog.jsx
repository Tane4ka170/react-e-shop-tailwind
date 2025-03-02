import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import { config } from "../../config";

const Blog = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/blogs`;
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogsData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Title text="Articles from Our Blog" className="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
        {blogsData.map((item) => (
          <div key={item?._id} className="group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={item?.image}
                alt="blogImage"
                className="w-full h-auto object-cover group-hover:scale-110 duration-300"
              />
            </div>
            <div>
              <p className="text-sm uppercase text-gray-500">{item?._base}</p>
              <p className="text-2xl font-bold line-clamp-1">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blog;

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
      <div>
        {blogsData.map((item) => (
          <div key={item?._id}>
            <img src={item?.image} alt="blogImage" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blog;

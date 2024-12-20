import React, { useEffect, useState } from "react";
import Container from "./Container";

const Highlights = () => {
  const [highlightsData, setHighlightsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/highlights`;
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHighlightsData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div>Highlights</div>
    </Container>
  );
};

export default Highlights;

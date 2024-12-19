import React from "react";
import Container from "./Container";
import { homeBanner } from "../assets";

const HomeBanner = () => {
  return (
    <Container>
      <div>
        <img src={homeBanner} alt="" />
      </div>
    </Container>
  );
};

export default HomeBanner;

import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router";

const DiscountedBanner = () => {
  const popularSearchItems = [
    { title: "Smart Watches", link: "smartWatches" },
    { title: "Headphone", link: "headphones" },
    { title: "Cameras", link: "camerasAndPhotos" },
    { title: "Audio", link: "tvAndAudio" },
    { title: "Laptop & Computers", link: "computersAndLaptop" },
    { title: "Cell Phone", link: "cellPhones" },
  ];
  return (
    <Container>
      <div>
        <Title text="Popular Search" />
        <div className="w-full h-[1px] bg-red-200 mt-2 gap-4" />
      </div>
      <div className="my-7 flex items-center flex-wrap">
        {popularSearchItems.map(({ title, link }) => (
          <Link
            key={title}
            to={`/category/${link}`}
            className="border border-red-300 px-8 border-[px] rounded-full capitalize font-medium hover:bg-black hover:text-white duration-200"
          >
            {title}
          </Link>
        ))}
      </div>

      <div className="w-full py-5 md:py-0 my-12 bg-[#f9a09b] rounded-lg flex items-center justify-between overflow-hidden">
        <img src="" alt="" />
      </div>
    </Container>
  );
};

export default DiscountedBanner;

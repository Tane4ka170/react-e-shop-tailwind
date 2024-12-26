import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router";
import { discountImgOne, discountImgTwo } from "../assets";

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
        <img
          src={discountImgOne}
          alt="discountImgOne"
          className="hidden lg:inline-flex h-36"
        />
        <div>
          <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
            <h2>Sony Headphones</h2>
            <Link
              to={"/product"}
              className="border border-lime-600 px-4 py-2 text-xl md:text-3xl text-lime-600 rounded-full"
            >
              Discount 20%
            </Link>
          </div>
          <p>Whether you're heading out to play or to create</p>
        </div>
        <img
          src={discountImgTwo}
          alt="discountImgTwo"
          className="hidden lg:inline-flex h-36"
        />
      </div>
    </Container>
  );
};

export default DiscountedBanner;

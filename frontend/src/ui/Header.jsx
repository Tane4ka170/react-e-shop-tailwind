import { useState } from "react";
import { logo } from "../assets";
import {
  CiCircleChevDown,
  CiSearch,
  CiShoppingBasket,
  CiStar,
  CiUser,
} from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Container from "./Container";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full bg-whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-14 h-14" />
        {/* Searchbar */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full flex-1 rounded-full text-green-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 placeholder:font-normal focus:ring-2 focus:ring-blackText sm:text-sm px-4 py-2"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          {searchText ? (
            <IoIosClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-emerald-500 cursor-pointer duration-200"
            />
          ) : (
            <CiSearch className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        {/* Menubar */}
        <div className="flex items-center gap-x-6">
          <CiUser className="hover:text-skyText duration-200 cursor-pointer" />
          <div className="relative block">
            <CiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </div>
          <div className="relative block">
            <CiShoppingBasket className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-blackText text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <p className="flex items-center gap-1">
            Select category <CiCircleChevDown />
          </p>
          {bottomNavigation.map(({ title, link }) => (
            <p
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute transform -translate-x-[105%] group-hover:translate-x-0 duration-300"></span>
            </p>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;

import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { config } from "../../config";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import ProductCard from "./ProductCard";
import { store } from "../lib/store";

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
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartProduct, favoriteProduct, currentUser } = store();

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

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-whiteText md:sticky md:top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-14 h-14" />
        </Link>
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
        {/* SearchProduct will be here */}
        {searchText && (
          <div className="absolute left-0 top-20 w-full mx-auto max-h-[500px] px-10 py-5 bg-white z-20 overflow-y-scroll text-black shadow-lg shadow-skyText scrollbar-hide">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {filteredProducts?.map((item) => (
                  <ProductCard
                    item={item}
                    setSearchText={setSearchText}
                    key={item?._id}
                  />
                ))}
              </div>
            ) : (
              <div className="py-10 bg-gray-50 w-full flex items-center justify-center border border-gray-600 rounded-md">
                <p className="text-xl font-normal">
                  No results match your search keywords{" "}
                  <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`}</span>
                </p>
                . Please try again.
              </div>
            )}
          </div>
        )}
        {/* Menubar */}
        <div className="flex items-center gap-x-6">
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                src={currentUser?.avatar}
                alt="profileImg"
                className="w-5 h-5 rounded-full object-cover"
              />
            ) : (
              <CiUser className="hover:text-skyText duration-200 cursor-pointer" />
            )}
          </Link>

          <Link to={"/favorite"} className="relative block">
            <CiStar className="hover:text-skyText duration-200 cursor-pointer" />

            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {favoriteProduct?.length > 0 ? favoriteProduct?.length : "0"}
            </span>
          </Link>
          <Link to={"/cart"} className="relative block">
            <CiShoppingBasket className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {cartProduct?.length > 0 ? cartProduct?.length : "0"}
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full bg-blackText text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText">
              Select Category <CiCircleChevDown className="text-base mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
                {categories.map((item) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;

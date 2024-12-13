import { logo } from "../assets";

const Header = () => {
  return (
    <div className="w-full bg-whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-14 h-14" />
        {/* Searchbar */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative bg-green-500">
          <input
            type="text"
            placeholder="Search products"
            className="w-full flex-1 rounded-full"
          />
        </div>
        {/* Menubar */}
      </div>
    </div>
  );
};

export default Header;

import BannerCategories from "./ui/BannerCategories.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/HomeBanner.jsx";
import Highlights from "./ui/Highlights.jsx";
import Categories from "./ui/Categories.jsx";
import ProductList from "./ui/ProductList.jsx";
import DiscountedBanner from "./ui/DiscountedBanner.jsx";
import Blog from "./ui/Blog.jsx";

const App = () => {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <Blog />
    </main>
  );
};

export default App;

import BannerCategories from "./ui/BannerCategories.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/HomeBanner.jsx";
import Highlights from "./ui/Highlights.jsx";
import Categories from "./ui/Categories.jsx";

const App = () => {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
    </main>
  );
};

export default App;

import BannerCategories from "./ui/BannerCategories.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/HomeBanner.jsx";
import Highlights from "./ui/Highlights.jsx";

const App = () => {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
    </main>
  );
};

export default App;

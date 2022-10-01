import "./App.scss";

// components
import Header from "./Sections/Header";
import MainSlider from "./Sections/MainSlider";
import Services from "./Sections/Services";
import CategoryCards from "./Sections/CategoryCards";
import BestSellerCarousel from "./Sections/BestSellerCarousel";
import CouponBanner from "./Sections/CouponBanner";
import SpecialOffer from "./Sections/SpecialOffer";
import SpecialOppertunity from "./Sections/SpecialOppertunity";
import TrendingProducts from "./Sections/TrendingProducts";
import BestSeller from "./Sections/BestSeller";
import CategoriesPreview from "./Sections/CategoriesPreview";
import PartnerBrands from "./Sections/PartnerBrands";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <Services />
      <CategoryCards />
      <BestSellerCarousel />
      <CouponBanner />
      <BestSeller />
      <SpecialOppertunity />
      <TrendingProducts />
      <SpecialOffer />
      <CategoriesPreview />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default App;

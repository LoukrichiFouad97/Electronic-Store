import "./App.scss";

// components
import Header from "./components/Header";
import MainSlider from "./components/MainSlider";
import Services from "./components/Services";
import CategoryCards from "./components/CategoryCards";
import BestSellerCarousel from "./components/BestSellerCarousel";
import CouponBanner from "./components/CouponBanner";
import SpecialOffer from "./components/SpecialOffer";
import SpecialOppertunity from "./components/SpecialOppertunity";
import TrendingProducts from "./components/TrendingProducts";
import BestSeller from "./components/BestSeller";
import CategoriesPreview from "./components/CategoriesPreview";
import PartnerBrands from "./components/PartnerBrands";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <Services />
      <CategoryCards />
      <BestSellerCarousel />
      <CouponBanner />
      <SpecialOffer />
      <SpecialOppertunity />
      <TrendingProducts />
      <BestSeller />
      <CategoriesPreview />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default App;

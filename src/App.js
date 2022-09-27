import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";

// components
import Header from "./components/Header";
import MainSlider from "./components/MainSlider";
import Services from "./components/Services";
import CategoryCards from "./components/CategoryCards";
import BestSeller from "./components/BestSeller";
import CouponBanner from "./components/CouponBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <Services />
      <CategoryCards />
      <BestSeller />
      <CouponBanner />
    </div>
  );
}

export default App;

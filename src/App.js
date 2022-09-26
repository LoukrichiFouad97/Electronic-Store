import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";

// components
import Header from "./components/Header";
import MainSlider from "./components/MainSlider";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <Services />
    </div>
  );
}

export default App;

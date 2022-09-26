import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";

// components
import Header from "./components/Header";
import MainSlider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
    </div>
  );
}

export default App;

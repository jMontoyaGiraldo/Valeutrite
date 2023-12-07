import Nav_Bar from "./components/navBar/Navbar";
import Landing from "./components/landing/landing";
import { Element } from "react-scroll";
import V from "./components/V/V";
import J from "./components/J/J";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <div style={{ display: "grid" }}>
      <Nav_Bar />
      <Element name="section0">
        <Landing title="section0" dark={true} id="section0" />
      </Element>
      <Element name="section1">
        <V title="section1" dark={true} id="section1" />
      </Element>
      <Element name="section2">
        <J title="section2" dark={true} id="section2" />
      </Element>
      <Element name="section3">
        <Nosotros title="section3" dark={true} id="section2" />
      </Element>
    </div>
  );
}

export default App;

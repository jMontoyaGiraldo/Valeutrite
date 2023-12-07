import estilos from "./Nav_Bar.module.css";
import { Link } from "react-scroll";

const Nav_Bar = () => {
  return (
    <div className={estilos.allNav}>
      <div className={estilos.logo}>
      <Link
            activeClass="active"
            to="section0"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>🖤</button>
          </Link>  </div>
      <div className={estilos.Nav_Bar}>
        <div className={estilos.botones}>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>V</button>
          </Link>

          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>J</button>
          </Link>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>Nosotros</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav_Bar;

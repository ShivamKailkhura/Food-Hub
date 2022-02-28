import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Gap() {
  const [{ basket }, dispatch] = useStateValue();
  const tile = {
    color: "magenta",
  };
  return (
    <header className="header header-desktop header-2 header-355">
      <div className="col-md-9">
        <div className="header-right">
          <nav className="menu">
            <ul className="main-menu">
              <Link to="/">
                <a href="#" id="logo">
                  <img
                    className="logo-image logo-image1"
                    src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e"
                    alt="Organik Logo"
                  />
                </a>
                <div className="btn-wrap">
                  <div className="cart-btn">
                    <span className="nav-icon">
                      <Link to="/cart" style={tile}>
                        <i className="fas fa-cart-plus">Cart</i>
                      </Link>
                    </span>
                    <div className="cart-items" style={tile}>
                      {basket.length}
                    </div>
                  </div>
                </div>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Gap;

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  const tile = {
    color: "magenta",
  };

  return (
    <div>
      <header
        id="header"
        className="header header-desktop header-2 header-355"
        style={{ backgroundColor: "black", position: "fixed" }}
      >
        <div className="top-search">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form>
                  <input
                    type="search"
                    className="top-search-input"
                    name="s"
                    placeholder="What are you looking for?"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" style={tile}>
                <a href="#" id="logo">
                  <img
                    className="logo-image logo-image1"
                    src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e"
                    alt="Organik Logo"
                  />
                </a>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="popover"
                  title="Welcome..."
                  data-bs-content="We are dedicated 24/7 to satisfy your tastebuds without compromising on ur health."
                >
                  FOOD HUB
                </button>
              </Link>
            </div>

            <div className="col-md-9">
              <div className="header-right">
                <nav className="menu">
                  <ul className="main-menu">
                    <li className="">
                      <Link
                        to="/"
                        style={{ color: "rebeccapurple", fontSize: "20px" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="">
                      <a href="#" style={tile}>
                        About Us
                      </a>
                    </li>
                    <li className="">
                      <a href="#" style={tile}>
                        Blog
                      </a>
                    </li>
                    <li className="">
                      <Link to="/contact" style={tile}>
                        Contact
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a href="#" style={{ color: "red", fontSize: "20px" }}>
                        Categories ▣
                      </a>
                      {/* <i className="sub-menu-toggle fa fa-angle-down"></i>  */}
                      <ul className="sub-menu">
                        <li>
                          <Link to="/pizza">FOOD HUB Pizza</Link>
                        </li>
                        <li>
                          <Link to="/burger">FOOD HUB Burger</Link>
                        </li>
                        <li>
                          <Link to="/dosa">FOOD HUB Sambhar-Dosa</Link>
                        </li>
                        <li>
                          <Link to="/milkshake">Milk Shake</Link>
                        </li>
                        <li>
                          <Link to="/hotchocolate">Hot Chocolate</Link>
                        </li>
                        <li>
                          <Link to="/mangoshake">AAM Ras</Link>
                        </li>
                        <li>
                          <Link to="/dinner">Dinner</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

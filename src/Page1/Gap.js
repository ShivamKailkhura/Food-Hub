import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Gap() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Link to="/">
            {/* <a href="#" id="logo">
              <img
                className="logo-image logo-image1"
                src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e"
                alt="Organik Logo"
              />
            </a> */}
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
            <div className="btn-wrap" style={{ marginLeft: "400px" }}>
              <div className="cart-btn">
                <span className="nav-icon">
                  <Link to="/cart">
                    <i className="fas fa-cart-plus">Cart</i>
                  </Link>
                </span>
                <div className="cart-items">{basket.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gap;

import React from "react";
import "./toplayer.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Top() {
  const [{ user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="my-4">
      <div className="topbar topbar1 ">
        <div className="container ">
          <div className="row ">
            <div
              className="col-md-12 text-center my-4"
              style={{ color: "orange", fontSize: "15px", fontWeight: "800" }}
            >
              Free shipping on orders above Rs. 599/-
            </div>

            <div className="col-md-4">
              <div className="topbar-menu">
                <ul className="topbar-menu">
                  <li>
                    <Link to={!user && "/login"}>
                      <div
                        onClick={handleAuthentication}
                        className="header__option"
                      >
                        <span>
                          {user ? "Hello " + user.email : "Hello Guest"}
                        </span>
                        <span>{user ? " Log Out" : " Sign In"}</span>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <a href="#">Track Order</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;

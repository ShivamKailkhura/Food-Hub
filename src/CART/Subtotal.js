import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <form style={{ paddingBottom: "100px" }}>
      <div className="subtotal">
        <h4>
          <strong>Offers & Coupons</strong>
        </h4>

        <input
          type="text"
          style={{ borderRadius: "9px" }}
          placeholder="Apply"
        />
      </div>
      <div className="subtotal">
        <strong style={{ color: "purple" }}>Breakup</strong>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                <strong>
                  Product total{" "}
                  <span id="one" style={{ marginLeft: "12rem" }}>
                    {value}:00
                  </span>
                </strong>
                <hr />
                <strong>
                  Sub total{" "}
                  <span
                    id="one"
                    style={{ marginLeft: "15rem", marginTop: "0px" }}
                  >
                    {value}:00
                  </span>
                </strong>
              </p>
              <br />
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <button onClick={(e) => history("/payment")}>PAY NOW</button>
      </div>
    </form>
  );
}

export default Subtotal;

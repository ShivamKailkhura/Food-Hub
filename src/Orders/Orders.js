import "./Orders.css";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CART/CheckoutProduct";
// import { Link, useNavigate } from "react-router-dom";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];

  return (
    <div className="section pt-3 pb-3">
      <div
        className="alert alert-success"
        style={{ backgroundColor: "green" }}
        role="alert"
      >
        Hurray!! Your transaction was a success. Now leave everything on our
        shoulders.
      </div>

      <h2 className="text-center section-title pb-3">Your Orders</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="product-grid">
              <div className="col-lg-12">
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3> Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                  <h5 style={{ color: "red" }}>Order Booked On:</h5>
                  <h3>
                    {d.getHours()}:{d.getMinutes()},{"  "}
                    {d.getDate()} -{d.getMonth() + 1} -{d.getFullYear()},
                    {dayName}
                  </h3>
                  <h5 style={{ color: "green" }}>Delivery to: {user?.email}</h5>

                  <div>
                    <h5 style={{ color: "green" }}>Address:</h5>
                    <p>
                      B5-26,Sisauli
                      <br />
                      Uttar Pradesh
                    </p>
                  </div>
                </div>
                <div className="page-center mt-5">
                  <div className="payment__section">
                    <div className="payment__items">
                      {basket.map((item) => (
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          Image2={item.Image2}
                          price={item.price}
                          hide
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;

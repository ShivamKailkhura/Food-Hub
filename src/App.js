import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Page1/Header";
import Top from "./Page1/Top/top";

import Footer from "./Page1/Footer";
import Copyright from "./Page1/Copyright";
import Cart from "./CART/Cart";
import Gap from "./Page1/Gap";

import PageOne from "./Page1/PageOne";
import Burger from "./Associates/Burger/burger";
import Pizza from "./Associates/Pizza/pizza";
import Dosa from "./Associates/Dosa/dosa";
import MilkShake from "./Associates/MilkShake/milkshake";
import MangoShake from "./Associates/MangoShake/mangoshake";
import HotChocolate from "./Associates/HotChocolate/hotchocolate";
import Dinner from "./Associates/Dinner/dinner";

import Contact from "./Contact/contact";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import ScrollToTop from "./ScrollToTop";

import Login from "./Page1/Login/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KT9bfSFRtEBTLEqwtk03WuWnomEnN1y1v606A2VpsHe8Nlx4gHO8xEPlSPjB1cMjz9bWlL5Beh5bCAJSty3paHr00CS7rfdbU"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router className="site">
      <ScrollToTop />
      <Header />
      <Gap />
      <Top />
      <Routes>
        <Route exact path="/" element={<PageOne />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/burger" element={<Burger />} />
        <Route exact path="/pizza" element={<Pizza />} />
        <Route exact path="/dosa" element={<Dosa />} />
        <Route exact path="/dinner" element={<Dinner />} />
        <Route exact path="/hotchocolate" element={<HotChocolate />} />
        <Route exact path="/milkshake" element={<MilkShake />} />
        <Route exact path="/mangoshake" element={<MangoShake />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route exact path="*" element={<PageOne />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;

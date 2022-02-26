import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Items } from "./Items";
import Item from "./Item";

function pizza() {
  return (
    <div className="section pt-3 pb-3">
      <h2 className="text-center section-title pb-3">Our Pizza Range</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="product-grid">
              <div className="col-lg-12">
                <div className="page-center mt-5">
                  {Items.map((meals) => (
                    <Item key={meals.id} booke={meals} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pizza;

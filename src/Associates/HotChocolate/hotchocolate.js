import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Items } from "./Items";
import Item from "./Item";

function hotchocolate() {
  return (
    <div class="section pt-3 pb-3">
      <h2 class="text-center section-title pb-3">Hot Chocolates</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-grid">
              <div class="col-lg-12">
                <div class="page-center mt-5">
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

export default hotchocolate;

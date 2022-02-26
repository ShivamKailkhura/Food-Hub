import React from "react";
import { Items } from "./Items";
import Item from "./Item";
import "./style.css";
function Bookshelve() {
  return (
    <div id="main">
      <div className="section pt-4 pb-0" style={{ background: "#f7f7f7" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center mb-1 section-pretitle">Discover</div>
              <h2 className="text-center section-title pb-3">Our category</h2>
              <div className="organik-seperator center">
                <span className="sep-holder">
                  <span className="sep-line"></span>
                </span>
                <div className="sep-icon">
                  <i className="organik-flower"></i>
                </div>
                <span className="sep-holder">
                  <span className="sep-line"></span>
                </span>
              </div>
            </div>
          </div>
          <div id="forun" className="row">
            <div className="product-grid masonry-grid-post">
              <section>
                {Items.map((meals) => (
                  <Item key={meals.id} booke={meals} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookshelve;

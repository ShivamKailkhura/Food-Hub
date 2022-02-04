import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function dinner() {
  return (
    <div class="section pt-3 pb-3">
      <h2 class="text-center section-title pb-3">Dinner We Serve</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-grid">
              <div
                class="col-lg-4 col-md-4 col-xs-6 product-item text-center mb-3"
                data-product='{"name":"Chanaa Burger","base_pack":{"id":130,"product_id":38,"pack_id":2,"sku":"assorted-juices","discount":"30.00","length":"0.00","breadth":"0.00","height":"0.00","weight":0,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
                      src="https://i.pinimg.com/originals/b2/2b/32/b22b325ab3d7db9bce5ca7df4ba86c0b.jpg" alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="38">

																											<option value="130">  &nbsp; </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="38"
                    style={{
                      backgroundColor: "#06904d",
                      padding: "7px 0px 7px 0px",
                    }}
                  >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      style={{ color: "white" }}
                      data-original-title="Add to cart"
                    >
                      {" "}
                      <i
                        class="fa fa-shopping-bag"
                        aria-hidden="true"
                        style={{ paddingRight: "15px" }}
                      ></i>
                      Add To Cart
                    </a>
                  </div>

                  <div
                    class="not-in-stock d-none"
                    style={{
                      backgroundColor: "#06904d",
                      padding: "7px 0px 7px 0px",
                      color: "white",
                    }}
                  >
                    <span>Out of stock</span>
                  </div>

                  <a
                  // href="https://shop.storiafoods.com/assorted-juices"
                  // class="product-clicked"
                  >
                    <h2 class="title">Chanaa Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210.00</span>
                      </del>
                      <ins>
                        ₹<span class="pack-price">180</span>{" "}
                      </ins>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-4 col-xs-6 product-item text-center mb-3"
                data-product='{"name":"Chanaa Burger","base_pack":{"id":130,"product_id":38,"pack_id":2,"sku":"assorted-juices","discount":"30.00","length":"0.00","breadth":"0.00","height":"0.00","weight":0,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
                      src="https://i.pinimg.com/originals/b2/2b/32/b22b325ab3d7db9bce5ca7df4ba86c0b.jpg" alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="38">

																											<option value="130">  &nbsp; </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="38"
                    style={{
                      backgroundColor: "#06904d",
                      padding: "7px 0px 7px 0px",
                    }}
                  >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      style={{ color: "white" }}
                      data-original-title="Add to cart"
                    >
                      {" "}
                      <i
                        class="fa fa-shopping-bag"
                        aria-hidden="true"
                        style={{ paddingRight: "15px" }}
                      ></i>
                      Add To Cart
                    </a>
                  </div>

                  <div
                    class="not-in-stock d-none"
                    style={{
                      backgroundColor: "#06904d",
                      padding: "7px 0px 7px 0px",
                      color: "white",
                    }}
                  >
                    <span>Out of stock</span>
                  </div>

                  <a
                  // href="https://shop.storiafoods.com/assorted-juices"
                  // class="product-clicked"
                  >
                    <h2 class="title">Chanaa Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210.00</span>
                      </del>
                      <ins>
                        ₹<span class="pack-price">180</span>{" "}
                      </ins>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-4 col-xs-6 product-item text-center mb-3"
                data-product='{"name":"Chanaa Burger","base_pack":{"id":130,"product_id":38,"pack_id":2,"sku":"assorted-juices","discount":"30.00","length":"0.00","breadth":"0.00","height":"0.00","weight":0,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
                      src="https://i.pinimg.com/originals/b2/2b/32/b22b325ab3d7db9bce5ca7df4ba86c0b.jpg" alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="38">

																											<option value="130">  &nbsp; </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="38"
                    style={{
                      backgroundColor: "#06904d",
                      padding: "7px 0px 7px 0px",
                    }}
                  >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      style={{ color: "white" }}
                      data-original-title="Add to cart"
                    >
                      {" "}
                      <i
                        class="fa fa-shopping-bag"
                        aria-hidden="true"
                        style={{ paddingRight: "15px" }}
                      ></i>
                      Add To Cart
                    </a>
                  </div>

                  <div
                    class="not-in-stock d-none"
                    style={{
                      backgroundColor: "#06904d",
                      padding: "7px 0px 7px 0px",
                      color: "white",
                    }}
                  >
                    <span>Out of stock</span>
                  </div>

                  <a
                  // href="https://shop.storiafoods.com/assorted-juices"
                  // class="product-clicked"
                  >
                    <h2 class="title">Chanaa Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210.00</span>
                      </del>
                      <ins>
                        ₹<span class="pack-price">180</span>{" "}
                      </ins>
                    </span>
                  </a>
                </div>
              </div>
             
              <div class="col-lg-12">
                <div class="page-center mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dinner;

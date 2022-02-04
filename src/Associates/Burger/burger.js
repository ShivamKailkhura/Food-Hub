import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function burger() {
  return (
    <div class="section pt-3 pb-3">
      <h2 class="text-center section-title pb-3">Our Burger Range</h2>
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
                      src="https://crushmag-online.com/wp-content/uploads/2019/09/CHANA-MASALA-Quorn-4x6.jpg"
                      alt=""
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
                data-product='{"name":"100% Juice- Pineapple","base_pack":{"id":50,"product_id":13,"pack_id":2,"sku":"SJP01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
					  src="https://treyschowdown.com/wp-content/uploads/2021/05/The-50-Best-Burgers-Treys-Chow-Down-.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="13">

																											<option value="50"> Pack of &nbsp;6 </option>
																											<option value="109"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="13"
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
                    // href="https://shop.storiafoods.com/100-juice-pineapple"
                    // class="product-clicked"
                  >
                    <h2 class="title">Boom Masala Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"100% Juice- Pineapple","base_pack":{"id":50,"product_id":13,"pack_id":2,"sku":"SJP01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
					  src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="13">

																											<option value="50"> Pack of &nbsp;6 </option>
																											<option value="109"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="13"
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
                    // href="https://shop.storiafoods.com/100-juice-pineapple"
                    // class="product-clicked"
                  >
                    <h2 class="title">Big Crunch Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"100% Juice- Guava Chilli","base_pack":{"id":54,"product_id":14,"pack_id":2,"sku":"SJG01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
					  src="https://thequorum.club/wp-content/uploads/2021/06/Chicken-Burgers-4.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="14">

																											<option value="54"> Pack of &nbsp;6 </option>
																											<option value="111"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="14"
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
                    // href="https://shop.storiafoods.com/100-juice-guava-chilli"
                    // class="product-clicked"
                  >
                    <h2 class="title">Fozila Burger from Food Hub</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"100% Juice- Green Mango","base_pack":{"id":58,"product_id":15,"pack_id":2,"sku":"SJGR01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
                      src="https://i.pinimg.com/564x/fa/db/85/fadb8534ca8ba987f59b4d89af095683.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="15">

																											<option value="58"> Pack of &nbsp;6 </option>
																											<option value="112"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="15"
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
                    // href="https://shop.storiafoods.com/100-juice-green-mango"
                    // class="product-clicked"
                  >
                    <h2 class="title">Mexican Veg Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"100% Juice- Mosambi","base_pack":{"id":66,"product_id":17,"pack_id":2,"sku":"SJM01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
                      src="https://i.pinimg.com/564x/6a/b4/99/6ab499c4306b62cc9ec446a73cf61d8f.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="17">

																											<option value="66"> Pack of &nbsp;6 </option>
																											<option value="113"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="17"
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
                    // href="https://shop.storiafoods.com/100-juice-mosambi"
                    // class="product-clicked"
                  >
                    <h2 class="title">Paneer Masaala Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"100% Juice- Nimbu Pani","base_pack":{"id":70,"product_id":18,"pack_id":2,"sku":"SJN01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
                      src="https://easychickenrecipes.com/wp-content/uploads/2019/06/best-chicken-burgers-recipe-2-of-7.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="18">

																											<option value="70"> Pack of &nbsp;6 </option>
																											<option value="114"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="18"
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
                    // href="https://shop.storiafoods.com/100-juice-nimbu-pani"
                    // class="product-clicked"
                  >
                    <h2 class="title">Aloo Swag Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"100% Juice- Pomegranate","base_pack":{"id":62,"product_id":16,"pack_id":2,"sku":"SJPO01_180ml","discount":"30.00","length":"15.80","breadth":"9.30","height":"15.80","weight":1200,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
					  src="https://easychickenrecipes.com/wp-content/uploads/2019/06/featured-fried-chicken-sandwich-recipe-reshoot.jpg"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="16">

																											<option value="62"> Pack of &nbsp;6 </option>
																											<option value="125"> Pack of 30 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="16"
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
                    // href="https://shop.storiafoods.com/100-juice-pomegranate"
                    // class="product-clicked"
                  >
                    <h2 class="title">Bade Bhaiya Burger</h2>
                    <span class="price">
                      <del>
                        ₹<span class="pack-discount-price">210</span>
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
                data-product='{"name":"Assorted Diwali Gift Pack Pack of 100%  Juices","base_pack":{"id":128,"product_id":36,"pack_id":2,"sku":"DGP-FESTIVE","discount":"0.00","length":"0.00","breadth":"0.00","height":"0.00","weight":0,"minimum_stock_warning":0,"details":{"id":2,"title":"Pack of \u00a06","quantity":6},"inventory":[]}}'
                style={{ height: "518px" }}
              >
                <div class="product-thumb test-div">
                  <a class="test-div-inner product-clicked" href="#">
                    <div class="badges">
                      {/* <!-- <span class="hot">Hot</span>
													<span class="onsale">Sale!</span> --> */}
                    </div>

                    <img
					  src="https://images.mktw.net/im-398488?width=1280&size=1"
                      alt=""
                      class="product_list_image test-image"
                      height="1000"
                      width="1000"
                    />
                  </a>
                </div>
                <div class="product-info">
                  {/* <form class="commerce-ordering">
												<select name="packs" class="pack-select" data-product-id="36">

																											<option value="128"> Pack of &nbsp;6 </option>
													
												</select>
											</form> */}
                  <div
                    class="add-to-cart add-to-cart-btn in-stock  "
                    data-page="listing"
                    data-product-id="36"
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
                    // href="https://shop.storiafoods.com/Festive-pack-juices"
                    // class="product-clicked"
                  >
                    <h2 class="title">Chick In Burger</h2>
                    <span class="price">
                      <ins>
                        ₹<span class="pack-price">250</span>{" "}
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

export default burger;

import React from "react";
import { useStateValue } from "../../StateProvider";

const Item = ({ booke }) => {
  const { id, title, Image2, price } = booke;

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        Image2: Image2,
        price: Number(price),
      },
    });
  };

  return (
    <div className="col-lg-4 col-md-4 col-xs-6 product-item text-center mb-3">
      <div className="product-thumb test-div">
        <a className="test-div-inner product-clicked" href="#">
          <div className="badges"></div>

          <img
            src={Image2}
            alt=""
            className="product_list_image test-image"
            height="1000"
            width="1000"
          />
        </a>
      </div>
      <div className="product-info">
        <button
          onClick={addToBasket}
          className="add-to-cart add-to-cart-btn in-stock bag-btn"
          data-page="listing"
          data-id={id}
          style={{
            backgroundColor: "#06904d",
            padding: "10px 110px 10px 110px",
          }}
        >
          {" "}
          Add To Cart
        </button>

        <a>
          <h2 className="title">{title}</h2>
          <span className="price">
            <del>
              ₹<span className="pack-discount-price">210.00</span>
            </del>
            <ins>
              ₹<span className="pack-price">{price}</span>{" "}
            </ins>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Item;

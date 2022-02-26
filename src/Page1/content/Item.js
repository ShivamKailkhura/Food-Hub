import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Item = ({ booke }) => {
  const { Image1, Image2, Image3, name, id } = booke;
  return (
    <div className="col-md-4 col-lg-4 col-xs-6 product-item masonry-item text-center">
      <div className="product-thumb test-div">
        <Link className="test-div-inner" to={Image1}>
          <img
            src={Image2}
            alt=""
            className="test-image"
            height="1000"
            width="1000"
          />
        </Link>
      </div>
      <div className="product-info">
        <a href={Image3}>
          <h2 className="title" data-order={id}>
            {name}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Item;

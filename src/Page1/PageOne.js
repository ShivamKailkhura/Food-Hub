import React from "react";

import Modal from "./Modal/Modal";
import Bookshelve from "./content/Bookshelve";
import Carousel from "./carousel";
import Clients from "./Clients";

function PageOne() {
  return (
    <div className="site">
      <Modal />
      <Carousel />
      <Bookshelve />
      <Clients />
    </div>
  );
}

export default PageOne;

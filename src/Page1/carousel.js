import React from "react";
function carousel() {
  return (
    <div id="gallery" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <img
                class="img-fluid"
                style={{ bottom: "600px" }}
                src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/wow-99.2a1a391d12147c0058427eb292c53ae1.1.jpg"
                alt="Image 1"
              />
            </div>

            <div class="col">
              <img
                class="img-fluid"
                style={{ bottom: "600px" }}
                src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/my-box-pasta.889960e020d399bc35ece9b6893d128c.1.jpg"
                alt="Image 2"
              />
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <img
                class="img-fluid"
                src="https://5.imimg.com/data5/SELLER/Default/2021/3/PD/TJ/UI/124409948/frozen-momos-500x500.JPG"
                alt="Image 6"
              />
            </div>

            <div class="col">
              <img
                class="img-fluid"
                src="https://www.indiablooms.com/life_pic/2017/3-1513150368.jpg"
                alt="Image 7"
              />
            </div>

            <div class="col">
              <img
                class="img-fluid"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ptyhgqzmgu2npqlczm79"
                alt="Image 8"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#gallery"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a
        class="carousel-control-next"
        href="#gallery"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default carousel;

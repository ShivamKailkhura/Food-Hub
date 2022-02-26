import React from "react";

function Clients() {
  return (
    <div className="section section-bg-7 section-cover pt-4 pb-8">
      <div className="col-sm-12">
        <h2 className="text-center section-title pb-4">Clients We Served 👨🏻‍🍳</h2>
        <div className="organik-seperator center">
          <span className="sep-holder">
            <span className="sep-line"></span>
          </span>

          <span className="sep-holder">
            <span className="sep-line"></span>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div
              className="testimonial-carousel organik-testimonial style-3 owl-carousel "
              data-auto-play="true"
              data-desktop="3"
              data-laptop="3"
              data-tablet="2"
              data-mobile="1"
              style={{ opacity: "1", display: "block" }}
            >
              <div className="owl-wrapper-o'uter">
                <div
                  className="owl-wrapper"
                  style={{
                    width: "3156px",
                    left: "0px",
                    display: "block",
                    transition: "all 800ms ease 0s",
                    transform: "translate3d(-100px, 0px, 0px)",
                  }}
                >
                  <div className="owl-item" style={{ width: "263px" }}>
                    <div className="testi-item">
                      <div className="text">
                        I take pride in calling myself a foodie and FOOD HUB
                        Street Style Halaal Burger complement almost all my food
                        styles. They are refreshingly good and I always carry
                        one of them.
                      </div>
                      <div className="info">
                        <div className="photo">
                          <img
                            src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
                            alt=""
                          />
                        </div>
                        <div className="author">
                          <span className="name">Wahab Al Khumeini</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "263px" }}>
                    <div className="testi-item">
                      <div className="text">
                        I have tried all flavours of FOOD HUB Street Dosa and
                        they have the most authentic taste. Guava Chilli is my
                        favourite. You can try them and you’ll like them too.
                      </div>
                      <div className="info">
                        <div className="photo">
                          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" />{" "}
                        </div>
                        <div className="author">
                          <span className="name">Nitish Chaubey</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "263px" }}>
                    <div className="testi-item">
                      <div className="text">
                        Love this Milk shake. It is healthy, natural and so
                        delicious. Perfect as an evening snack.
                      </div>
                      <div className="info">
                        <div className="photo">
                          <img
                            src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
                            alt=""
                          />
                        </div>
                        <div className="author">
                          <span className="name">Jaikrit Rana</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "263px" }}>
                    <div className="testi-item">
                      <div className="text">
                        Best chocolate shake till now. It is thick, creamy and
                        healthy too.
                      </div>
                      <div className="info">
                        <div className="photo">
                          <img
                            src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
                            alt=""
                          />
                        </div>
                        <div className="author">
                          <span className="name">Sanjay Pundir</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "263px" }}>
                    <div className="testi-item">
                      <div className="text">
                        FOOD HUB Street Style drinks have been a savior this
                        lockdown. The taste takes me on a nostalgic ride, back
                        to the days when I use to devour on street food.
                      </div>
                      <div className="info">
                        <div className="photo">
                          <img
                            src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
                            alt=""
                          />
                        </div>
                        <div className="author">
                          <span className="name">Harish Baweja</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-controls clickable">
                <div className="owl-pagination">
                  <div className="owl-page">
                    <span className=""></span>
                  </div>
                  <div className="owl-page active">
                    <span className=""></span>
                  </div>
                  <div className="owl-page">
                    <span className=""></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

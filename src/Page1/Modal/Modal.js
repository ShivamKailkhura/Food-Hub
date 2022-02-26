import { React, useState } from "react";
import "./Modal.css";
function Modal() {
  const Close = () => {
    document
      .getElementById("pincode-modal")
      .setAttribute("style", "display:hidden");
  };

  const [modal, setModal] = useState(true);

  return (
    <div
      id="pincode-modal"
      className="container modal in"
      style={{ display: "block", paddingRight: "17px" }}
    >
      {/* <!-- Modal content --> */}
      <form action="localhost:3000" method="POST">
        <input
          type="hidden"
          name="_token"
          value="7qetYXVFnK7VjXswIEsigsgLUCAmCqGcnLufF29t"
        />{" "}
        <div className="modal-content">
          <span
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            id="pincode_declined"
            h=""
            onClick={Close}
          >
            ×
          </span>
          <div className="text-center">
            <div className="pb-2 pt-2">
              <img src="https://shop.storiafoods.com/public/front/images/location.jpg" />
            </div>
            <h4 className="pb-2">Please enter your pincode to proceed</h4>
            <div className="pb-2">
              <i className="fa fa-map-marker markermin" aria-hidden="true"></i>
              <input
                name="pincode"
                maxLength="6"
                className="input mainfull"
                type="search"
                placeholder="Please Enter Pincode"
                autoComplete="off"
                onChange={(e) => setModal(false)}
              />
              <button className="btn btn-success" onClick={Close}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;

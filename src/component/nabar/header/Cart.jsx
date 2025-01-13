const Cart = ({ isOpen, togglePopup }) => {
  const confirmOrderopen = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/phonepay/payment`,
        {
          name: "rinku",
          number: "7008698408",
          amount: 20,
        }
      );
     // console.log(response);
      if (response.status == 200) {
        window.location.href = response.data;
      }
    } catch (error) {
     // console.error("Error processing payment:", error);
    }
  };

  return (
    <div className="popup popup_open cart_port">
      <div className="popup-content">
        <div className="popup-content_dttg">
          <p className="popup_close" onClick={togglePopup}>
            X
          </p>
          <h2>Your Cart</h2>
          {/* when cart product show   */}
          <div className="productaddincart">
            <div class="signin_redeem please_signin">
              <div class="signin_text">
                Sign in to Redeem boAt reward points on this order
              </div>
              <div class="signin_btn login-popup-trigger">Sign In Now</div>
            </div>
            <div className="productincart">
              <div className="imgProd">
                <img
                  src={`https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Wavebeatcall3.2_700x.png?v=1674561167`}
                />
              </div>
              <div className="product_int">
                <div className="prodt">
                  <p className="productNme">Wave Beat Call</p>
                  <p className="productprc">₹1,499</p>
                </div>
                <div className="productcolorndproductints">
                  <p className="productColor">Red</p>
                  <p className="productaddints">
                    {/* <span>-</span>
                        <span>01</span>
                        <span>+</span> */}
                  </p>
                </div>
              </div>
              <div className="totelp">
                <p className="totle_price">
                  ₹ 1,099
                  <span>Inclusive of all taxes</span>
                </p>
                <p className="ConfirmOrder" onClick={confirmOrderopen}>
                  Confirm Order
                </p>
              </div>
            </div>

            {/* <div className="productDataInput header_emi_set">
                  <p className="emiAddres">
                    <b>For EMI purchase, please enter your delivery address</b>
                  </p>
                  <div className="addressInput">
                    <div className="relative ">
                      <input
                        id="addressLineOne"
                        type="text"
                        className="peer"
                        placeholder=" Flat / House no / Building / Company name"
                        autocomplete="off"
                        pattern=""
                        inputmode="text"
                        value=" "
                      />
                    </div>
                    <div className="relative ">
                      <input
                        id="addressLineTwo"
                        type="text"
                        className="peer"
                        placeholder=" Area / Colony / Street / Village"
                        autocomplete="off"
                        pattern=""
                        inputmode="text"
                        value=""
                      />
                    </div>
                    <div className="relative ">
                      <input
                        id="landmark"
                        type="text"
                        className="peer"
                        placeholder=" Landmark"
                        autocomplete="off"
                        pattern=""
                        inputmode="text"
                        value=""
                      />
                    </div>
                    <div className="pincodendcity">
                      <div className="relative ">
                        <input
                          id="pinCode"
                          type="text"
                          className="peer"
                          placeholder=" Pin Code"
                          autocomplete="off"
                          pattern=""
                          inputmode="text"
                          value=""
                        />
                      </div>
                      <div className="relative ">
                        <input
                          id="city"
                          type="text"
                          className="peer"
                          placeholder=" City"
                          autocomplete="off"
                          pattern=""
                          inputmode="text"
                          value=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="addNewAddresDiv">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        1 address{" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        2 address{" "}
                      </label>
                    </div>
                  </div>
                  <div className="pay_ment_get_but">
                    <button className=" bg-secondaryText">
                      Deliver to this address
                    </button>
                    <button className="addNewAddress">
                      {" "}
                      + Add New Address
                    </button>
                  </div>
                </div> */}
          </div>
          // {/* emty cart then */}
          //{" "}
          {/* <div className="card_bagg_dv">
        //       <div className="add_to_care_dv">
        //         <img src={CsrtBaf} />
        //         <p>Your cart is feeling lonely</p>
        //         <a>Start shopping</a>
        //       </div>
        //     </div>             */}
          //{" "}
        </div>
        //{" "}
      </div>
      //{" "}
    </div>
  );
};

export default Cart;

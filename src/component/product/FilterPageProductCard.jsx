// i not work thi spage 12/22/2023
import ItemImg from "../../assets/images/homeSlider/brande/brande1.webp";
import Star from "../../assets/images/homeSlider/svgviewer.png";
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const FilterPageProductCard = (props) => {
  let image = "";
  if (props.ProductDetails.imageURL) {
    image = JSON.parse(props.ProductDetails.imageURL);
  }

  function index() {
    if (image.length <= 1) {
      return 0;
    } else if (image.length == 4) {
      return Math.floor(Math.random() * 3) + 1;
    } else {
      return 1;
    }
  }

  //add to cart popup product list
  const [popupProduct, setSopupProduct] = useState(false);

  const SopupProductCt = () => {
    setSopupProduct(!popupProduct);
  };

  // emi popup
  const [emilist, setEmilist] = useState(false);

  const emilistpopup = () => {
    setEmilist(!emilist);
  };

  return (
    <>
      {props.ProductDetails && (
        <div
          className="cord_product_list product_list_comts"
          key={props.ProductDetails.id}
        >
          <div className="cardBox">
            <div className="cardImg">
              <NavLink to={`/productdetails/${props.ProductDetails.id}`}>
                <img src={image[index()].imageUrl[0]} />
              </NavLink>
              <span className="cardEmi">
                ₹{" "}
                <span>
                  {Math.floor(
                    (props.ProductDetails.dp -
                      props.ProductDetails.downPayment) /
                      props.ProductDetails.interestFreeMonth
                  )}
                </span>
                /mon
              </span>
            </div>


            <div className="cardText">
            <NavLink to={`/productdetails/${props.ProductDetails.id}`}>
              <div className="cartProductRight">
                <p className="cardItemname"> {props.ProductDetails.name} </p>
                <p className="cardPrice">
                  <span className="reseantPrice">
                    ₹ {Number(props.ProductDetails.dp).toLocaleString()}
                  </span>{" "}
                  <span className="cardLessPrise">
                    {" "}
                    {Number(props.ProductDetails.mrp).toLocaleString()}
                  </span>
                  <span className="priceOf">
                    {Math.floor(
                      ((props.ProductDetails.mrp - props.ProductDetails.dp) /
                        props.ProductDetails.mrp) *
                        100
                    )}
                    % off
                  </span>{" "}
                </p>
                <p>
                  Brand :<b> {props.ProductDetails.brand}</b>
                </p>
                <p className="ratingStars">
                  {/* <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span> */}
                  {/* <span className="line_card"> | </span> */}
                  {/* <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span> */}
                </p>
                <p class="des_item">
                  {" "}
                  {props.ProductDetails.shortDescription}
                  <sapn class="des_item_dot">......</sapn>
                </p>
              </div>
              </NavLink>


              <div className="addToCartDiv">
                {/* <button className="addToCart" onClick={SopupProductCt}>
                  <i class="fa fa-shopping-bag"></i> Add to cart
                </button> */}

                {/* popup open  */}
                {/* <button className="addToCart" onClick={emilistpopup}> */}
                <button className="addToCart" >
                  {" "}
                  <NavLink to={`/productdetails/${props.ProductDetails.id}`}>Buy on EMI</NavLink> 
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {emilist && (
        <div className=" Sort_by_Featured singleProductOPopup emilistpopup">
          <div className="mane">
            <div className="sort_by_fliter ">
              <div className="cord_product_list product_list_comt ">
                <span onClick={emilistpopup} className="close-button">
                  X
                </span>
                <div className="cardBox">
                  <div className="cardImg">
                    <img src={blueTick} />
                    <span className="cardEmi">
                      ₹ <span>453</span>/mon
                    </span>
                  </div>
                  <div className="cardText">
                    <div className="cartProductRight">
                      <p className="cardItemname"> Airdopes 131 </p>
                      <p className="cardPrice">
                        <span className="reseantPrice">₹899</span>
                        <span className="cardLessPrise"> ₹2,990 </span>
                        <span className="priceOf">70% off</span>
                      </p>
                      <p>
                        Brand :<b> Apple</b>
                      </p>
                      <p className="ratingStars">
                        {/* <span className="imgAdRt">
               <img src={Star} />
               4.8
             </span> */}
                        {/* <span className="line_card"> | </span> */}
                        {/* <span className="ratingAdq">
               <span className="ratingComt">1336</span>{" "}
               <img className="blueTick" src={blueTick} />
             </span> */}
                      </p>
                      <p class="des_item">
                        {" "}
                        Wireless Bluetooth Neckband with Up To 20 Hours
                        Playback, BEAST™ Mode, ENx™ Technology{" "}
                        <sapn class="des_item_dot">......</sapn>
                      </p>
                      <p className="single_item_color_box">
                        <span className="single_item_color_box_ct single_item_color_g active">
                          g
                        </span>
                        <span className="single_item_color_box_ct single_item_color_r">
                          r
                        </span>
                        <span className="single_item_color_box_ct single_item_color_w">
                          w
                        </span>
                        <span className="single_item_color_box_ct single_item_color_b">
                          b
                        </span>
                        <span className="single_item_color_box_ct single_item_color_bl">
                          bl
                        </span>
                      </p>
                    </div>

                    <div className="addToCartDiv">
                      <button className="addToCart"> Buy on EMI</button>
                    </div>
                  </div>
                </div>

                <div className="ChooseADownpayment ">
                  <h4 className="Downpayment_item">Choose a Downpayment</h4>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        ₹49
                      </button>
                    </div>
                  </nav>
                  <h4 className="single_item_emi_choose">Choose EMI Tenure</h4>
                  <div
                    className="tab-content single_item_emi"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <p className="single_item_emi">
                        <span className="single_item_month">
                          <b>₹417</b> X 3 months 
                        </span>
                        <span className="single_item_buy">
                          Buy on 3 months EMI
                        </span>
                      </p>
                      <p className="single_item_emi">
                        <span className="single_item_month">
                          <b>₹208</b> X 6 months
                        </span>
                        <span className="single_item_buy">
                          Buy on 6 months EMI
                        </span>
                      </p>
                      <p className="single_item_emi">
                        <span className="single_item_month">
                          <b>₹139</b> X 9 months
                        </span>
                        <span className="single_item_buy">
                          Buy on 9 months EMI
                        </span>
                      </p>
                      <p className="single_item_emi">
                        <span className="single_item_month">
                          <b>₹104</b> X 12 months
                        </span>
                        <span className="single_item_buy">
                          Buy on 12 months EMI
                        </span>
                      </p>
                      <p className="single_item_emi">
                        <span className="single_item_month">
                          <b>₹69</b> X 18 months
                        </span>
                        <span className="single_item_buy">
                          Buy on 18 months EMI
                        </span>
                      </p>
                      <p className="single_item_emi">
                        <span className="single_item_month">
                          <b>₹61</b> X 24 months
                        </span>
                        <span className="single_item_buy">
                          Buy on 24 months EMI
                        </span>
                      </p>
                    </div>
                  </div>
                  <h4 className="single_shipping_detaila">Shipping Details</h4>
                  <p className="single_item_date_">
                    <span>Free delivery | </span>Dispatch in less than 48 hours
                    and delivery in 3-7 working days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
    
.emilistpopup .sort_by_fliter {
    width: 100%;
}
.emilistpopup .cord_product_list {
  flex-direction: column;
  overflow-x: scroll;
  height: 560px !important;
}
.emilistpopup .ChooseADownpayment {
  width: 100%;
  margin-top: 15px;
}
    
    `}
      </style>

      {popupProduct && (
        <div className=" Sort_by_Featured singleProductOPopup list_page_popup">
          <div className="mane">
            <div className="sort_by_fliter ">
              <div className="cord_product_list product_list_comt ">
                <span onClick={SopupProductCt} className="close-button">
                  X
                </span>
                <div className="cardBox">
                  <div className="cardImg">
                    <img src={blueTick} />
                    <span className="cardEmi">
                      ₹ <span>453</span>/mon
                    </span>
                  </div>
                  <div className="cardText">
                    <div className="cartProductRight">
                      <p className="cardItemname"> Airdopes 131 </p>
                      <p className="cardPrice">
                        <span className="reseantPrice">₹899</span>
                        <span className="cardLessPrise"> ₹2,990 </span>
                        <span className="priceOf">70% off</span>
                      </p>
                      <p>
                        Brand :<b> Apple</b>
                      </p>
                      <p className="ratingStars">
                        {/* <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span> */}
                        {/* <span className="line_card"> | </span> */}
                        {/* <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span> */}
                      </p>
                      <p class="des_item">
                        {" "}
                        Wireless Bluetooth Neckband with Up To 20 Hours
                        Playback, BEAST™ Mode, ENx™ Technology{" "}
                        <sapn class="des_item_dot">......</sapn>
                      </p>
                      <p className="single_item_color_box">
                        <span className="single_item_color_box_ct single_item_color_g active">
                          g
                        </span>
                        <span className="single_item_color_box_ct single_item_color_r">
                          r
                        </span>
                        <span className="single_item_color_box_ct single_item_color_w">
                          w
                        </span>
                        <span className="single_item_color_box_ct single_item_color_b">
                          b
                        </span>
                        <span className="single_item_color_box_ct single_item_color_bl">
                          bl
                        </span>
                      </p>
                    </div>
                    <div className="addToCartDiv">
                      <button className="addToCart">
                        <i class="fa fa-shopping-bag"></i> Add to cart
                      </button>
                      <button className="addToCart"> Buy on EMI</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPageProductCard;

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColorid } from "../../features/productsdetails/ProductDetailsslice";
import UserEmiselectPage from "./UserEmiselectPage";
import { loginPopup } from "../../features/authentication/authSlice";
import { setSelectedProductd } from "../../features/productsdetails/SelectedProductSlice";
import ConfirmPage from "./ConfirmPage";
import { setOption } from "../../features/productsdetails/SelectedProductSlice";
import { Link } from "react-router-dom";
import { login } from "../../features/authentication/authSlice";
const ProductDesc = () => {
  let dispatche = useDispatch();
  const selectColour = (id) => {
    dispatche(getColorid(id));
  };
  let ProductDetails = useSelector((state) => state.productDetailsReduser);
  let spacitionData = useSelector(
    (state) => state.productDetailsReduser.specification
  );

  let imageData = useSelector(
    (state) => state.productDetailsReduser.imageDetails
  );
  let colorId = useSelector(
    (state) => state.productDetailsReduser.selectColorid
  );

  let userTokenCheck = useSelector((state) => state.authReducer.loggedInStatus);
  const [userToken, setUserToken] = useState(null);
  let emiPopupreduser = useSelector((state) => state.authReducer.emiPopup);
  var userAvailableLimit;

 // console.log(userTokenCheck);

  // const checkUserAvailableLimit=()=>{

  // }

  const [availableLimit, setAvailableLimit] = useState(0);

  //  if(userTokenCheck){
 // console.log(userTokenCheck);
  userAvailableLimit = useSelector((state) => state.authReducer.userData);
  if (userAvailableLimit) {
   // console.log(userAvailableLimit.availableLimit);
  }

 // console.log(userAvailableLimit);

  // ----------------Checking if user status avalable then we set tha avalable limit--------------

 // console.log(userTokenCheck);

  let setSelectedAddress = useSelector(
    (state) => state.selectedProductReduser.SelectedAddress
  );
  useEffect(() => {
   // console.log(ProductDetails.productDetails);
   // console.log(ProductDetails.imageDetails);
    //// console.log(`avalable limit of user ${availableLimit}`);
    //// console.log(ProductDetails.specification);
   // console.log(imageData);
  }, []);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    if (ProductDetails.productDetails) {
      let i = 0;
      let n = ProductDetails.productDetails.totalAvailableMonthForEmi;

      let countMonth = [];
      while (i < n) {
        if (i < 12) {
          i = i + 3;
        } else if (i >= 12 && i < 24) {
          i = i + 6;
        } else if (i >= 24) {
          i = i + 12;
        }
        countMonth.push(i);
      }

      setMonth(countMonth);
    }
  }, [ProductDetails.productDetails]);

  // emi show product

  const [emipopup, setEmipopup] = useState(false);

  // useEffect(()=>{
  //   popupEmicot()
  // },[setEmipopup])

  //addes cardboxtogule
  const [addresCardboxPopop, setaddresCardboxPopop] = useState(2);

  const addresCardboxPopopTogle = () => {
    setaddresCardboxPopop(!addresCardboxPopop);
   // console.log(addresCardboxPopop);
  };
  // -----------emi Onclick Logic ---------------
  const popupEmicot = (month, price, downpayment, dp, intreset) => {
    // if(emiPopupreduser==true){
    //  // console.log("emi show popup");

    //   setEmipopup(!emipopup);
    //  // console.log(` iff${emipopup}`);
    //  // console.log(` iff${emiPopupreduser}`);
    // }
    setEmipopup(!emipopup);
    dispatche(setOption(1));

    let obj = {
      month: month,
      price: Math.round(price),
      downpayment: downpayment,
      dp: dp,
      intreset: intreset,
    };
    dispatche(setSelectedProductd(obj));
    if (userTokenCheck) {
      // setEmipopup(true);

     // console.log(obj);
     // console.log(emipopup);
    } else {
      dispatche(loginPopup(true));
    }

    // setEmipopup(!emipopup);
  };

  // emi show product emi selecter

  const [emipopupPo, setEmipopupPo] = useState(false);

  const popupEmiCort = () => {
    // addresCardboxPopopTogle()
    setEmipopupPo(!emipopupPo);
  };

  // oopssPopup

  const [oopssPopup, setOopssPopup] = useState(false);
  const oopssPopupOPen = () => {
    setOopssPopup(!oopssPopup);
  };

  // ConfirmOrder

  const [confirmOrder, setConfirmOrder] = useState(false);
  const confirmOrderopen = () => {
    setConfirmOrder(!confirmOrder);
  };

  // useEffect(() => {
  //   if(userAvailableLimit){

  //     setAvailableLimit(userAvailableLimit);
  //   }

  //     }, [userTokenCheck, userAvailableLimit]);

  return (
    ProductDetails.productDetails && (
      <>
        <div className="productDec">
          <h2 className="Product_title_single">
            {ProductDetails.productDetails.name }
            {ProductDetails.productDetails.varient&&` (${ProductDetails.productDetails.varient})`} 

            

          </h2>
          <p className="product_description">
            {ProductDetails.productDetails.shortDescription}
          </p>

          <p className="single_item_desquent">
            <span>
              {" "}
              {Math.floor(
                ((ProductDetails.productDetails.mrp -
                  ProductDetails.productDetails.dp) /
                  ProductDetails.productDetails.mrp) *
                  100
              )}
            </span>
            % Off
          </p>
          <p className="single_item_price">
            ₹{Number(ProductDetails.productDetails.dp).toLocaleString()}
            <span>
              ₹ {Number(ProductDetails.productDetails.mrp).toLocaleString()}{" "}
            </span>
          </p>
          <p className="brand_name">
            Brand name : <b> {ProductDetails.productDetails.brand} </b>
          </p>

          <p className="single_item_color_box">
            {imageData &&
              imageData.map((item, i) => (
                <span
                  key={i}
                  onClick={() => selectColour(i)}
                  className={
                    i == colorId
                      ? "single_item_color_box_ct single_item_color_g active"
                      : "single_item_color_box_ct single_item_color_g"
                  }
                  style={{ background: `${item.colorCode}` }}
                >
                  {/* {i==colorId?// console.log(imageData[colorId].color):<></>} */}
                </span>
              ))}
            {/* <span className="single_item_color_box_ct single_item_color_r">
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
            </span> */}
          </p>
          <p className="single_item_color">
            Choose your colour :{" "}
            {colorId >= 0 && (
              <span>
                <b>{imageData[colorId].color}</b>
              </span>
            )}
          </p>
{/* varoant */}
          {ProductDetails.productDetails.variant && (
            <>
              <select
                className="form-select Variant_single_item"
                aria-label="Default select example"
              >
                <option selected>Variant</option>
                <option value="1">128 GB, Green, 5000 mAh Ram4</option>
                <option value="2">128 GB, Green, 5000 mAh Ram6</option>
                <option value="3">128 GB, Green, 5000 mAh Ram10</option>
              </select>
            </>
          )}

          {/* <button className="AddToCart"> */}
            {/* <i className="fa fa-shopping-bag"></i> Add to cart */}
            {/* <p className="single_item_price">
              ₹{Number(ProductDetails.productDetails.dp).toLocaleString()}
              <span>
                ₹ {Number(ProductDetails.productDetails.mrp).toLocaleString()}{" "}
              </span>
            </p> */}
            {/* <span>
              <p className="single_item_desquent">
                <span>
                  {" "}
                  {Math.floor(
                    ((ProductDetails.productDetails.mrp -
                      ProductDetails.productDetails.dp) /
                      ProductDetails.productDetails.mrp) *
                    100
                  )}
                </span>
            % Off
          </p>
          </span> */}
          {/* </button> */}

          {/* limeat  We can approve EMI*/}

          {/* {oopssPopup && (
            <div className="oopssPopup">
              <span onClick={oopssPopupOPen} className="close-button">
                X
              </span>
              <p className="oops_p">oops!</p>
              <p className="weCanApprove_p">
                We can approve EMI purchases of up to ₹ 1,368 for you on
                Snapmint
              </p>
              <button className="ConfirmOrder" onClick={oopssPopupOPen}>
                Shop under ₹ 1,368
              </button>
            </div>
          )} */}

          {/* ConfirmOrder  */}
          {/* <button className="ConfirmOrder" onClick={confirmOrderopen}>
            Confirm Order
          </button> */}
          {/* <ConfirmPage
          confirmOrder={confirmOrder}
          confirmOrderopen={confirmOrderopen}
          setSelectedAddress={setSelectedAddress}
        /> */}

          {userAvailableLimit &&
          ProductDetails.productDetails.dp >
            userAvailableLimit.availableLimit ? (
            <div className="weCanApproveshopUnder">
              <p className="weCanApprove ">
                We can approve EMI purchases of up to ₹
                {Number(userAvailableLimit.availableLimit).toLocaleString()} for
                you on EGMI
              </p>
              <Link to={"/"}>
                <button className="shopUnder">
                  Shop under ₹
                  {Number(userAvailableLimit.availableLimit).toLocaleString()}
                </button>
              </Link>
            </div>
          ) : (
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
                    ₹
                    {Number(
                      ProductDetails.productDetails.downPayment
                    ).toLocaleString()}
                  </button>

                  {/* <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">₹99</button> */}

                  {/*  <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">₹199</button> */}
                </div>
              </nav>
              <h4 className="single_item_emi_choose">Choose EMI Tenure</h4>
              <div className="tab-content single_item_emi" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  {/* //----------------------------->Count EMI Logic <---------------------------- */}
                  {ProductDetails.productDetails &&
                    month.map((item, i) => {
                      let price;
                      let intreset = 0;

                      if (
                        item <= ProductDetails.productDetails.interestFreeMonth
                      ) {
                        price =
                          (ProductDetails.productDetails.dp -
                            ProductDetails.productDetails.downPayment) /
                          item;
                      } else if (
                        item > ProductDetails.productDetails.interestFreeMonth
                      ) {
                        if (item === 6) {
                          intreset = 10;
                          price =
                            (ProductDetails.productDetails.dp -
                              ProductDetails.productDetails.downPayment +
                              (10 / 100) *
                                (ProductDetails.productDetails.dp -
                                  ProductDetails.productDetails.downPayment)) /
                            item;
                        } else if (item === 9) {
                          intreset = 12;
                          price =
                            (ProductDetails.productDetails.dp -
                              ProductDetails.productDetails.downPayment +
                              (12 / 100) *
                                (ProductDetails.productDetails.dp -
                                  ProductDetails.productDetails.downPayment)) /
                            item;
                        } else if (item === 12) {
                          intreset = 15;
                          price =
                            (ProductDetails.productDetails.dp -
                              ProductDetails.productDetails.downPayment +
                              (15 / 100) *
                                (ProductDetails.productDetails.dp -
                                  ProductDetails.productDetails.downPayment)) /
                            item;
                        } else if (item >= 18) {
                          intreset = 18;
                          price =
                            (ProductDetails.productDetails.dp -
                              ProductDetails.productDetails.downPayment +
                              (18 / 100) *
                                (ProductDetails.productDetails.dp -
                                  ProductDetails.productDetails.downPayment)) /
                            item;
                        }
                        price = Math.round(price);
                      }

                      return (
                        <>
                          <p className="single_item_emi" key={i}>
                            <span className="single_item_month">
                              {price ? (
                                <>
                                  <b>
                                    ₹
                                    {Number(Math.round(price)).toLocaleString()}
                                  </b>{" "}
                                  X {item} mons
                                 { intreset==0&& <span className="zeroPemi">*0% EMI</span>}
                                </>
                              ) : null}
                            </span>
                            <span
                              className="single_item_buy"
                              onClick={() =>
                                popupEmicot(
                                  item,
                                  price,
                                  ProductDetails.productDetails.downPayment,
                                  ProductDetails.productDetails.dp,
                                  intreset
                                )
                              }
                            >
                              Buy on {item} mons EMI
                            </span>
                          </p>
                          {/* Emi Popup   */}
                        </>
                      );
                    })}
                  <UserEmiselectPage
                    emipopup={emipopup}
                    popupEmiCort={popupEmiCort}
                    popupEmicot={popupEmicot}
                    emipopupPo={emipopupPo}
                    addresCardboxPopop={addresCardboxPopop}
                    addresCardboxPopopTogle={addresCardboxPopopTogle}
                  />
                </div>

                {/* 99 */}
                {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹4250</b> 3 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹2345</b> 6 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹1667</b> 9 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹1333</b> 12 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi_date_start">EMIs will start from <span>Jan 3, 2024</span></p>
                            </div> */}
                {/* 199 */}
                {/*                             
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹3500</b> 3 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹1931</b> 6 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹1373</b> 9 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi">
                                    <span className="single_item_month"><b>₹1098</b> 12 mons</span>
                                    <span className="single_item_buy">Buy on 3 mons EMI</span>
                                </p>
                                <p className="single_item_emi_date_start">EMIs will start from <span>Jan 3, 2024</span></p>
                            </div> */}
              </div>
              <h4 className="single_shipping_detaila">Shipping Details</h4>
              <p className="single_item_date_">
                <span>Free delivery | </span>Dispatch in less than 48 hours and
                delivery in 3-7 working days.
              </p>
            </div>
          )}
        </div>
        <style>
          {`

.pay_ment_get_but button {
background-color: gray;
width: 210px !important;
margin: 10px auto;
border-radius: 5px;
}

button.ConfirmOrder {
  background-color: #014751;
  border-radius: 15px;
  font-weight: 600;
  display: table;
  margin: 10px auto;
}
.confirmOrdero {
  position: relative;
  border: 1px solid;
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fff;
}
.confirmOrdero label.form-check-label {
color: #000;
}
.oopssPopup span.close-button {
display: flex;
justify-content: center;
align-items: center;
padding: 0;
width: 30px;
height: 30px;
position: absolute;
top: 10px;
right: 10px;
color: #000;
background-color: #d0d9de33;
border-radius: 50%;
cursor: pointer;
z-index: 999;
text-align: center;
}
.oopssPopup {
  width: 450px;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99;
  background-color: #eff4f7;
  padding: 15px;
  border-radius: 15px;
  color: #000;
  margin-top: -100px;
}
.oopssPopup p.oops_p {
  font-size: 40px;
  text-align: center;
  font-weight: 600;
}
.oopssPopup p.weCanApprove_p {
text-align: center;
}
.oopssPopup button.ConfirmOrder {
margin: 0 auto;
width: auto;
display: table;
}


.oopssPopup button.ConfirmOrder {
margin: 0 auto;
width: auto;
display: table;
}    
span.single_item_month span.zeroPemi {
  font-size: 11px;
  background: #10950f;
  color: #fff;
  padding: 0 4px 2px 5px;
  border-radius: 14px;
  margin-left: 5px;
}       
          `}
        </style>
      </>
    )
  );
};

export default ProductDesc;

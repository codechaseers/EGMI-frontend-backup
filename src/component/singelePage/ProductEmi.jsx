import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColorid } from "../../features/productsdetails/ProductDetailsslice";
import UserEmiselectPage from "./UserEmiselectPage";
import { loginPopup } from "../../features/authentication/authSlice";
import { setSelectedProductd } from "../../features/productsdetails/SelectedProductSlice";

const ProductEmi = () => {
  let dispatche=useDispatch()
  let ProductDetails = useSelector((state) => state.productDetailsReduser);
  let userTokenCheck = useSelector((state) => state.authReducer.loggedInStatus);
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
   const popupEmicot = (month, price, downpayment,dp,intreset) => {
    let obj = {
      month: month,
      price: Math.round(price),
      downpayment: downpayment,
      dp:dp,
      intreset:intreset
      
    };
    dispatche(setSelectedProductd(obj));
     // if(emiPopupreduser==true){
     //  // console.log("emi show popup");
 
     //   setEmipopup(!emipopup);
     //  // console.log(` iff${emipopup}`);
     //  // console.log(` iff${emiPopupreduser}`);
     // }
     setEmipopup(!emipopup);
     
     if (userTokenCheck) {
       // setEmipopup(true);
     
      // console.log(obj);
      // console.log(emipopup);
     
     } else {
      //  dispatche(loginPopup(true));
     }
 
     // setEmipopup(!emipopup);
   };
   const [emipopupPo, setEmipopupPo] = useState(false);

   const popupEmiCort = () => {
     setEmipopupPo(!emipopupPo);
   };

  return (
    <>
      <div className="ChooseADownpayment productdown">
        <h4 className="Downpayment_item">Choose a Downpayment</h4>
        <span
          onClick={popupEmiCort}
          className="close-button"
        >
          X
                              </span>
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

                if (item <= ProductDetails.productDetails.interestFreeMonth) {
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
                            <b>₹{Number(Math.round(price)).toLocaleString()}</b>{" "}
                            X {item} months 
                            {/* <span>0 %</span> */}
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
                        Buy on {item} months EMI
                      </span>
                    </p>
                    {/* Emi Popup   */}
                    <UserEmiselectPage
                      emipopup={emipopup}
                      popupEmiCort={popupEmiCort}
                      popupEmicot={popupEmicot}
                      emipopupPo={emipopupPo}
                    />
                  </>
                );
              })}
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
    </>
  );
};
export default ProductEmi;

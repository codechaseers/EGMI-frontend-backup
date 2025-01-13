import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginPopup } from "../../features/authentication/authSlice";
import { setSelectedProductd } from "../../features/productsdetails/SelectedProductSlice";
import UserAddressPage from "./UserAddressPage";
import ProductEmi from "./ProductEmi";
import ConfirmPage from "./ConfirmPage";
import Logo from "../../assets/images/logo.svg"
import Brandlogo from "../../assets/Logo/EgmiBrandLogo2.png";

const UserEmiselectPage = ({
  emipopup,
  popupEmiCort,
  popupEmicot,
  emipopupPo,
  addresCardboxPopopTogle,
  addresCardboxPopop,
}) => {
  const dispatch = useDispatch();
  let userTokenCheck = useSelector((state) => state.authReducer.loggedInStatus);
  let selectemi = useSelector(
    (state) => state.selectedProductReduser.selectedProduct
  );
  let option = useSelector((state) => state.selectedProductReduser.option);
  //// console.log(selectemi);
  let setSelectedAddress = useSelector(
    (state) => state.selectedProductReduser.SelectedAddress
  );
  const [confirmOrder, setConfirmOrder] = useState(true);
  const confirmOrderopen = () => {
    setConfirmOrder(!confirmOrder);
  };



  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  //// console.log(setSelectedAddress);
  return (
    <>
      {emipopup &&
        (emipopup && userTokenCheck ? (
          <div className=" Sort_by_Featured singleProductOPopup">
            <div className="mane">
              <div className="sort_by_fliter">
                <div className="cord_product_list product_list_comt">
                  <span onClick={popupEmicot} className="close-button">
                    X
                  </span>

                  {showDropdown && (
                    <div>
                      
                    </div>
                  )}

                  <div className="cardBox">
                    <div className="popup_lolo">
                      <img src={Brandlogo} />
                    </div>
                    <div className="paymentgetaddress">
                      <div className="smptPayment">
                        <div className="snap-card ">
                          <div className="pay_emiInt">
                            <p className=" font-robotoBold ">
                              <b>Pay Now</b>
                            </p>
                            <p className=" font-robotoBold ">
                             <b> {selectemi.downpayment}</b>
                            </p>
                            <p className=" font-robotoMedium ">Downpayment</p>
                          </div>
                          <div className="plusIcon">
                            <i className="fa fa-plus"></i>
                          </div>
                          <div className="pay_emiInt ">
                            <p className=" font-robotoBold">
                              <b>EMI</b>
                            </p>
                            <p className=" font-robotoBold">
                             <b> ₹ {selectemi.price} </b>
                            </p>
                            <p className=" font-robotoMedium">
                              x {selectemi.month}
                              months
                            </p>
                          </div>
                          <div className="arrow-righ">
                            <i className="fa fa-arrow-right"></i>
                          </div>
                          <div className="pay_emiInt">
                            <p className=" font-robotoBold">
                              <b>Total</b>
                            </p>
                            <p className=" font-robotoBold">
                             <b> ₹ {Number( Math.round(selectemi.downpayment+(selectemi.price*selectemi.month))).toLocaleString()} </b>
                            </p>
                            <div className="snap-badge ">
                              <p className=" font-robotoBold ">
                                {selectemi.intreset}% EMI
                              </p>
                            </div>
                          </div>

                          {/* <div className="pay_emy_App">
                          <p className=" font-robotoMedium ">Pay EMIs on Snapmint App</p>
                          <span className="bg-lightGrey w-2 h-2 rounded-lg"></span>
                          <div className="text-headLine ">3<sup>rd </sup>Feb 24 - Jan 25</div>
                          </div> */}
                        </div>
                        {/* 
                        <div className="EMI_Plans">
                          <p onClick={popupEmiCort}>3/6/9/12 EMI Plans</p>
                        </div> */}
                      </div>

                      {/* <p cl>Pay EMIs on Snapmint App 3rd Feb 24 - Apr 24</p>
                      
                       */}
                      {/* --------------------->Address Compmonent <----------------- */}
                      {/* input data */}
                      {option == 1 && (
                        <UserAddressPage
                          popupEmicot={popupEmicot}
                          emipopup={emipopup}
                          addresCardboxPopopTogle={addresCardboxPopopTogle}
                          addresCardboxPopop={addresCardboxPopop}
                        />
                      )}
                      {option == 2 && (
                        <ConfirmPage
                          confirmOrder={confirmOrder}
                          confirmOrderopen={confirmOrderopen}
                          setSelectedAddress={setSelectedAddress}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        ))}
    </>
  );
};
export default UserEmiselectPage;

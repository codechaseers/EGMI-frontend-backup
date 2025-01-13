import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginPopup } from "../../features/authentication/authSlice";
import { Cookies } from "react-cookie";
import ClipLoader from "react-spinners/ClipLoader";
import ConfirmPage from "./ConfirmPage";
import { setSelectedAddress } from "../../features/productsdetails/SelectedProductSlice";
import { setOption } from "../../features/productsdetails/SelectedProductSlice";
import { setUserAddress } from "../../features/productsdetails/SelectedProductSlice";

const UserAddressPage = ({
  emipopup,
  popupEmicot,
  addresCardboxPopop,
  addresCardboxPopopTogle,
}) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [userAlladdress, setUserAlladdress] = useState([]);
  const [addressFormOpen, setAddressFormOpen] = useState();
  const [spinerStatus, setSpinerstatus] = useState(true);
  const [loaderStatus, setLoaderstatus] = useState(true);

  const [checkInputbox, setCheckInputbox] = useState(false);
  const [selectedAddress, SetSelectedAddress] = useState();
  const [addressFillWarning, SetAddressFillWarning] = useState(false);
  //// console.log(addressFormOpen);

  let userTokenCheck = useSelector((state) => state.authReducer.loggedInStatus);
  let userAuthCokie;
  if (userTokenCheck) {
    userAuthCokie = cookies.get("BSE-authtoken-auto%log_in");
  }

  const [address, setAddress] = useState({
    Flat: "",
    Area: "",
    Landmark: "",
    PinCode: "",
    City: "",
    PhoneNumber: "",
  });
  // --------------->form data set Logic <----------------
  const handleInput = (e) => {
    let setname = e.target.name;
    let value = e.target.value;
    console.log(address.PhoneNumber);
    setAddress({ ...address, [setname]: value });
  };
  // --------------->form data submit Logic <----------------
  const addressSubmit = async () => {
    //// console.log(JSON.stringify(address));
    if (
      address.Flat == "" ||
      address.Area == "" ||
      address.PinCode == "" ||
      address.City == "" ||
      address.PhoneNumber == "" ||
      address.PhoneNumber.length !== 10 ||
      address.PinCode.length !== 6
    ) {
      setCheckInputbox(true);
    } else {
      setLoaderstatus(false);
      try {
        let userAddress = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/address`,
          { address: JSON.stringify(address) },
          { headers: { Authorization: userAuthCokie } }
        );
        // if(userData){

        // //   dispatch(login(userData.data.userData));
        // }
        setAddress({
          Flat: "",
          Area: "",
          Landmark: "",
          PinCode: "",
          City: "",
          PhoneNumber: "",
        });
        setAddressFormOpen();
        setCheckInputbox(false);
        setLoaderstatus(true);
      } catch (error) {
        // console.log(error);
        // dispatch(logout(error));
      }
    }
  };

  // --------------->Get user address Method <----------------
  const getAddress = async () => {
    try {
      let userAddress = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/address`,

        { headers: { Authorization: userAuthCokie } }
      );
      if (userAddress) {
        setSpinerstatus(false);
        //// console.log(userAddress.data.userAddress);
        setUserAlladdress(userAddress.data.userAddress);
        //   dispatch(login(userData.data.userData));
      }
    } catch (error) {
      //// console.log(error);
      // dispatch(logout(error));
    }
  };

  //// console.log(userAlladdress);

  useEffect(() => {
    getAddress();
    //// console.log(userAlladdress);
  }, [addressSubmit]);

  // --------------->TOGULE Adress form user address page Logic <----------------

  const toguleAddressFormOpen = () => {
    if (userAlladdress.length > 0) {
      setAddressFormOpen(true);
    } else {
      setAddressFormOpen(false);
    }
    setAddressFormOpen(!addressFormOpen);
  };

  useEffect(() => {
    if (userAlladdress.length > 0 || addressFormOpen == true) {
      setAddressFormOpen(true);
    }
    if (addressFormOpen == false) {
      setAddressFormOpen(false);
      //// console.log(userAlladdress.length);
    }
  }, [toguleAddressFormOpen]);

  const selectAddress = (e) => {
    const value = e.target.value;
    if (value) {
      SetAddressFillWarning(false);
    }
    SetSelectedAddress(value);
    // console.log(value);
    dispatch(setUserAddress(value));
  };

  // ---------------> After adress chose confirm page open  Logic <----------------

  const [confirmOrder, setConfirmOrder] = useState(false);
  const confirmOrderopen = () => {
    setConfirmOrder(!confirmOrder);
  };
  let option = useSelector((state) => state.selectedProductReduser.option);
  const confirm = () => {
    // confirmOrderopen()

    if (selectedAddress) {
      // console.log("confirm page come");
      dispatch(setSelectedAddress(true));
      // dispatch(setAddress( "gsgs"))
      dispatch(setOption(2));
    } else {
      SetAddressFillWarning(true);
      // console.log("chose first");
    }
  };

  return (
    <>
      <div className="productDataInput ">
        <div className="productDataInput_add ">
          <p className="emiAddres">
            <b>For EMI purchase, please enter your delivery address</b>
          </p>

          {/* show address */}

          {userAlladdress &&
            (addressFormOpen ? (
              userAlladdress.map((item, i) => {
                let data = JSON.parse(item.address);
                // // console.log(item);

                return (
                  <>
                    {/* <h1> {data.Area}</h1> */}
                    <div className="addNewAddresDiv">
                      <div className="form-check">
                        <input
                          // value={data && JSON.stringify({
                          //   areaa: data.Area,
                          //   flat: data.Flat,
                          //   pincode: data.PinCode,
                          // })}
                          // value={data.Area}
                          className="form-check-input"
                          type="radio"
                          value={item.id}
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          // onChange={(e) => selectAddress(e)}
                          onClick={selectAddress}
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          {data.Area} , {data.Flat} , {data.City}{`+91${data.PhoneNumber}`}
                        </label>
                      </div>
                    </div>
                  </>
                );
              })
            ) : spinerStatus ? (
              <ClipLoader
                loading={spinerStatus}
                size={35}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <>
                <button
                  className="close-button"
                  onClick={toguleAddressFormOpen}
                >
                  X
                </button>

                <div className="addressInput">
                  {/* errorPint  */}
                  <div
                    className={
                      address.Flat == "" && checkInputbox
                        ? "relative errorPint"
                        : "relative "
                    }
                  >
                    <input
                      id="addressLineOne"
                      type="text"
                      className="peer"
                      placeholder=" Flat / House no / Building / Company name"
                      autocomplete="off"
                      pattern=""
                      inputmode="text"
                      value={address.Flat}
                      name="Flat"
                      onChange={handleInput}
                    />
                    {address.Flat == "" && checkInputbox ? (
                      <span className="errorOPe">
                        Please Enter Flat no /House NO
                      </span>
                    ) : (
                      "  "
                    )}
                  </div>

                  <div
                    className={
                      address.Area == "" && checkInputbox
                        ? "relative errorPint"
                        : "relative "
                    }
                  >
                    <input
                      id="addressLineTwo"
                      type="text"
                      className="peer"
                      placeholder=" Area / Colony / Street / Village"
                      autocomplete="off"
                      pattern=""
                      inputmode="text"
                      value={address.Area}
                      name="Area"
                      onChange={handleInput}
                    />
                    {address.Area == "" && checkInputbox ? (
                      <span className="errorOPe">
                        Please Enter Area Address
                      </span>
                    ) : (
                      "  "
                    )}
                  </div>
                  <div className="relative ">
                    <input
                      id="landmark"
                      type="text"
                      className="peer"
                      placeholder=" Landmark (Optional)"
                      autocomplete="off"
                      pattern=""
                      inputmode="text"
                      value={address.Landmark}
                      name="Landmark"
                      onChange={handleInput}
                    />
                  </div>

                  <div
                    className={
                      (address.PinCode.length !== 6 || address.PinCode == "") &&
                      checkInputbox
                        ? "relative errorPint"
                        : "relative "
                    }
                  >
                    <input
                      id="pinCode"
                      type="number"
                      className="peer"
                      placeholder=" Pin Code"
                      autocomplete="off"
                      inputmode="text"
                      value={address.PinCode}
                      name="PinCode"
                      onChange={handleInput}
                    />
                    {(address.PinCode == "" || address.PinCode.length !== 6) &&
                    checkInputbox ? (
                      <span className="errorOPe">
                        Please Enter a Valia PinCode
                      </span>
                    ) : (
                      "  "
                    )}
                  </div>
                  <div
                    className={
                      address.City == "" && checkInputbox
                        ? "relative errorPint"
                        : "relative "
                    }
                  >
                    <input
                      id="city"
                      type="text"
                      className="peer"
                      placeholder=" City"
                      autocomplete="off"
                      pattern=""
                      inputmode="text"
                      value={address.City}
                      name="City"
                      onChange={handleInput}
                    />
                    {address.City == "" && checkInputbox ? (
                      <span className="errorOPe">Please Enter City</span>
                    ) : (
                      "  "
                    )}
                  </div>
                  <div
                    className={
                      (address.PhoneNumber == "" ||
                        address.PhoneNumber.length !== 10) &&
                      checkInputbox
                        ? "relative errorPint"
                        : "relative "
                    }
                  >
                    <input
                      id="phonenumber"
                      type="number"
                      className="peer"
                      placeholder="Phone Number"
                      autocomplete="off"
                      pattern=""
                      inputmode="text"
                      value={address.PhoneNumber}
                      name="PhoneNumber"
                      onChange={handleInput}
                    />
                    {(address.PhoneNumber == "" ||
                      address.PhoneNumber.length !== 10) &&
                    checkInputbox ? (
                      <span className="errorOPe">
                        Please Enter Valid Phone Number
                      </span>
                    ) : (
                      "  "
                    )}
                  </div>
                </div>
              </>
            ))}
        </div>

        <div className="pay_ment_get_but">
          {addressFormOpen ? (
            <>
              {addressFillWarning ? (
                <span className="SetAddressFillWarning">
                  * Please select an address{" "}
                </span>
              ) : (
                <></>
              )}
              <button className=" bg-secondaryText" onClick={confirm}>
                Deliver to this address
              </button>
              <button
                className="addNewAddress "
                onClick={toguleAddressFormOpen}
              >
                {" "}
                + Add New Address
              </button>
            </>
          ) : (
            <button className=" bg-secondaryText" onClick={addressSubmit}>
              {loaderStatus ? (
                "Add this address"
              ) : (
                <ClipLoader
                  // loading={spinerStatus}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              )}
            </button>
          )}
        </div>
      </div>

      {/*  errorPint css only  */}
      <style>
        {`
        .SetAddressFillWarning{
          color: #ED1C24;
        font-weight: 500;
        margin-top: 9px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
        text-transform: capitalize;
        }
        .errorPint {
          position: relative;
      }
        .errorPint span.errorOPe {
          color: #fd3d3d;
          font-size: 13px;
      }
      .errorPint input {
        border-color: #f52020 !important;
    }

        `}
      </style>
    </>
  );
};
export default UserAddressPage;

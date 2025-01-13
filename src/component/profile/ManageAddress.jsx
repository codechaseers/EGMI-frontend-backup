import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import "./profile.css";
import ClipLoader from "react-spinners/ClipLoader";

import ShowAddressSection from "./ShowAddressSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageAddress() {
  const [loaderStatus, SetLoaderStatus] = useState(true);
  const navigate = useNavigate();
  const [checkInputbox, setCheckInputbox] = useState(false);
  // ------------------Get Cookie Tokan ---------------
  const cookies = new Cookies();
  let userTokenCheck = useSelector((state) => state.authReducer.loggedInStatus);
  let userAuthCokie;
  if (userTokenCheck) {
    userAuthCokie = cookies.get("BSE-authtoken-auto%log_in");
  }

  //------------- Add Address Popup work js-----------------
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //------------- Edit Address Popup work js-----------------
  const [isOpen2, setIsOpen2] = useState(false);
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  //   -----------------Set Address Part -------------------
  const [address, setAddress] = useState({
    Flat: "",
    Area: "",
    Landmark: "",
    PinCode: "",
    City: "",
    PhoneNumber: "",
  });
  // --------------->Adddress form data set Logic <----------------
  const handleInput = (e) => {
    let setname = e.target.name;
    let value = e.target.value;
    setAddress({ ...address, [setname]: value });
  };

  const addressSubmit = async () => {
    //// console.log(JSON.stringify(address));
    // console.log("click");
    if (
      address.Flat == "" ||
      address.Area == "" ||
      address.PinCode == "" ||
      address.City == "" ||
      address.PhoneNumber.length !== 10 ||
      address.PinCode.length !== 6
    ) {
      setCheckInputbox(true);
    } else {
      SetLoaderStatus(false);
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
        togglePopup();
        // setAddressFormOpen();
        setCheckInputbox(false);
        SetLoaderStatus(true);
      } catch (error) {
        // console.log(error);
        // dispatch(logout(error));
      }
    }
  };

  // ------------------Get Address ---------------
  const [userAlladdress, setUserAlladdress] = useState([]);
  const getAddress = async () => {
    try {
      let userAddress = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/address`,

        { headers: { Authorization: userAuthCokie } }
      );
      if (userAddress) {
        // setSpinerstatus(false);
        // console.log(userAddress.data.userAddress);
        setUserAlladdress(userAddress.data.userAddress);
        //   dispatch(login(userData.data.userData));
      }
    } catch (error) {
      // console.log(error);
      // dispatch(logout(error));
    }
  };

  //   ----------------------------------->Delete Address <--------------------
  const [deleteAddressCheck, setDeleteAddressCheck] = useState(false);
  const DeleteAddress = async (id) => {
    try {
      let deleteUser = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/user/address/${id}`,

        { headers: { Authorization: userAuthCokie } }
      );
      setDeleteAddressCheck(!deleteAddressCheck);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getAddress();
    // console.log(userAlladdress);
  }, [userTokenCheck, isOpen, deleteAddressCheck]);

  let a = true;

  useEffect(() => {
    if (!userTokenCheck) navigate("/");
  });
  return (
    <>
      {isOpen && (
        <>
          <div className="ManageAddressPopupMntDv">
            <div className="ManageAddressPopup">
              <p className="popup_close" onClick={togglePopup}>
                <i class="fa fa-long-arrow-left"></i> Add a new address
              </p>
              <div
                class={
                  address.Flat == "" && checkInputbox
                    ? "form-group  errorPint"
                    : "form-group"
                }
              >
                {/* <label >House no, Building Name</label> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="  Flat , House no , Building , Company name"
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
                class={
                  address.Area == "" && checkInputbox
                    ? "form-group  errorPint"
                    : "form-group"
                }
              >
                {/* <label >Location, Town, Etc.</label> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Area ,Colony , Street , Village"
                  value={address.Area}
                  name="Area"
                  onChange={handleInput}
                />
                {address.Area == "" && checkInputbox ? (
                  <span className="errorOPe">Please Enter Area Address</span>
                ) : (
                  "  "
                )}
              </div>{" "}
              <div class="form-group ">
                {/* <label >Location, Town, Etc.</label> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Landmark (Optional)"
                  value={address.Landmark}
                  name="Landmark"
                  onChange={handleInput}
                />
              </div>
              <div
                class={
                  (address.PinCode.length !== 6 || address.PinCode == "") &&
                  checkInputbox
                    ? "form-group errorPint"
                    : "form-group "
                }
              >
                {/* <label >Pin Code</label> */}
                <input
                  type="number"
                  class="form-control"
                  placeholder="Pin Code"
                  value={address.PinCode}
                  name="PinCode"
                  pattern="[0-9]{4}"
                  onChange={handleInput}
                />
                {(address.PinCode == "" || address.PinCode.length !== 6) &&
                checkInputbox ? (
                  <span className="errorOPe">Please Enter a Valia PinCode</span>
                ) : (
                  "  "
                )}
              </div>
              <div
                class={
                  address.City == "" && checkInputbox
                    ? "form-group  errorPint"
                    : "form-group"
                }
              >
                {/* <label >City</label> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  value={address.City}
                  name="City"
                  onChange={handleInput}
                />
                {address.Flat == "" && checkInputbox ? (
                  <span className="errorOPe">Please Enter City</span>
                ) : (
                  ""
                )}
              </div>
              <div
                    className={
                      (address.PhoneNumber == ""||address.PhoneNumber.length!== 10) && checkInputbox
                        ? "form-group  errorPint"
                        : "form-group  "
                    }
                  >
                     <input
                      id="phonenumber"
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                      autocomplete="off"
                      pattern=""
                      inputmode="text"
                      value={address.PhoneNumber}
                      name="PhoneNumber"
                      onChange={handleInput}
                    />
                    {(address.PhoneNumber == ""||address.PhoneNumber.length!== 10) && checkInputbox ? (
                      <span className="errorOPe">Please Enter Valid Phone Number</span>
                    ) : (
                      "  "
                    )}
                  
                  </div>
              <div class="form-group">
                {/* <label >City</label> */}
                {/* <select class="form-control">
              <option>Default select</option>
            </select> */}
              </div>
            </div>
            <div className="ManageAddressPopupButton">
              <button className="Cancel" onClick={togglePopup}>
                Cancel
              </button>
              <button className="AddAddress" onClick={addressSubmit}>
                {loaderStatus ? (
                  "Add Address"
                ) : (
                  <ClipLoader
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </button>
            </div>
          </div>
        </>
      )}

      {isOpen2 && (
        <div className="ManageAddressPopup">
          <p className="popup_close" onClick={togglePopup2}>
            <i class="fa fa-long-arrow-left"></i>Edit Your Address
          </p>
          <div class="form-group errorOPe">
            {/* <label >House no, Building Name</label> */}
            <input
              type="text"
              class="form-control  "
              placeholder="  Flat , House no , Building , Company name"
              value={address.Flat}
              name="Flat"
              onChange={handleInput}
            />
          </div>
          <span className="errorOPe">Please Enter Flat no /House NO</span>
          <div class="form-group">
            {/* <label >Location, Town, Etc.</label> */}
            <input
              type="text"
              class="form-control"
              placeholder=" Area ,Colony , Street , Village"
              value={address.Area}
              name="Area"
              onChange={handleInput}
            />
          </div>{" "}
          <div class="form-group">
            {/* <label >Location, Town, Etc.</label> */}
            <input
              type="text"
              class="form-control"
              placeholder=" Landmark"
              value={address.Landmark}
              name="Landmark"
              onChange={handleInput}
            />
          </div>
          <div class="form-group">
            {/* <label >Pin Code</label> */}
            <input
              type="text"
              class="form-control"
              placeholder="Pin Code"
              value={address.PinCode}
              name="PinCode"
              onChange={handleInput}
            />
          </div>
          <div class="form-group">
            {/* <label >City</label> */}
            <input
              type="text"
              class="form-control"
              placeholder="City"
              value={address.City}
              name="City"
              onChange={handleInput}
            />
          </div>
          <div class="form-group">
            {/* <label >City</label> */}
            {/* <select class="form-control">
              <option>Default select</option>
            </select> */}
          </div>
          <div className="ManageAddressPopupButton">
            <button className="Cancel" onClick={togglePopup2}>
              Cancel
            </button>
            <button className="AddAddress">Add Address</button>
          </div>
        </div>
      )}
      <div className="Manage_Add">
        <h3>Manage Address</h3>
        <button onClick={togglePopup}>+ Add Address</button>
      </div>
      <div className="ManageAddress">
        {/* --------------- Show Address ------------------ */}
        {userAlladdress.length > 0 ? (
          userAlladdress.map((item, i) => (
            <ShowAddressSection
              item={item}
              i={i}
              DeleteAddress={DeleteAddress}
              togglePopup2={togglePopup2}
            />
          ))
        ) : (
          <div className="YouHaveNotSaved">
            <p>You have not saved any addresses yet.</p>
          </div>
        )}
      </div>
      {/*  errorPint css only  */}
      <style>
        {`
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
      {/*  errorPint css only  */}
    </>
  );
}
export default ManageAddress;

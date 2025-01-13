import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import Footer from "./component/nabar/footer/footer.jsx";
// import { Route, Routes } from "react-router-dom";
import Body from "./component/body/body.jsx";
import Header from "./component/nabar/header/header.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import PhoneV from "./component/phoneVerification/PhoneV.jsx";

import SingleOder from "./component/order/singleOder";
import Show_hide from "./AppShowAndHide.jsx";
// import Login_1st from "./component/Login/loginf_first.jsx";

// roting
// import HomeSlider from "./component/homePage/Index"
import WirelessSpeakers from "./component/product/WirelessSpeakers";
import RockerzHeadphones from "./component/product/RockerzHeadphones";
import Smartwatches from "./component/product/Smartwatches";
import WirelessEarbuds from "./component/product/WirelessEarbuds";
import WirelessEarphones from "./component/product/WirelessEarphones";
import Apple from "./component/product/brandList/apple";
import Boat from "./component/product/brandList/boat";
import ProductPage from "./component/singelePage/ProductPage.jsx";
// import Login_1st from "./component/Login/loginf_first.jsx";

// Policy
import PrivacyPolicy from "./component/policy/privacyPolicy";
import RefundPolicy from "./component/policy/refundPolicy";

import ReturnPolicy from "./component/policy/returnPolicy";
import TermsAndConditions from "./component/policy/termsAndConditions";

// import Login_1st from "./component/Login/loginf_first.jsx";
import HomeSlider from "./component/homePage/Index.jsx";
// import ProductPage from "../src/component/product/product"

// import Phonevt from "./component/phoneVerification/PhoneV.jsx"
import Profile from "./component/profile/viewProfile.jsx";
import { useEffect, useState } from "react";

import Addproduct from "./component/admin_panel/addproduct.jsx";
import Allproducts from "./component/admin_panel/allproduct.jsx";
import ProductDetails from "./component/admin_panel/productDetails.jsx";
import { Cookies } from "react-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/authentication/authSlice.js";
import OrderlistPage from "./component/order/OrderListPage.jsx";
import ProfilePage from "./component/profile/viewProfile.jsx";
import Protectroute from "./component/ProtectRoute/ProtectedRoute.js";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import ManageAddress from "./component/profile/ManageAddress";
// error pages
import Success from "./component/popupRoute/Success";
import Error from "./component/popupRoute/error";
// contactUs
import Support from "./component/support/support";
// payEmi
import PayEmi from "./component/payEmi/payEmi";
// Testing
import Testing from "./component/testing";
import ScrollToTopOnRouteChange from "./component/scrollToTop/ScrollToTop.jsx";
import ContactUs from "../src/component/contactUs/contactUs";
import Shipping from "../src/component/shipping/shipping";

import Fourzerofour from "./component/404page/Fourzerofour.jsx";

// import  ScrollToTop from './ScrollToTop'

function App() {
  const navigate = useNavigate();

  const cookies = new Cookies();
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0)

  // ---------------------------->Token Varify  logic <--------------------------------
  const verifyToken = async () => {
    try {
      let userAuthCokie = cookies.get("BSE-authtoken-auto%log_in");
      // console.log(userAuthCokie);
      let userData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/tokenverification`,
        { headers: { Authorization: userAuthCokie } }
      );
      // console.log(userData);
      if (userData) {
        dispatch(login(userData.data.userData));
      }
    } catch (error) {
      // cookies.set(`BSE-authtoken-auto%log_in`,  "");
      dispatch(logout());
      // console.log(error);

      // dispatch(logout(error));
    }
  };
  let userStatus = useSelector((state) => state.authReducer.loggedInStatus);

  useEffect(() => {
    verifyToken();
  });

  return (
    <>
      <Header />
      {/* <ScrollToTop> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {/* <ScrollToTopOnRouteChange/> */}
              <HomeSlider />
            </>
          }
        />
        <Route
          exact
          path="/*"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Fourzerofour />
            </>
          }
        />
        {/* <Route exact path="/wireless-speakers" element={<WirelessSpeakers />} /> */}
        <Route
          exact
          path="/manage-address"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <ManageAddress />
            </>
          }
        />
        <Route
          exact
          path="/rockerz-headphones"
          element={<RockerzHeadphones />}
        />
        {/* <Route exact path="/smart-watches" element={<Smartwatches />} /> */}
        <Route
          exact
          path="/wireless-earbuds"
          element={
            <>
              {/* <ScrollToTopOnRouteChange/> */}
              <WirelessEarbuds />
            </>
          }
        />
        <Route
          exact
          path="/wireless-earphones"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <WirelessEarphones />
            </>
          }
        />
        <Route exact path="/apple" element={<Apple />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/pay-emi" element={<PayEmi />} />
        {/* Policy */}
        <Route
          exact
          path="/privacy-policy"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <PrivacyPolicy />
            </>
          }
        />
        <Route
          exact
          path="/refund-policy"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <RefundPolicy />
            </>
          }
        />

        {/* <Route
          exact
          path="/return-policy"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <ReturnPolicy />
            </>
          }
        /> */}
        <Route
          exact
          path="/terms-and-conditions"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <TermsAndConditions />
            </>
          }
        />

        {/* <Route exact path="/boat" element={<Boat />} /> */}
        <Route
          exact
          path="/user/profile"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <ProfilePage />
            </>
          }
        />
        {/* <Route exact path="/user/profile"element={
          <Protectroute isAuthenticated={userStatus} path='profile' >
            <ProfilePage />
          </Protectroute>}>
        </Route> */}
        <Route
          exact
          path="/productdetails/:id"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <ProductPage />
            </>
          }
        />

        {/* admin routes */}

        {/* Testing/ */}
        {/* <Route exact path="/testing" element={<Testing />} /> */}
        <Route
          exact
          path="/order-history"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <OrderlistPage />
            </>
          }
        />
        <Route
          exact
          path="/single-oder/:id"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <SingleOder />
            </>
          }
        />
        {/* <Route
          exact
          path="/admin/addproduct"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Addproduct />
            </>
          }
        /> */}
        {/* <Route exact path="/admin/allproducts" element={<Allproducts />} /> */}
        <Route
          exact
          path="/Profile"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Profile />
            </>
          }
        />
        {/* error paes  */}
        <Route
          exact
          path="/Success"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Success />
            </>
          }
        />
        {/* <Route
          exact
          path="/contact-us"
          element={
            <>
            <ScrollToTopOnRouteChange/>
              <ContactUs />
            </>
          }
        /> */}
        <Route
          exact
          path="/shipping"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Shipping />
            </>
          }
        />
        <Route
          exact
          path="/Error"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Error />
            </>
          }
        />

        <Route
          exact
          path="/admin/productdetails/877777"
          element={<ProductDetails />}
        />
      </Routes>
      {/* </ScrollToTop> */}
      <Footer />

      {/* <div className="App"> */}

      {/* <Routes> */}
      {/* <Nav /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <PhoneV /> */}
      {/* <Route path="/" element={<Body/>}></Route>
      <Route path="/add_product" element={<Add_product/>}></Route> */}
      {/*  */}
      {/* */}
      {/* <Login_1st></Login_1st> */}
      {/* <Show_hide></Show_hide> */}

      {/* This is a profile  */}

      {/* <Profile /> */}

      {/* 
      <PhoneV /> */}
      {/* <PhoneV /> */}
      {/* <Add_product/> */}

      {/* this is a home page body import data  */}
      {/* <Body /> */}

      {/* </div> */}
    </>
  );
}

export default App;

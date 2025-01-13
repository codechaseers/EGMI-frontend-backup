import React, { useCallback, useEffect, useState, useRef } from "react";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import Brandlogo from "../../../assets/Logo/EgmiBrandLogo2.png";


import TopNab from "./topbar";
import Brand from "../../../assets/images/brand_iten.webp";
import CsrtBaf from "../../../assets/images/svgviewer-png-output.png";
import home from "../../../assets/images/footerIcon/home.png";
import Categories from "../../../assets/images/footerIcon/Categories.png";
import order from "../../../assets/images/footerIcon/order.png";
import payemi from "../../../assets/images/footerIcon/payemi.png";
import whatsapp from "../../../assets/images/footerIcon/contactus.png";
// import Login_1st from '../../Login/loginf_first';
import { useDispatch, useSelector } from "react-redux";
import { loginPopup } from "../../../features/authentication/authSlice";
import AuthFirstEnterNoPopup from "../../authComp/AuthFirstEnterNoPopup";
import AuthSecondEnterOtpPopup from "../../authComp/AuthSecondEnterOtpPopup";
import AuthThirdSignupDetailsPopup from "../../authComp/AuthThirdSignupDetailsPopup";
import AuthFinalSuccessLoginPopup from "../../authComp/AuthFinalSuccessLoginPopup";
import AuthProcess from "../../authComp/AuthProcess";
import { emiPopup } from "../../../features/authentication/authSlice";
import Phone from "../../../assets/images/homeSlider/brande/phone.png";
import Smartwatches from "../../../assets/images/homeSlider/brande/Smartwatches.png";
import WirelessEarbuds from "../../../assets/images/homeSlider/brande/WirelessEarbuds.png";
import WirelessEarphones from "../../../assets/images/homeSlider/brande/WirelessEarphones.png";
import newEmi from "../../../assets/images/homeSlider/new-emi-icon.png";
import Cart from "./Cart";
import CategoriesHed from "../../../assets/images/mobileHed/Categories.svg";
import Orders from "../../../assets/images/mobileHed/Orders.png";
import Contact from "../../../assets/images/mobileHed/contact-us.png";
import privacy from "../../../assets/images/mobileHed/privacy-policy.png";
import PrivacyPolicy from "../../../assets/images/mobileHed/faq.png";
import Logout from "../../../assets/images/mobileHed/Logout.png";
import Terms_Conditions from "../../../assets/images/mobileHed/Terms_Conditions.png";
import Search from "./Search";
import { Cookies } from "react-cookie";

const Nav = () => {
  const cookies = new Cookies();
  const handleRemoveCookie = () => {
    cookies.remove("BSE-authtoken-auto%log_in", { path: "/" });
    // navigate('/')
  };
  const popupRef = useRef(null);
  const navigate = useNavigate();


  const dispatch = useDispatch();
  // const otp = useSelector(state => state.object)
  // const error_message = useSelector(state => state.error_message)
  //// console.log(otp)

  let checkloginPopup = useSelector((state) => state.authReducer.loginPop);
  let userStatus = useSelector((state) => state.authReducer.loggedInStatus);
  let userData = useSelector((state) => state.authReducer.userData);


  const [open, setOpen] = useState(2);

  // useEffect(() => {
  //   if (otp != null) {
  //    // console.log("otp");
  //     setOpen("2")
  //   }
  //   if(error_message!=null){
  //   setOpen("1")
  //  // console.log("otp expire");
  // }
  // }, [otp,error_message])



  // search popup

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const SearchOpenPop = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // popup work js

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [otpOpen, setOtpOpen] = useState(false);
  useEffect(() => {
    if (checkloginPopup) {
      setOtpOpen(true);
    }
  });

  const togglePopupotp = () => {
    // if(checkloginPopup){
    //   setOtpOpen(true);
    // }
    dispatch(loginPopup(false));
    dispatch(emiPopup(true));

    setOtpOpen(!otpOpen);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Header brand ul li show and hide

  const initialItemsToShow = 6;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAll, setShowAll] = useState(windowWidth >= 993);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowAll(window.innerWidth >= 993);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleVisibility1 = () => {
    setShowAll(!showAll);
  };

  // header

  const [showDiv, setShowDiv] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const handleToggle = () => {
    setShowDiv(!showDiv);
  };



  const handleResize = () => {
    setIsDesktop(window.innerWidth > 992);
    if (window.innerWidth <= 992) {
      setShowDiv(true);
    }
  };
  useEffect(() => {
    handleResize();
  }, []);

  const mobileCategoryOpen=()=>{
    setShowDiv(true);
   // console.log("show div open");
  }
  // useEffect(()=>{
  //   setShowDiv(!showDiv);
  // })

 

  // Categories 
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  //// console.log(showMenu ,"hello 1")
  //// console.log(showSidebar, "hello 2")
  const toggleSidebar = () => {
    setShowSidebar(true);
    setShowMenu(true);
    //// console.log(showMenu, "hello 1")
    //// console.log(showSidebar, "hello 2")
  };

  const CloseSideBar = () => {
    // setShowSidebar(!showSidebar);
    // setShowMenu(!showMenu);
    setShowSidebar(false);
    setShowMenu(false);
    //// console.log(showMenu, "hello 1")
    //// console.log(showSidebar, "hello 2")
  };

  const handlSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowMenu(!showMenu);

  };


  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      // setShowSidebar(!showSidebar);
      // setShowMenu(!showMenu);
      // toggleSidebar()
      CloseSideBar()
      setShowDiv(false )


    }
  };


  // const handleInnerClick = (event) => {
  //   event.stopPropagation();
  // };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <TopNab />
      <div className="App header_bar">
        <nav className="navbar navbar-expand-lg navbar-light ">
          {/* Set direction to RTL and hide horizontal overflow */}
          <nav className={`navbar navbar-light ${showSidebar ? "open" : ""}`}>
            {showMenu && showSidebar ?

              <div className="navbar_toggler"  >
                <span className="close_x" ><b>X</b></span>
              </div>
              :

              <div className="navbar_toggler" onClick={toggleSidebar}>
                <button className="navbar-toggler-icon" ></button>
              </div>
            }

            {/* <button className="navbar-toggler-icon" onClick={toggleSidebar}></button> */}

            <Link className="navbar-brand" to="/" onClick={() => {
              showDiv ? handleToggle() : null
              CloseSideBar()
            }}>
              <img src={Brandlogo} className="App_logo" alt="logo" />
            </Link>
          </nav>

          {/* Sidebar */}
          <div className={`sidebar ${showSidebar ? "active" : ""}`} >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"
              //  onClick={handleInnerClick}
              ref={popupRef}>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li> */}
              <li className="nav-item brand_item ">
                {isDesktop && (
                  // <button onClick={handleToggle}>
                  //   {showDiv ? 'Hide Div' : 'Show Div'}
                  // </button>
                  <>
                    <a
                      className="nav-link drop_down_toggle  "
                      onClick={handleToggle}
                    >
                      <span className="right_get">
                        {" "}
                        <img src={CategoriesHed} /> Categories{" "}
                      </span>
                      <span className="categories_m">-</span>{" "}
                      <span className="categories_p">+</span>
                    </a>
                  </>
                )}
                {!isDesktop && (
                  // <button onClick={handleToggle}>
                  //   {showDiv ? 'Show Div' : 'Hide Div'}
                  // </button>
                  <>
                    <a
                      className="nav-link drop_down_toggle "
                      onClick={handleToggle}
                    >
                      <span className="right_get">
                        {" "}
                        <img src={CategoriesHed} /> Categories{" "}
                      </span>
                      <span className="categories_m">-</span>{" "}
                      <span className="categories_p">+</span>
                    </a>
                  </>
                )}
                {showDiv && (
                  <ul className="Categories list">
                    <li onClick={CloseSideBar}>
                      <Link
                        to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                          "Smart Phones"
                        )}&offer=${encodeURIComponent(
                          JSON.stringify({ category: "Smart Phones" })
                        )}`}
                        className={`dropdown-item ${showAll || initialItemsToShow >= 1 ? "show" : "hide"
                          }`}
                        onClick={handleToggle}
                      >
                        <img src={Phone} className="App_Brand" alt="logo" />
                        <p>Smart Phone</p>
                      </Link>
                    </li>
                    <li onClick={CloseSideBar}>
                      <Link
                        to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                          "Smart Watches"
                        )}&offer=${encodeURIComponent(
                          JSON.stringify({ category: "Smart Watches" })
                        )}`}
                        className={`dropdown-item ${showAll || initialItemsToShow >= 1 ? "show" : "hide"
                          }`}
                        onClick={handleToggle}
                      >
                        <img
                          src={Smartwatches}
                          className="App_Brand"
                          alt="logo"
                        />
                        <p>Smart watches</p>
                      </Link>
                    </li>
                    <li onClick={CloseSideBar}>
                      <Link
                        to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                          "EarBuds"
                        )}&offer=${encodeURIComponent(
                          JSON.stringify({ category: "EarBuds" })
                        )}`}
                        className={`dropdown-item ${showAll || initialItemsToShow >= 1 ? "show" : "hide"
                          }`}
                        onClick={handleToggle}
                      >
                        <img
                          src={WirelessEarbuds}
                          className="App_Brand"
                          alt="logo"
                        />
                        <p>Wireless Earbuds</p>
                      </Link>
                    </li>
                    <li onClick={CloseSideBar}>
                      <Link
                        to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                          "NeckBands"
                        )}&offer=${encodeURIComponent(
                          JSON.stringify({ category: "NeckBands" })
                        )}`}
                        className={`dropdown-item ${showAll || initialItemsToShow >= 1 ? "show" : "hide"
                          }`}
                        onClick={handleToggle}
                      >
                        <img
                          src={WirelessEarphones}
                          className="App_Brand"
                          alt="logo"
                        />
                        <p>Wireless Earphones</p>
                      </Link>
                    </li>
                    {/*  <li>
                      <a
                        className={`dropdown-item ${showAll || initialItemsToShow >= 1 ? "show" : "hide"
                          }`}
                      >
                        <img src={Brand} className="App_Brand" alt="logo" />
                        <p>Action</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${showAll || initialItemsToShow >= 1 ? "show" : "hide"
                          }`}
                      >
                        <img src={Brand} className="App_Brand" alt="logo" />
                        <p>Action</p>
                      </a>
                    </li> */}

                    {showAll && (
                      <>
                        {/* <li>
                          <a
                            className={`dropdown-item ${showAll || initialItemsToShow >= 1
                              ? "show"
                              : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${showAll ? "show" : "hide"
                              }`}
                          >
                            <img src={Brand} className="App_Brand" alt="logo" />
                            <p>Action</p>
                          </a>
                        </li> */}
                        {/* Add more items here if needed */}
                      </>
                    )}

                    {!showAll && windowWidth <= 992 && (
                      <p onClick={toggleVisibility1} className="toggle_btn">
                        Expand More{" "}
                        <i className="fa fa-arrow-circle-o-down"></i>
                      </p>
                    )}
                    {showAll && windowWidth <= 992 && (
                      <p onClick={toggleVisibility1} className="toggle_btn">
                        Expand Less <i className="fa fa-arrow-circle-o-up"></i>
                      </p>
                    )}
                  </ul>
                )}

                {/* brande ul li   */}
              </li>

              <li className="nav-item mobileShowAvailableLimit" onClick={CloseSideBar}>
                {userStatus ? (
                  <Link className="AvailableLimit">
                    <span>
                      <span className="cort">₹ </span>Credit Limit :
                    </span>{" "}
                    <span>{" "}
                      <b>
                        {" "}
                      ₹
                      {userData &&
                          Number(userData.availableLimit).toLocaleString()}
                      </b>{" "}
                    / ₹
                    {userData && Number(userData.creditLimit).toLocaleString()}
                    </span>
                  </Link>
                ) : (
                  <></>
                )}
              </li>

              {userStatus ? (
                <li className="nav-item" onClick={() => {
                  showDiv ? handleToggle() : null
                  CloseSideBar()
                }}>
                  <Link className="nav-link" to="/order-history">
                    <img src={Orders} />
                    Orders
                  </Link>
                </li>
              ) : (
                <></>
              )}

              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Brands
                </Link>
              </li> */}
              <li className="nav-item" onClick={() => {
                showDiv ? handleToggle() : null
                CloseSideBar()
              }}>
                <Link className="nav-link" to="/support">
                  <img src={Contact} />
                  Contact Us
                </Link>
              </li>

              {userStatus ? (
                <li className="nav-item mobileShow" onClick={() => {
                  showDiv ? handleToggle() : null
                  CloseSideBar()
                }}>
                  <Link className="nav-link" to="/pay-emi">
                    <img src={privacy} />
                    Pay EMI
                  </Link>
                </li>
              ) : (
                <></>
              )}

              <li className="nav-item mobileShow" onClick={() => {
                showDiv ? handleToggle() : null
                CloseSideBar()
              }}>
                <Link className="nav-link" to="/terms-and-conditions">
                  <img src={Terms_Conditions} />
                  Terms and Conditions
                </Link>
              </li>
              <li className="nav-item mobileShow" onClick={() => {
                showDiv ? handleToggle() : null
                CloseSideBar()
              }}>
                <Link className="nav-link" to="/privacy-policy">
                  <img src={PrivacyPolicy} />
                  Privacy Policy
                </Link>
              </li>
              {userStatus ? (
                <li className="nav-item mobileShow" onClick={() => {
                  showDiv ? handleToggle() : null
                  CloseSideBar()
                }}>
                  <a className="nav-link" href="/" onClick={handleRemoveCookie} >
                    <img src={Logout} />
                    Log Out
                  </a>
                </li>
              ) : (
                <></>
              )}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>

          {/* <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Element' : 'Show Element'}
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <p>This is the content you want to show/hide using CSS.</p>
      </div>
    </div> */}

          {/* <form
            className={
              isVisible
                ? " hidden hd_search_header "
                : " visible hd_search_header "
            }
            style={{ display: isVisible ? "block" : "none" }}
          >
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fa fa-search"></i>
            </button>
            <div className="search_icon" onClick={toggleVisibility}>
              X
            </div>
          </form> */}

          {isSearchOpen && (
            <Search isSearchOpen={isSearchOpen} SearchOpenPop={SearchOpenPop} />
          )}

          <div className="cart">
            {/* <div className="search_icon" onClick={toggleVisibility}>
              <i className="fa fa-search"></i>
            </div> */}

            {userStatus ? (
              <Link className="PayEMI" to="/pay-emi" onClick={() => {
                showDiv ? handleToggle() : null
                CloseSideBar()
              }}>
                {/* <img className="newEmi" src={newEmi} /> */}
                <i class="fa fa-clock-o"></i>
                Pay EMI
              </Link>
            ) : (
              <></>
            )}

            <p className="AvailableLimit" onClick={() => {
              showDiv ? handleToggle() : null
              CloseSideBar()
            }}>
              {userStatus ? (
                <>
                  <span className="cort">₹</span>
                  <span className="ApprovedAvailableLimit">
                    Available Limit:₹
                    {userData &&
                      Number(userData.availableLimit).toLocaleString()}{" "}
                    Approved Limit:₹
                    {userData && Number(userData.creditLimit).toLocaleString()}
                  </span>
                </>
              ) : (
                <></>
              )}
            </p>
<div className="searchAndProfile">
            <button
              className="btn SearchOpenPop"
              type="submit"
              onClick={SearchOpenPop}
            >
              <i className="fa fa-search" onClick={() => {
                showDiv ? handleToggle() : null
                CloseSideBar()
              }}></i>
            </button>
            <div className="user_icon" onClick={() => {
              showDiv ? handleToggle() : null
              CloseSideBar()
            }}>
              {userStatus ? (
                <NavLink to={"/user/profile"} >
                  {" "}
                  <i
                    className="fa fa-user-circle-o"
                    onClick={togglePopupotp}
                  ></i>
                </NavLink>
              ) : (
                <i className="fa fa-user-circle-o" onClick={togglePopupotp}></i>
              )}
            </div></div>
            {/* <div className="cart_icon" onClick={togglePopup}>
              {" "}
              <i className="fa fa-shopping-bag" onClick={() => {
                showDiv ? handleToggle() : null
                CloseSideBar()
              }}></i>
            </div> */}
          </div>
        </nav>
      </div>
      {/* ---------------> cart Section <----------------- */}
      {isOpen && (
        // <div className="popup popup_open cart_port">
        //   <div className="popup-content">
        //     <div className="popup-content_dttg">
        //       <p className="popup_close" onClick={togglePopup}>
        //         X
        //       </p>
        //       <h2>Your Cart</h2>

        //       {/* when cart product show   */}
        //       <div className="productaddincart">
        //         <div class="signin_redeem please_signin">
        //           <div class="signin_text">
        //             Sign in to Redeem boAt reward points on this order
        //           </div>
        //           <div class="signin_btn login-popup-trigger">Sign In Now</div>
        //         </div>
        //         <div className="productincart">
        //           <div className="imgProd">
        //             <img src={Categories} />
        //           </div>
        //           <div className="product_int">
        //             <div className="prodt">
        //               <p className="productNme">product name</p>
        //               <p className="productprc">₹1,499</p>
        //             </div>
        //             <div className="productcolorndproductints">
        //               <p className="productColor">Red</p>
        //               <p className="productaddints">
        //                 <span>-</span>
        //                 <span>01</span>
        //                 <span>+</span>
        //               </p>
        //             </div>
        //           </div>
        //           <div className="totelp">
        //             <p className="totle_price">
        //               ₹ 1,099
        //               <span>Inclusive of all taxes</span>
        //             </p>
        //             <p className="ConfirmOrder">Confirm Order</p>
        //           </div>
        //         </div>

        //         <div className="productDataInput header_emi_set">
        //           <p className="emiAddres">
        //             <b>For EMI purchase, please enter your delivery address</b>
        //           </p>
        //           <div className="addressInput">
        //             <div className="relative ">
        //               <input
        //                 id="addressLineOne"
        //                 type="text"
        //                 className="peer"
        //                 placeholder=" Flat / House no / Building / Company name"
        //                 autocomplete="off"
        //                 pattern=""
        //                 inputmode="text"
        //                 value=" "
        //               />
        //             </div>
        //             <div className="relative ">
        //               <input
        //                 id="addressLineTwo"
        //                 type="text"
        //                 className="peer"
        //                 placeholder=" Area / Colony / Street / Village"
        //                 autocomplete="off"
        //                 pattern=""
        //                 inputmode="text"
        //                 value=""
        //               />
        //             </div>
        //             <div className="relative ">
        //               <input
        //                 id="landmark"
        //                 type="text"
        //                 className="peer"
        //                 placeholder=" Landmark"
        //                 autocomplete="off"
        //                 pattern=""
        //                 inputmode="text"
        //                 value=""
        //               />
        //             </div>
        //             <div className="pincodendcity">
        //               <div className="relative ">
        //                 <input
        //                   id="pinCode"
        //                   type="text"
        //                   className="peer"
        //                   placeholder=" Pin Code"
        //                   autocomplete="off"
        //                   pattern=""
        //                   inputmode="text"
        //                   value=""
        //                 />
        //               </div>
        //               <div className="relative ">
        //                 <input
        //                   id="city"
        //                   type="text"
        //                   className="peer"
        //                   placeholder=" City"
        //                   autocomplete="off"
        //                   pattern=""
        //                   inputmode="text"
        //                   value=""
        //                 />
        //               </div>
        //             </div>
        //           </div>

        //           <div className="addNewAddresDiv">
        //             <div className="form-check">
        //               <input
        //                 className="form-check-input"
        //                 type="radio"
        //                 name="flexRadioDefault"
        //                 id="flexRadioDefault1"
        //               />
        //               <label
        //                 className="form-check-label"
        //                 for="flexRadioDefault1"
        //               >
        //                 1 address{" "}
        //               </label>
        //             </div>
        //             <div className="form-check">
        //               <input
        //                 className="form-check-input"
        //                 type="radio"
        //                 name="flexRadioDefault"
        //                 id="flexRadioDefault2"
        //               />
        //               <label
        //                 className="form-check-label"
        //                 for="flexRadioDefault2"
        //               >
        //                 2 address{" "}
        //               </label>
        //             </div>
        //           </div>
        //           <div className="pay_ment_get_but">
        //             <button className=" bg-secondaryText">
        //               Deliver to this address
        //             </button>
        //             <button className="addNewAddress">
        //               {" "}
        //               + Add New Address
        //             </button>
        //           </div>
        //         </div>
        //       </div>

        //       {/* emty cart then */}

        //       {/* <div className="card_bagg_dv">
        //       <div className="add_to_care_dv">
        //         <img src={CsrtBaf} />
        //         <p>Your cart is feeling lonely</p>
        //         <a>Start shopping</a>
        //       </div>
        //     </div>             */}
        //     </div>
        //   </div>
        // </div>
        <Cart togglePopup={togglePopup} isOpen={isOpen} />
      )}

      {/* AuthProcess.... */}
      {otpOpen && <AuthProcess togglePopupotp={togglePopupotp} />}

      {/* otp first popup screen

      {(otpOpen &&open==1) && (<AuthFirstEnterNoPopup togglePopupotp={togglePopupotp} />)}
         
      {/* after open when add mobile number otp  second_screen  */}

      {/* {(otpOpen &&open==2) && (<AuthSecondEnterOtpPopup togglePopupotp={togglePopupotp} />)} */}

      {/*after otp enter. then open popup  thread screen  */}

      {/* {(otpOpen && open==3) && (<AuthThirdSignupDetailsPopup togglePopupotp={togglePopupotp} />)}  */}

      {/* Full ditel add after open  finel_screen*/}

      {/* {(otpOpen &&open==4) && (<AuthFinalSuccessLoginPopup togglePopupotp={togglePopupotp} />)} */}

      <div className="footer_icon">
        <div className="fot_icon" onClick={() => {
          showDiv ? handleToggle() : null
          CloseSideBar()
        }}>
          <Link to="/">
          <i class="fa fa-home"></i>
          <p>Home</p>
          </Link>
         
        </div>

        {userStatus ? (
          <div className="fot_icon" onClick={() => {
            showDiv ? handleToggle() : null
            CloseSideBar()
          }}>
            <Link to ="/order-history">
            
           <i class="fa fa-codepen"></i>
            <p>order</p>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className="fot_icon">
          <button
            className="navbar_toggler"
            type="button"
            onClick={toggleSidebar}
          >
            {showMenu ? (
              <>
             <i class="fa fa-delicious" onClick={mobileCategoryOpen}></i>
                <p onClick={mobileCategoryOpen}>Categories</p>{" "}
              </>
            ) : (
              <>
               
                <i onClick={mobileCategoryOpen} class="fa fa-delicious"></i>
                <p onClick={mobileCategoryOpen}>Categories</p>
              </>
            )}
          </button>
        </div>

        {userStatus ? (
          <div className="fot_icon" onClick={() => {
            showDiv ? handleToggle() : null
            CloseSideBar()
          }}>
            <Link to="/pay-emi">
            <i class='fa fa-lock'></i>
            <p>Pay EMI </p>
            </Link>
          </div>
        ) : (
          <></>
        )}

        <div className="fot_icon" onClick={() => {
          showDiv ? handleToggle() : null
          CloseSideBar()
        }}>
           <Link to="/support">
           <i class="fa fa-phone"></i>
          <p>Contact Us</p>
          </Link>
          
        </div>
      </div>

      <style>
        {`
  
  /* styles.css */
  button.navbar_toggler span.close_x {
    font-size: 22px;
    color:#000;
}
  p.toggle_btn {
    width: 100%;
    text-align: center;
    color: #2F5B96;
    font-size: 14px;
    border-radius: 20px;
}
  .list {
    list-style: none;
    padding: 0;
  }
  .list-item {
    display: block;
  }
  .hide {
    display: none;
  }
  .fot_icon p {
    font-size: 10px !important;
    letter-spacing: -0.4px;
    color: #1a2024;
    margin-top: 4px !important;
    font-weight: 500;
    margin: 0;
}
.fot_icon img {
  width: 28px;
  height: 28px;
}
.popup-content_dttg {
  position: relative;
  width: 100%;
  height: 100%;
}
.signin_redeem.please_signin {
  padding: 14px 7px;
  border-radius: 10px;
  border: solid 1px #e8ebed;
  background-color: #eff3f5;
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: calc(100% - 30px);
  width: calc(100% - 30px);
  margin: 0 auto 20px;
}
.signin_text {
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -.48px;
}
.signin_btn.login-popup-trigger {
  width: 50%;
  height: 31px;
  padding: 7px 10px;
  border-radius: 6px;
  background-color: #1b2024;
  color: #fff;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.productincart {
  display: flex;
  width: 100%;
}
.productincart .imgProd {
  width: 60px;
}
.productincart .imgProd img {
  width: 100%;
}
p.productNme {
  font-size: 14px;
  color: #000;
  font-weight: 500;
}
p.productprc {
  color: #3c3c3b;
  font-size: 18px;
  font-weight: 700;
}
.product_int,  .prodt {
  width: 100%;
}
.productcolorndproductints {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
p.productaddints span:nth-child(1) {
  background: #eff3f5;
  color: #1a2024;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: none;
  font-weight: 500;
  display: flex;
  height: 19px;
  width: 19px;
  align-items: center;
  justify-content: center;
}
p.productaddints {
  display: flex;
}
p.productaddints span:nth-child(1) {
  background: #eff3f5;
  color: #1a2024;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: none;
  font-weight: 500;
  display: flex;
  height: 19px;
  width: 19px;
  align-items: center;
  justify-content: center;
}
p.productaddints span:nth-child(2) {
  font-weight: 500;
  text-align: center;
  background: 0 0;
  border: none;
  appearance: none;
  font-size: 14px;
  padding: 0 5px;
}
p.productaddints span:nth-child(3) {
  background: #eff3f5;
  color: #1a2024;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;
  font-weight: 500;
  display: flex;
  height: 19px;
  width: 19px;
  align-items: center;
  justify-content: center;
}
p.productColor {
  border: none;
  font-size: 12px;
  padding: 0px;
  color: #1a2024;
  font-weight: 500;
  background-color: #bcbcbc;
  width: 40px;
  text-align: center;
  border-radius: 5px;
}


.pincodendcity {
  display: flex;
  justify-content: space-between;
}
.pincodendcity .relative {
  width: 45%;
}
p.ConfirmOrder {
  background: #1A2024;
  border: 1px solid #1A2024;
  padding: 9px 8px;
  border-radius: 10px!important;
  color: #fff;
  font-size: 14px!important;
  font-weight: 500!important;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 117px;
}
.totelp {
  position: absolute;
  bottom: 0;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
}
p.totle_price {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 700;
}
p.totle_price span {
  font-weight: 400;
}


 .productaddincart {
  height: 100vh;
  overflow-x: scroll;
  padding-bottom: 117px;
  padding-right: 15px;
}
.header_emi_set .pay_ment_get_but button.bg-secondaryText {
  width: 200px;
  border-radius: 15px;
}
.header_emi_set {
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
}
.header_emi_set button.addNewAddress {
  width: 185px !important;
}
.searchAndProfile {
  display: flex;
  width: 50px;
  justify-content: space-between;
}


.header_emi_set .paymentgetaddress {
  width: 450px;
  margin: 0 auto;
}
.header_emi_set .smptPayment {
border: 1px solid;
padding: 15px 10px;
border-radius: 10px;
margin-bottom: 15px;
}
.header_emi_set .paymentgetaddress .snap-card {
display: flex;
align-items: center;
}
.header_emi_set .paymentgetaddress .snap-card .PayNow {
display: flex;
}
.header_emi_set .pay_emiInt {
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
}
.header_emi_set .pay_emiInt p {
margin-bottom: 0 !important;
}
.header_emi_set .productDataInput {
border: 1px solid;
padding: 5px 10px;
border-radius: 10px;
}
.header_emi_set p.emiAddres {
margin: 10px 0;
}
.header_emi_set .relative input {
padding: 10px 10px;
width: 100%;
margin-bottom: 5px;
border-radius: 5px;
}
.header_emi_set .pay_ment_get_but {
display: flex;
flex-direction: column;
}
.header_emi_set .pay_ment_get_but button {
  background-color: gray;
  width: 210px;
  margin: 10px auto;
  border-radius: 5px;
}
.header_emi_set .pay_ment_get_but button.addNewAddress {
background-color: transparent;
color: #000;
}
.header_emi_set .EMI_Plans p {
text-align: center;
font-size: 14px;
font-weight: 600;
}
.header_emi_set .singelePage .singleProductOPopup {
background-color: transparent;
}
.header_emi_set .singelePage .singleProductOPopup .mane .cardBox {
padding: 15px 10px;
}
.header_emi_set .singelePage .singleProductOPopup .mane {
width: 485px;
padding: 15px 5px;
}
.header_emi_set .singelePage .form-check input {
display: block !important;
}
.popup_open .popup-content {
  padding: 0 0 0 25px;
}






  @media (max-width: 768px) {
    .hide:nth-child(n+6) {
      display: none;
    }
  
    .toggle-btn {
      display: block;
      margin-top: 10px;
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  `}
      </style>
    </>
  );
};

export default Nav;

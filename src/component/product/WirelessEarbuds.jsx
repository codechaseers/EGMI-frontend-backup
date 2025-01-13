// i work this file 12/22/2023
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Filter from "../../assets/images/productList/icon/svgviewer-png-output.png";
import rightFilter from "../../assets/images/productList/icon/sort_2_1.png";
import ItemImg from "../../assets/images/homeSlider/brande/brande1.webp";
import EgmiLogo1 from "../../assets/Logo/EgmiLogo1.gif";
import Pay49card from "../homePage/Pay49Card";

import Star from "../../assets/images/homeSlider/svgviewer.png";
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import FilterPageProductCard from "./FilterPageProductCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
// import MultiRangeSlider from "./testing (1)"
import Slider from "@mui/material/Slider";

{
  /* <hello > */
}
function ProductPage() {
  const popupRef = useRef(null);
  const popupRef1 = useRef(null);

  const [price, Setprice] = useState([0, 200000]);
  const handleChange = (eventn, newprice) => {
    // console.log(price[0]);
    // console.log(price[1]);
    Setprice(newprice);
  };
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  let [heading, setHeading] = useState(params.get("heading"));
  const [offers, setOffers] = React.useState(JSON.parse(params.get("offer")));
  useEffect(() => {
    let newOffers = params.get("offer");
    setOffers(newOffers ? JSON.parse(newOffers) : {});
    setHeading(params.get("heading"));
  }, [location]);
  // const heading = params.get('heading');
  // let offers = params.get('offer');

  // let { params } = useParams();
  //  let offers = JSON.parse(params)

  // offers=JSON.parse(offers)

  // let { params } = useParams();
  //  let offers = JSON.parse(params)
  //// console.log(offers);

  // console.log(heading + "XXXXXXXXXXXXXXXXXXXXX");
  // console.log(JSON.stringify(offers) + "XXXXXXXXXXXXXXXXXXXXX");

  // popup state declear
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Out side click popup handel

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      // setShowSidebar(!showSidebar);
      // setShowMenu(!showMenu);
      // toggleSidebar()
      togglePopup();
      
      
      // console.log(showPopup);
    } 
    if (popupRef1.current && !popupRef1.current.contains(event.target)) {
  
      toggleDropdown()
   
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // drop down state declear
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Radio Button Group
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (option, e) => {
    // console.log(option);
    setSelectedOption(option);
  };

  // ---------------------------------> Featured Section Logic <-------------------------

  const [selecteFeaturedTitle, setSelecteFeaturedTitle] = useState(null);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelecteFeaturedTitle(value);
    toggleDropdown()
    // console.log(`Selected radio value: ${value}`);
  };

  //  -------------------------> Filter Selection Logoc <----------------------------

  // ----------------->Filter Section All check Box  States <-------------------
  const [downpaymentElement, SetDownpaymentElement] = useState([
    49, 149, 249, 349, 449, 949,
  ]);
  const [categoryElement, SetCcategoryElement] = useState([
    "EarBuds",
    "Smart Watches",
    "NeckBands",
    "Smart Phones",
  ]);
  const [brandElement, SetBrandElement] = useState([
    "Mi",
    "Boat",
    "Apple",
    "Noise",
    "Fire Boalt",
    "Oppo",
    "Realme",
    "Samsung",
    "Vivo",
  ]);

  const [downpayment, setDownpayment] = useState([]);
  const [selectColors, setSelectColors] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [bestSeleing, setBestSeleing] = useState(false);
  const trending=useRef(false)
  // const [trending, setTrending] = useState(false);
   
  const [topDeals, setTopDeals] = useState(false);
  const [priceLowtoHigh, setPriceLowtoHigh] = useState();
  const [priceHightoLow, setPriceHightoLow] = useState();
  const [hasmoreStatus, setHasmoreStatus] = useState(true);


  if (offers) {
    var { downPayment, category,sort, brand, maxPrice, minPrice } = offers;
  }

  // --------------- Sensitive Code 👀------------------

  useEffect(() => {
    if (category) {
      // var{ downPayment, category, sort, brand, maxPrice, minPrice } = offers

      setSelectCategory(category ? [category] : []);
    }
  }, [offers]);

  // --------------- Sensitive Code 👀 ------------------

  //// console.log(downPayment, category, sort, brand);
  // ------------------------------------------> Sort by Logic For API <---------------------------
  const sortBy = () => {
    if (selecteFeaturedTitle == "Featured") {
      setFeatured(true);
    } else {
      setFeatured(false);
    }
    if (selecteFeaturedTitle == "Best selling") {
      setBestSeleing(true);
    } else {
      setBestSeleing(false);
    }
    if (selecteFeaturedTitle == "Trending") {
      // setTrending(true);
      trending.current=true
    } else {
      // setTrending(false);
      trending.current=false
    }
    if (selecteFeaturedTitle == "Top Deals") {
      setTopDeals(true);
    } else {
      setTopDeals(false);
    }
    // if(selecteFeaturedTitle=="Price Low to High"){
    //   setPriceLowtoHigh("asc")
    // }
    // else{
    //   setTopDeals()

    // }
    // if(selecteFeaturedTitle=="Price Low to High"){
    //   setPriceHightoLow("dsc")
    // }
    // else{
    //   setTopDeals()

    // }
  };
  useEffect(() => {
    sortBy();
    // console.log(selecteFeaturedTitle);
    //  console.log(featured, bestSeleing, trending, topDeals);
  }, [ sortBy,offers]);

  //  -------------------------> function for Down payment Check box <-------------------------

  const handleCheckBoxChange = (price) => {
    if (downpayment.includes(price)) {
      setDownpayment(
        downpayment.filter((selectedpayment) => selectedpayment !== price)
      );
    } else {
      setDownpayment([...downpayment, price]);
    }
  };

  //  -------------------------> function for Color Check box <-------------------------

  const handleCheckBoxChange2 = (color) => {
    if (downpayment.includes(color)) {
      setSelectColors(
        selectColors.filter((selectedcolor) => selectedcolor !== color)
      );
    } else {
      setSelectColors([...selectColors, color]);
    }
  };

  //  -------------------------> function for Category Check box <-------------------------

  const handleCheckBoxChange3 = (category) => {
    if (selectCategory.includes(category)) {
      setSelectCategory(
        selectCategory.filter(
          (selectedcategory) => selectedcategory !== category
        )
      );
    } else {
      setSelectCategory([...selectCategory, category]);
    }
  };

  //  -------------------------> function for Brand Check box <-------------------------

  const handleCheckBoxChange4 = (brand) => {
    if (selectBrand.includes(brand)) {
      setSelectBrand(
        selectBrand.filter((selectedbrand) => selectedbrand !== brand)
      );
    } else {
      setSelectBrand([...selectBrand, brand]);
    }
  };
  // ------------------------------> Checked If params avelbale <----------------
  useEffect(() => {
    if (downPayment) {
      downpaymentElement.forEach((element) => {
        if (downPayment == element) {
          handleCheckBoxChange(downPayment);
        }
      });
    }
    if (category) {
      categoryElement.forEach((element) => {
        if (category == element) {
          handleCheckBoxChange3(category);
        }
      });
    }

    if (brand) {
      brandElement.forEach((element) => {
        if (brand == element) {
          handleCheckBoxChange4(brand);
        }
      });
    }
    if (sort) {
      setSelecteFeaturedTitle(sort);
    }

    // if(maxPrice){
    //   Setprice((prev)=>([prev[0],maxPrice]))
    // }
    // if(minPrice){
    //   Setprice((prev)=>([minPrice,prev[1]]))
    // }
    // if(minPrice && maxPrice){
    //   Setprice((prev)=>([minPrice,maxPrice]))
    // }

    if (maxPrice || minPrice) {
      if (minPrice) {
        Setprice([minPrice, price[1]]);
      }

      if (maxPrice) {
        Setprice([price[0], maxPrice]);
      }
      if (minPrice && maxPrice) {
        Setprice([minPrice, maxPrice]);
      }
    } else {
      Setprice([price[0], price[1]]);
    }
  }, []);

  //  -------------------------> function for Clearr All  Check box <-------------------------

  function clearAll() {
    setDownpayment([]);
    setSelectColors([]);
    setSelectBrand([]);
    setSelectCategory([]);
  }

  //  -------------------------> function for Delet Filter Component <------------------------
  const handleDelete = (i) => {
    // const deleteVal = [...selectBrand];
    selectBrand.splice(i, 1);
    //// console.log(i);
    setSelectBrand(selectBrand);
  };

  const handleDelete2 = (i) => {
    selectCategory.splice(i, 1);
    // console.log(selectCategory);
    setSelectCategory((prev) => [...prev]);
  };

  const handleDelete3 = (i) => {
    selectColors.splice(i, 1);

    setSelectColors(selectColors);
  };

  const handleDelete4 = (i) => {
    downpayment.splice(i, 1);

    setDownpayment(downpayment);
  };
  //-------------------------> Filter Selection Logoc  End<----------------------------
  //// console.log(downpayment);
  //// console.log(selectColors);
  //// console.log(selectBrand);
  //// console.log(selectCategory);

  //-------------------------> Filter API Call Section <----------------------------

  const [apiData, SetApidata] = useState([]);
  let [page, setPage] = useState();

  async function getData(pageno) {
    try {
      //// console.log(selectCategory);
      // console.log(page + "ooooooooooooooooooooooooooooooo");
      const data = await axios.get(
        ` ${import.meta.env.VITE_BASE_URL}/products?minPrice=${
          price[0]
        }&maxPrice=${price[1]}&categories= ${JSON.stringify(
          selectCategory
        )}&brands=${JSON.stringify(selectBrand)}&downPayment=${JSON.stringify(
          downpayment
        )}&bestSelling=${bestSeleing}&trending=${trending.current}&topDeals=${topDeals}&sortBy=dp&orderBy=asc&page=${pageno}&limit=10`
      );
      if (data.data.data.length == 0) {
        setHasmoreStatus(false);
      }
      // data=JSON.parse(data.data.allProduct49s)
      // console.log(data.data);
      // console.log(selectCategory);
      // console.log("api page " + pageno);
      // SetApidata(apiData.concat(data.data.data));
      if (pageno == 0) {
        SetApidata([]);
      }
      SetApidata((prev) => {
        return prev.concat(data.data.data);
      });
    } catch (error) {
      // console.log(error);
    }
  }
  // -------------------------------------> Function for Next page Ading <-----------------------------

  const nextPage = () => {
    // setPage(page+1)
    // if need then you can add set time out ⏲️⏲
    // orginal way of adding state --------------->
    setTimeout(() => {
      setPage((prev) => {
        // console.log("next page" + prev);
        return prev + 1;
      }); 
    }, 2000);
    
  };

  useEffect(() => {
    setPage(0);
    SetApidata([]);
    // console.log(trending)

    getData(page);
  }, [
   featured,
    selectBrand,
    bestSeleing,
    selectCategory,
    downpayment,   
    trending.current,
    topDeals,
    price[0],
    price[1],
    sort
  ]);

  useEffect(() => {
   
     
        getData(page);
        
   

    // console.log(apiData);
  }, [page]);
  // console.log(page);

  // console.log(apiData);

  return (
    <>
      <div className="product_page">
        {/* <section className="collection_mobile_banner_section">
          <div className="breadcrumb container_with_banner_mob">
            <ol className="breadcrumb__list" role="list">
              <li className="breadcrumb__item">
                <Link className="breadcrumb__link" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb__item">
                <span className="breadcrumb__link"> {heading && heading}</span>
              </li>
            </ol>
          </div>
        </section> */}
        <section className="product_list_set">
          <div className="container_with_banner_mob">
            <h1 className="heading h1"> {heading && heading}</h1>
            <div className="Filter_dev">
              <button className="filter_bt" onClick={togglePopup}>
                <img src={Filter} />
                Filter By <i className="fa fa-angle-down"></i>
              </button>

              <button className="right_filter_a_to_z" onClick={toggleDropdown}>
                <img src={rightFilter} />
                <b>
                  Sort by <span>:</span>
                </b>{" "}
                <span>
                  {selecteFeaturedTitle ? selecteFeaturedTitle : "Featured"}
                </span>
              </button>
              {showDropdown && (
              <div className=" Sort_by_Featured" ref={popupRef1}>
                  <div className="mane">
                    {/* --------------> Featured Opetion Section Start  <------------- */}
                    <div className="sort_by_fliter">
                      <p className="Filter_p_tag">
                        <img src={Filter} /> Sort by : 
                         {selecteFeaturedTitle ? selecteFeaturedTitle : "Featured"}
                      </p>
                      <span onClick={toggleDropdown} className="close-button">
                        X
                      </span>
                    </div>
                    <div


                      className={
                        selecteFeaturedTitle == "Featured"
                          ? " active"
                          : "noactive"
                      }
                    >
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Featured"
                          checked={selecteFeaturedTitle === "Featured "}
                          // checked={selectedValue === 'b'}
                          onChange={handleRadioChange}
                        />
                        Featured
                        {selecteFeaturedTitle == "Featured" ? (
                          <i class="fa fa-check mx-4"></i>
                        ) : (
                          <></>
                        )}
                      </label>
                    </div>

                    <div
                      className={
                        selecteFeaturedTitle == "Best selling"
                          ? " active"
                          : "noactive"
                      }
                    >
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Best selling"
                          checked={selecteFeaturedTitle === "Best selling"}
                          // checked={selectedValue === 'b'}
                          onChange={handleRadioChange}
                        />
                        Best selling
                        {selecteFeaturedTitle == "Best selling" ? (
                          <i class="fa fa-check   mx-4"></i>
                        ) : (
                          <></>
                        )}
                      </label>
                    </div>
                         {/* ---------------- price low to high option ---------------- */}
                    {/* <div
                      className={
                        selecteFeaturedTitle == "Price Low to High"
                          ? " active"
                          : "noactive"
                      }
                    >
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Price Low to High"
                          checked={selecteFeaturedTitle === "Price Low to High"}
                          // checked={selectedValue === 'b'}
                          onChange={handleRadioChange}
                        />
                        Price Low to High
                        {selecteFeaturedTitle == "Price Low to High" ? (
                          <i class="fa fa-check  mx-4"></i>
                        ) : (
                          <></>
                        )}
                      </label>
                    </div>

                    <div
                      className={
                        selecteFeaturedTitle == "Price High to Low"
                          ? " active"
                          : "noactive"
                      }
                    >
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Price High to Low"
                          checked={selecteFeaturedTitle === "Price High to Low"}
                          // checked={selectedValue === 'b'}
                          onChange={handleRadioChange}
                        />
                        Price High to Low
                        {selecteFeaturedTitle == "Price High to Low" ? (
                          <i class="fa fa-check  mx-4 "></i>
                        ) : (
                          <></>
                        )}
                      </label>
                    </div> */}

                    <div
                      className={
                        selecteFeaturedTitle == "Trending"
                          ? " active"
                          : "noactive"
                      }
                    >
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Trending"
                          checked={selecteFeaturedTitle === "Trending"}
                          // checked={selectedValue === 'b'}
                          onChange={handleRadioChange}
                        />
                        Trending
                        {selecteFeaturedTitle == "Trending" ? (
                          <i class="fa fa-check mx-4"></i>
                        ) : (
                          <></>
                        )}
                      </label>
                    </div>

                    <div
                      className={
                        selecteFeaturedTitle == "Top Deals"
                          ? " active"
                          : "noactive"
                      }
                    >
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Top Deals"
                          checked={selecteFeaturedTitle === "Top Deals"}
                          // checked={selectedValue === 'b'}
                          onChange={handleRadioChange}
                        />
                        Top Deals
                        {selecteFeaturedTitle == "Top Deals" ? (
                          <i class="fa fa-check mx-4"></i>
                        ) : (
                          <></>
                        )}
                      </label>
                    </div>

                    {/* --------------------------------> Previous Radiobox Code <-------------------------*/}
                    {/* <div
                      className={
                        selecteFeaturedTitle=="Featured"? "active" : "noactive"
                      }
                    >
                         <label>                      
                      <input
                        type="radio"  
                        value="Featured"                   
                        onChange={handleRadioChange}  
                        // onChange={(e) =>   handleOptionChange("option1")}
                        onClick={() => setSelectedOption("option1")}
                        checked={selectedOption === "option1"}
                      />
                   
                       
                        Featured <i class="fa fa-check"></i>
                      </label>
                    </div> */}

                    {/* <div
                      className={
                        selectedOption === "option2" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        value="Best selling"                   
                        onChange={handleRadioChange} 
                        // onChange={() => handleOptionChange("option2")}
                        onClick={() => setSelectedOption("option2")}
                        checked={selectedOption === "option2"}
                        
                      />
                      <label
                          value="Best selling"                   
                          onChange={handleRadioChange} 
                        // onChange={() => handleOptionChange("option2")}
                        onClick={() => setSelectedOption("option2")}
                        checked={selectedOption === "option2"}
                      >
                        Best selling <i class="fa fa-check"></i>
                      </label>
                    </div>
                    <div
                      className={
                        selectedOption === "option3" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        // onChange={() => handleOptionChange("option3")}
                        onClick={() => setSelectedOption("option3")}
                        checked={selectedOption === "option3"}
                      />
                      <label
                        onChange={() => handleOptionChange("option3")}
                        onClick={() => setSelectedOption("option3")}
                        checked={selectedOption === "option3"}
                      >
                        Alphabetically, A-Z <i class="fa fa-check"></i>
                      </label>
                    </div>
                    <div
                      className={
                        selectedOption === "option4" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        onChange={() => handleOptionChange("option4")}
                        onClick={() => setSelectedOption("option4")}
                        checked={selectedOption === "option4"}
                      />
                      <label
                        onChange={() => handleOptionChange("option4")}
                        onClick={() => setSelectedOption("option4")}
                        checked={selectedOption === "option4"}
                      >
                        Alphabetically, Z-A <i class="fa fa-check"></i>
                      </label>
                    </div>
                    <div
                      className={
                        selectedOption === "option5" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        onChange={() => handleOptionChange("option5")}
                        onClick={() => setSelectedOption("option5")}
                        checked={selectedOption === "option5"}
                      />
                      <label
                        onChange={() => handleOptionChange("option5")}
                        onClick={() => setSelectedOption("option5")}
                        checked={selectedOption === "option5"}
                      >
                        Price, low to high <i class="fa fa-check"></i>
                      </label>
                    </div>
                    <div
                      className={
                        selectedOption === "option6" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        onChange={() => handleOptionChange("option6")}
                        onClick={() => setSelectedOption("option6")}
                        checked={selectedOption === "option6"}
                      />
                      <label
                        onChange={() => handleOptionChange("option6")}
                        onClick={() => setSelectedOption("option6")}
                        checked={selectedOption === "option6"}
                      >
                        Price, high to low <i class="fa fa-check"></i>
                      </label>
                    </div>
                    <div
                      className={
                        selectedOption === "option7" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        onChange={() => handleOptionChange("option7")}
                        onClick={() => setSelectedOption("option7")}
                        checked={selectedOption === "option7"}
                      />
                      <label
                        onChange={() => handleOptionChange("option7")}
                        onClick={() => setSelectedOption("option7")}
                        checked={selectedOption === "option7"}
                      >
                        New Arrivals <i class="fa fa-check"></i>
                      </label>
                    </div> */}
                    {/* Rest of the divs and radio buttons */}
                  </div>
                </div>
              )}
            </div>

            {showPopup && (
              <div ref={popupRef} className="popup_product_list">
                <div className="popup-content">
                  <p className="Filter_p_tag">
                    <img src={Filter} /> Filter By{" "}
                  </p>
                  <span onClick={togglePopup} className="close-button">
                    X
                  </span>

                  <div className="d-flex align-items-start product_popup_itom">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active"
                        id="v-pills-Category-w-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Category-w"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Category-w"
                        aria-selected="true"
                      >
                        Category
                      </button>
                      {/* --------- color filter Button ------------ */}
                      {/* <button
                        className="nav-link "
                        id="v-pills-Color-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Color"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Color"
                        aria-selected="true"
                      >
                        Color
                      </button> */}
                      <button
                        className="nav-link"
                        id="v-pills-Price-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Price"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Price"
                        aria-selected="false"
                      >
                        Price
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-Best-For-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Best-For"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Best-For"
                        aria-selected="false"
                      >
                        Down Payment
                      </button>

                      <button
                        className="nav-link"
                        id="v-pills-Noise-Cancellation-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Noise-Cancellation"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Noise-Cancellation"
                        aria-selected="false"
                      >
                        Brands
                      </button>
                      {/* <button className="nav-link" id="v-pills-Playback-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Playback" type="button" role="tab" aria-controls="v-pills-Playback" aria-selected="false">Playback</button>
                                            <button className="nav-link" id="v-pills-Features-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Features" type="button" role="tab" aria-controls="v-pills-Features" aria-selected="false">Features</button>
                                            <button className="nav-link" id="v-pills-Availability-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Availability" type="button" role="tab" aria-controls="v-pills-Availability" aria-selected="false">Availability</button>
                                              */}
                    </div>

                    {/* --------------------------> Category Filter <------------------------------ */}

                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-Category-w"
                        role="tabpanel"
                        aria-labelledby="v-pills-Category-w-tab"
                      >
                        {categoryElement &&
                          categoryElement.map((item, i) => (
                            <div className="form-check" key={i}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={item}
                                value={`${item}`}
                                checked={selectCategory.includes(`${item}`)}
                                onChange={(e) =>
                                  handleCheckBoxChange3(e.target.value)
                                }
                              />
                              <label className="form-check-label" for={item}>
                                {item}
                              </label>
                            </div>
                          ))}
                      </div>

                      {/* ----------------------------------------> Color Filter <-------------------------- */}

                      <div
                        className="tab-pane fade show"
                        id="v-pills-Color"
                        role="tabpanel"
                        aria-labelledby="v-pills-Color-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Black"
                            checked={selectColors.includes("Black")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                            id="Black_color"
                          />
                          <label className="form-check-label" for="Black_color">
                            Black
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Blue"
                            id="Blue_color"
                            checked={selectColors.includes("Blue")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Blue_color">
                            Blue
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Brown"
                            id="Brown_color"
                            checked={selectColors.includes("Brown")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Brown_color">
                            Brown
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Green"
                            id="Green_color"
                            checked={selectColors.includes("Green")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Green_color">
                            Green
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Gray"
                            id="Gray_color"
                            checked={selectColors.includes("Gray")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Gray_color">
                            Gray
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Maroon"
                            id="Maroon_color"
                            checked={selectColors.includes("Maroon")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label
                            className="form-check-label"
                            for="Maroon_color"
                          >
                            Maroon
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Orange"
                            id="Orange_color"
                            checked={selectColors.includes("Orange")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label
                            className="form-check-label"
                            for="Orange_color"
                          >
                            Orange
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Pink"
                            id="Pink_color"
                            checked={selectColors.includes("Pink")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Pink_color">
                            Pink
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Purple"
                            id="Purple_color"
                            checked={selectColors.includes("Purple")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label
                            className="form-check-label"
                            for="Purple_color"
                          >
                            Purple
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Red"
                            id="Red_color"
                            checked={selectColors.includes("Red")}
                            onChange={(e) =>
                              handleCheckBoxChange2(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Red_color">
                            Red
                          </label>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-Price"
                        role="tabpanel"
                        aria-labelledby="v-pills-Price-tab"
                      >
                        Price
                        <Slider
                          className="slider"
                          value={price}
                          aria-label="range"
                          aria-labelledby="range-slider"
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          min={0}
                          max={200000}
                          // getAriaValueText={valuetext}
                        />
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-Best-For"
                        role="tabpanel"
                        aria-labelledby="v-pills-Best-For-tab"
                      >
                        {/*----------------------------- down payment--------------------------------------- -----------    */}
                        {/* <div className="form-check">

                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="49"
                            id="Round_screen"
                            checked={downpayment.includes(e.target.value)}
                            onChange={(e) =>
                              handleCheckBoxChange(e.target.value)
                            }
                          />
                          <label
                            className="form-check-label"
                            for="Round_screen"
                          >
                            49{" "}
                          </label>
                        </div> */}
                        {/* <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="99"
                            id="Music_Lovers"
                            checked={downpayment.includes("99")}
                            onChange={(e) =>
                              handleCheckBoxChange(e.target.value)
                            }
                          />
                          <label
                            className="form-check-label"
                            for="Music_Lovers"
                          >
                            99
                          </label>
                        </div> */}
                        {/* <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="149"
                            id="Sports"
                            checked={downpayment.includes("149")}
                            onChange={(e) =>
                              handleCheckBoxChange(e.target.value)
                            }
                          />
                          <label className="form-check-label" for="Sports">
                            149
                          </label>
                        </div> */}

                        {downpaymentElement &&
                          downpaymentElement.map((item, i) => (
                            <div className="form-check" key={i}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={`${item}`}
                                id={item}
                                // checked={downpaymentCheckedStatus[i]}
                                checked={downpayment.includes(`${item}`)}
                                onChange={(e) =>
                                  handleCheckBoxChange(e.target.value, item, i)
                                }
                              />

                              {/* {console.log(item)} */}
                              <label className="form-check-label" for={item}>
                                {` ${item} Pay `}
                              </label>
                            </div>
                          ))}
                      </div>

                      {/*  ---------------------> Brand Filter <-----------------------*/}
                      <div
                        className="tab-pane fade"
                        id="v-pills-Noise-Cancellation"
                        role="tabpanel"
                        aria-labelledby="v-pills-Noise-Cancellation-tab"
                      >
                        {brandElement.map((item, i) => (
                          <div className="form-check" key={i}>
                            <input
                              className="form-check-input"
                              id={item}
                              type="checkbox"
                              value={`${item}`}
                              checked={selectBrand.includes(`${item}`)}
                              onChange={(e) =>
                                handleCheckBoxChange4(e.target.value)
                              }
                            />
                            <label className="form-check-label" for={item}>
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>

                      {/* Playback */}
                      {/* <div className="tab-pane fade" id="v-pills-Playback" role="tabpanel" aria-labelledby="v-pills-Playback-tab">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Hrs_20_50" />
                                                    <label className="form-check-label" for="Hrs_20_50">20-50 Hrs </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Hrs_50_70" />
                                                    <label className="form-check-label" for="Hrs_50_70">50-75 Hrs </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Hrs_WT" />
                                                    <label className="form-check-label" for="Hrs_WT"><i className="fa fa-angle-left"></i> 20 Hrs </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="More_than" />
                                                    <label className="form-check-label" for="More_than">More than 100Hrs </label>
                                                </div>
                                            </div> */}

                      {/* Playback */}
                      {/* <div className="tab-pane fade" id="v-pills-Features" role="tabpanel" aria-labelledby="v-pills-Features-tab">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Bluetooth_Calling" />
                                                    <label className="form-check-label" for="Bluetooth_Calling">Bluetooth Calling</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Built_in_Alexa" />
                                                    <label className="form-check-label" for="Built_in_Alexa">Built-in Alexa</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Extra_Long_battery" />
                                                    <label className="form-check-label" for="Extra_Long_battery">Extra Long battery </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Fitness_Tracker" />
                                                    <label className="form-check-label" for="Fitness_Tracker">Fitness Tracker </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Sports_Modes" />
                                                    <label className="form-check-label" for="Sports_Modes">Sports Modes</label>
                                                </div>
                                            </div> */}

                      {/* Playback */}
                      {/* <div className="tab-pane fade" id="v-pills-Availability" role="tabpanel" aria-labelledby="v-pills-Availability-tab">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="In_stock" />
                                                    <label className="form-check-label" for="In_stock">In stock</label>
                                                </div>
                                            </div> */}
                    </div>
                  </div>
                  <div className="clearAllApplyFilter">
                    <Link
                      className="clear_all"
                      onClick={() => {
                        clearAll(), togglePopup();
                      }}
                    >
                      Clear All
                    </Link>
                    <Link className="applyFilter" onClick={togglePopup}>
                      Apply Filter
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* -----------------------------------------------> Show Filters Section Start <--------------------------------------- */}
          <div className="filter_add_bt">
            {/* <div className="filter_list_tag">
              <Link>
                <span>X</span> Color: red
              </Link>
            </div> */}

            {selectBrand.map((item, i) => (
              <div className="filter_list_tag">
                <Link>
                  <span onClick={() => handleDelete(i)}>X</span> Brand:{item}
                </Link>
              </div>
            ))}

            {selectCategory.map((item, i) => (
              <div className="filter_list_tag">
                <Link>
                  <span onClick={() => handleDelete2(i)}>X</span> Category:
                  {item}
                </Link>
              </div>
            ))}
            {selectColors.map((item, i) => (
              <div className="filter_list_tag">
                <Link>
                  <span onClick={() => handleDelete3(i)}>X</span> Colors:{item}
                </Link>
              </div>
            ))}
            {downpayment.map((item, i) => (
              <div className="filter_list_tag">
                <Link>
                  <span onClick={() => handleDelete4(i)}>X</span> Downpayment:
                  {item}
                </Link>
              </div>
            ))}

            {downpayment.length > 0 ||
            selectBrand.length > 0 ||
            selectCategory.length > 0 ||
            selectColors.length > 0 ? (
              <Link className="Clear_all" onClick={clearAll}>
                Clear all
              </Link>
            ) : (
              <></>
            )}
          </div>
          {/* -----------------------------------------------> Show Filters Section End <--------------------------------------- */}
          <div className="cardsBoxBody product_list_page">
            <InfiniteScroll
              className="cardsBoxBody product_list_page"
              dataLength={apiData.length}
              next={nextPage}
              hasMore={hasmoreStatus}
              // hasMore={true}
              loader={
                <img
                  src= {EgmiLogo1}
                  alt=""
                  style={{
                    width: "60px",
                    margin: "auto",
                    display: "table",
                    height: "60px",
                    // ,position:" absolute",left: "0",right: "0",display: "table"
                  }}
                />
              }
            >
              {apiData ? (
                apiData.map((products, i) => (
                  //  <Pay49card ProductDetails={products} key={i} />
                  <FilterPageProductCard ProductDetails={products} key={i} />
                ))
              ) : (
                <>
                  <h1>no data </h1>
                  {/* Skalito load */}
                </>
              )}
            </InfiniteScroll>
          </div>
        </section>
      </div>
    </>
  );
}
export default ProductPage;

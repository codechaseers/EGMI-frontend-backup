import "./product.css";
import { Link } from "react-router-dom";
import Filter from "../../assets/images/productList/icon/svgviewer-png-output.png";
import rightFilter from "../../assets/images/productList/icon/sort_2_1.png";

import ItemImg from "../../assets/images/homeSlider/brande/brande1.webp";

import Star from "../../assets/images/homeSlider/svgviewer.png";
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png";
import React, { useState } from "react";

function ProductPage() {
  // popup state declear
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // drop down state declear
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Radio Button Group
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

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
                <span className="breadcrumb__link">Wireless Earphones</span>
              </li>
            </ol>
          </div>
        </section> */}
        <section className="product_list_set">
          <div className="container_with_banner_mob">
            <h1 className="heading h1">Wireless Earphones</h1>
            <div className="Filter_dev">
              <button className="filter_bt" onClick={togglePopup}>
                <img src={Filter} />
                Filter By <i className="fa fa-angle-down"></i>
              </button>

              <button className="right_filter_a_to_z" onClick={toggleDropdown}>
                <img src={rightFilter} />
                <b>Sort by :</b> Featured
              </button>
              {showDropdown && (
                <div className=" Sort_by_Featured">
                  <div className="mane">
                    <div
                      className={
                        selectedOption === "option1" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        onChange={() => handleOptionChange("option1")}
                        onClick={() => setSelectedOption("option1")}
                        checked={selectedOption === "option1"}
                      />
                      <label
                        onChange={() => handleOptionChange("option1")}
                        onClick={() => setSelectedOption("option1")}
                        checked={selectedOption === "option1"}
                      >
                        Featured <i class="fa fa-check"></i>
                      </label>
                    </div>
                    <div
                      className={
                        selectedOption === "option2" ? "active" : "noactive"
                      }
                    >
                      <input
                        type="radio"
                        onChange={() => handleOptionChange("option2")}
                        onClick={() => setSelectedOption("option2")}
                        checked={selectedOption === "option2"}
                      />
                      <label
                        onChange={() => handleOptionChange("option2")}
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
                        onChange={() => handleOptionChange("option3")}
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
                    </div>
                    {/* Rest of the divs and radio buttons */}
                  </div>
                </div>
              )}
            </div>

            {showPopup && (
              <div className="popup_product_list">
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
                        id="v-pills-Color-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Color"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Color"
                        aria-selected="true"
                      >
                        Color
                      </button>
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
                        Best For
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
                        Noise Cancellation
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-Playback-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Playback"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Playback"
                        aria-selected="false"
                      >
                        Playback
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-Features-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Features"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Features"
                        aria-selected="false"
                      >
                        Features
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-Availability-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-Availability"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-Availability"
                        aria-selected="false"
                      >
                        Availability
                      </button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-Color"
                        role="tabpanel"
                        aria-labelledby="v-pills-Color-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
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
                            value=""
                            id="Blue_color"
                          />
                          <label className="form-check-label" for="Blue_color">
                            Blue
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Brown_color"
                          />
                          <label className="form-check-label" for="Brown_color">
                            Brown
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Green_color"
                          />
                          <label className="form-check-label" for="Green_color">
                            Green
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Gray_color"
                          />
                          <label className="form-check-label" for="Gray_color">
                            Gray
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Maroon_color"
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
                            value=""
                            id="Orange_color"
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
                            value=""
                            id="Pink_color"
                          />
                          <label className="form-check-label" for="Pink_color">
                            Pink
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Purple_color"
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
                            value=""
                            id="Red_color"
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
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Best-For"
                        role="tabpanel"
                        aria-labelledby="v-pills-Best-For-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Round_screen"
                          />
                          <label
                            className="form-check-label"
                            for="Round_screen"
                          >
                            Gaming{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Music_Lovers"
                          />
                          <label
                            className="form-check-label"
                            for="Music_Lovers"
                          >
                            Music_Lovers
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Sports"
                          />
                          <label className="form-check-label" for="Sports">
                            Sports
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Travel "
                          />
                          <label className="form-check-label" for="Travel ">
                            Travel{" "}
                          </label>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Noise-Cancellation"
                        role="tabpanel"
                        aria-labelledby="v-pills-Noise-Cancellation-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Active_Noise"
                          />
                          <label
                            className="form-check-label"
                            for="Active_Noise"
                          >
                            Active Noise Cancellation{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Environmental_Noise"
                          />
                          <label
                            className="form-check-label"
                            for="Environmental_Noise"
                          >
                            Environmental Noise Cancellation{" "}
                          </label>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-Playback"
                        role="tabpanel"
                        aria-labelledby="v-pills-Playback-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Hrs_20_50"
                          />
                          <label className="form-check-label" for="Hrs_20_50">
                            20-50 Hrs{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Hrs_50_70"
                          />
                          <label className="form-check-label" for="Hrs_50_70">
                            50-75 Hrs{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Hrs_WT"
                          />
                          <label className="form-check-label" for="Hrs_WT">
                            <i className="fa fa-angle-left"></i> 20 Hrs{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="More_than"
                          />
                          <label className="form-check-label" for="More_than">
                            More than 100Hrs{" "}
                          </label>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-Features"
                        role="tabpanel"
                        aria-labelledby="v-pills-Features-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Bluetooth_Calling"
                          />
                          <label
                            className="form-check-label"
                            for="Bluetooth_Calling"
                          >
                            Bluetooth Calling
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Built_in_Alexa"
                          />
                          <label
                            className="form-check-label"
                            for="Built_in_Alexa"
                          >
                            Built-in Alexa
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Extra_Long_battery"
                          />
                          <label
                            className="form-check-label"
                            for="Extra_Long_battery"
                          >
                            Extra Long battery{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Fitness_Tracker"
                          />
                          <label
                            className="form-check-label"
                            for="Fitness_Tracker"
                          >
                            Fitness Tracker{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="Sports_Modes"
                          />
                          <label
                            className="form-check-label"
                            for="Sports_Modes"
                          >
                            Sports Modes
                          </label>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Availability"
                        role="tabpanel"
                        aria-labelledby="v-pills-Availability-tab"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="In_stock"
                          />
                          <label className="form-check-label" for="In_stock">
                            In stock
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="cardsBoxBody product_list_page">
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cord_product_list">
              <div className="cardBox">
                <div className="cardImg">
                  <img src={ItemImg} />
                </div>
                <div className="cardText">
                  <span className="cardEmi">
                    ₹ <span>453</span>/mon
                  </span>
                  <p className="cardItemname"> Airdopes 131 </p>
                  <p className="cardPrice">
                    <span className="reseantPrice">₹899</span>{" "}
                    <span className="cardLessPrise"> ₹2,990 </span>
                    <span className="priceOf">70% off</span>{" "}
                  </p>
                  <p className="ratingStars">
                    <span className="imgAdRt">
                      <img src={Star} />
                      4.8
                    </span>
                    <span className="line_card"> | </span>
                    <span className="ratingAdq">
                      <span className="ratingComt">1336</span>{" "}
                      <img className="blueTick" src={blueTick} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default ProductPage;

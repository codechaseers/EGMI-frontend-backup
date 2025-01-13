import React from "react";
import "./payEmi.css";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function payEmi() {
  const navigate = useNavigate();
  let userStatus = useSelector((state) => state.authReducer.loggedInStatus);
  useEffect(() => {
    if (!userStatus) navigate("/");
  });
  return (
    <>
      <div className="payEmi">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="UpcomingEMI-tab"
              data-bs-toggle="tab"
              data-bs-target="#UpcomingEMI"
              type="button"
              role="tab"
              aria-controls="UpcomingEMI"
              aria-selected="true"
            >
              Upcoming EMI
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="PayallEMIs-tab"
              data-bs-toggle="tab"
              data-bs-target="#PayallEMIs"
              type="button"
              role="tab"
              aria-controls="PayallEMIs"
              aria-selected="false"
            >
              Pay all EMIs
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="PaidEMIs-tab"
              data-bs-toggle="tab"
              data-bs-target="#PaidEMIs"
              type="button"
              role="tab"
              aria-controls="PaidEMIs"
              aria-selected="false"
            >
              Paid EMIs
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="UpcomingEMI"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {/* Upcoming EMI not emi  */}
            {/* <div className="payEmicom payUpcomingEMI">
                            <div className="payUpcomingEMIImg">
                                <i class="fa fa-exclamation-triangle"></i>
                            </div>
                            <div className="payUpcomingEMIinf">
                                <h3>No Upcoming EMIs!</h3>
                                <p> Buy your favourite brands on easy EMI plans</p>
                            </div>
                            <div className="shopcome payUpcomingEMIbutton">
                                <buton>Shop Now</buton>
                            </div>
                        </div> */}
            {/* Upcoming emi on time history  */}
            {/* <div className="emi_on_time_history ">
              <div className="emi_on_time_history_top">
                <p className="emi_on_time_history_month">Feb 2024</p>
                <p className="emi_on_time_history_price">
                  <span>Total :</span>₹1000
                </p>
              </div>
              <div className="emi_on_time_history_product">
                <div className="emi_on_time_history_product_date">
                  <p>
                    SAT <span>3</span>Feb{" "}
                  </p>
                </div>
                <div className="emi_on_time_product_name">
                  <p className="emi_on_time_product_name_it">
                    boAt Airdopes 141 True Wireless Earbuds with 42H Playtime,
                    Beast Mode for Gaming, IPX4 Water Resistance, Smooth Touch
                    Controls(Black)
                  </p>
                  <p className="emi_on_time_product_id">
                    <b>Product Id :</b>
                    <span>124789954631105</span>
                  </p>
                </div>
                <div className="emi_on_time_history_product_payment">
                  ₹500
                  <button>
                    Pay <i class="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div> */}
            <div className="payEmicom PaidEMIs">
              <div className="PaidEMIsImg">
                <i class="fa fa-exclamation-triangle"></i>
              </div>
              <div className="PaidEMIsinf">
              <h3>No Upcoming EMI</h3>
                <p> Buy your favourite brands on easy EMI plans</p>
              </div>
              <div className="shopcome PaidEMIsbutton">
              <NavLink to="/">
                <buton>Shop Now</buton>
              </NavLink>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="PayallEMIs"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="payEmicom payUpcomingEMI">
              <div className="PayallEMIsImg">
                <i class="fa fa-exclamation-triangle"></i>
              </div>
              <div className="PayallEMIsIinf">
                <h3>Pay all EMIs</h3>
                <p> Buy your favourite brands on easy EMI plans</p>
              </div>
              <div className="shopcome PayallEMIsbutton">
              <NavLink to="/">
                <buton>Shop Now</buton>
              </NavLink>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="PaidEMIs"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="payEmicom PaidEMIs">
              <div className="PaidEMIsImg">
                <i class="fa fa-exclamation-triangle"></i>
              </div>
              <div className="PaidEMIsinf">
                <h3>Paid EMIs!</h3>
                <p> Buy your favourite brands on easy EMI plans</p>
              </div>
              <div className="shopcome PaidEMIsbutton">
              <NavLink to="/">
                <buton>Shop Now</buton>
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default payEmi;

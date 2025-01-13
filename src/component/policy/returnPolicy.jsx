import React from "react";
import "./Policy.css"
import Order from "../../assets/images/brand_iten.webp"
import { Link } from "react-router-dom";

const returnPolicy = () => {

  return (
    <>

      <div className="open_policy">
        <div className="open_policy_left">
          <ul className="open_policy_list">
            <li><Link to="/terms-and-conditions">Terms And Conditions <i class="fa fa-angle-right"></i></Link></li>
            <li><Link to="/refund-policy">Refund Policy <i class="fa fa-angle-right"></i></Link></li>
            <li><Link to="/privacy-policy ">Privacy Policy <i class="fa fa-angle-right"></i></Link></li>
            {/* <li><Link to="/return-policy">Return Policy <i class="fa fa-angle-right"></i></Link></li> */}
          </ul>
        </div>
        <div className="open_policy_right">
          <h1 className="policy_title">Return Policy</h1>
          <p><b>About us:</b></p>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>



    </>
  );
};



export default returnPolicy;

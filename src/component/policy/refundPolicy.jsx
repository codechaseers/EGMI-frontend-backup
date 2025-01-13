import React from "react";
import "./Policy.css"
import { Link } from "react-router-dom";
import Order from "../../assets/images/brand_iten.webp"


const refundPolicy = () => {

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
          <h1 className="policy_title">Refund Policy</h1>
          <h5 >Cancellation and Refund</h5>
          <p><b>Last updated on Jan 28 2024:</b></p>
          <p> EGMI believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>
          <p>Cancellations will be considered only if the request is made within 7 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</p>
          <p>EGMI does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</p>
          <p>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.</p>
          <p>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</p>
          <p>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</p>
          <p>In case of any Refunds approved by the EGMI, it’ll take 6-8 days for the refund to be processed to the end customer.</p>

        </div>
      </div>
    </>
  );
};



export default refundPolicy;

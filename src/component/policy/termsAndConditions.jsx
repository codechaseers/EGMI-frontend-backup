import React from "react";
import "./Policy.css"
import Order from "../../assets/images/brand_iten.webp"
import { Link } from "react-router-dom";

const termsAndConditions = () => {

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
          <h1 className="policy_title">Terms And Conditions</h1>
          <h5 >Cancellation and Refund</h5>
          <p><b>Last updated on Jan 28 2024:</b></p>
          <p>For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean EGMI, whose registered/operational office is At-ison tower 954211 . "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</p>
          <p>Your use of the website and/or purchase from us are governed by following Terms and Conditions:</p>
          <p>The content of the pages of this website is subject to change without notice.</p>
          <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
          <p>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</p>
          <p>Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
          <p>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</p>
          <p>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</p>
          <p>From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</p>
          <p>You may not create a link to our website from another website or document without EGMI’s prior written consent.</p>
          <p>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India .</p>
          <p>We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time</p>

        </div>
      </div>


    </>
  );
};



export default termsAndConditions;

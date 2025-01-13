 
import singlePImg1 from "../../assets/images/productList/singleProduct/Billing.svg";
import singlePImg2 from "../../assets/images/productList/singleProduct/Replacement.svg";
import singlePImg3 from "../../assets/images/productList/singleProduct/Shipping.svg";
import singlePImg4 from "../../assets/images/productList/singleProduct/Warranty.svg";
const ProductData=()=>{
    return(<>
          <div className="produtel_data">
        <div className="produtel_data_1">
          <img className="product_data_img" src={singlePImg1} />
          <p>
            <b>1 Year</b> Warranty
          </p>
        </div>
        <div className="produtel_data_1">
          <img className="product_data_img" src={singlePImg2} />
          <p>
            <b>7-day</b> Replacement
          </p>
        </div>
        <div className="produtel_data_1">
          <img className="product_data_img" src={singlePImg3} />
          <p>
            <b>Free</b> Shipping
          </p>
        </div>
      </div>
     
     
     </>)
}
export default ProductData
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setOption } from "../../features/productsdetails/SelectedProductSlice";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import {  } from "module";

const ConfirmPage = ({}) => {
  const dispatch = useDispatch();
  let option = useSelector((state) => state.selectedProductReduser.option);
  const confirmClose = () => {
    dispatch(setOption(1));
  };

const [loaderStatus,SetLoaderStatus]=useState(true)
 let userId=useSelector((state)=>state.authReducer.userData)
 let ProductId=useSelector((state)=>state.productDetailsReduser.productDetails)
 let SelectedColorid=useSelector((state)=>state.productDetailsReduser. selectColorid)
 let selectedProduct=useSelector((state)=>state.selectedProductReduser.selectedProduct)
 let selectedAddress=useSelector((state)=>state.selectedProductReduser.address)

 let ImageUrl=JSON.parse(ProductId.imageURL)

 
 
 
 console.log(userId);
console.log(ProductId.id); 
 
console.log(SelectedColorid); 
console.log( SelectedColorid); 
console.log( selectedAddress); 
console.log(selectedProduct.month);

  const confirmOrderopen = async () => {

    try {
      SetLoaderStatus(false)
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/phonepay/payment`,
        {
          userId:userId.id,
          productId:ProductId.id,
          color:SelectedColorid,
          downpayment:selectedProduct.downpayment,
          emiTreanure:selectedProduct.month,
          emiPerMonth:selectedProduct.price,    
          addressId:selectedAddress,  
          availableLimit:userId.availableLimit,
          totalPrice:(selectedProduct.price*selectedProduct.month)+selectedProduct.downpayment
      
        }
      );
     // console.log(response);
      if (response.status == 200) {
        window.location.href = response.data;
      }
    } catch (error) {
     // console.error("Error processing payment:", error);
    }
  };

  // let setSelectedAddress= useSelector((state)=>state.selectedProductReduser.SelectedAddress)
  //// console.log(confirmOrder);
 
  return (
    <>
      {option == 2 && (
        <div className=" confirmOrdero">
          <span onClick={confirmClose} className="close-button">
            X
          </span>
          <p className="oops_p">Credit Eligibility Verified</p>
          <ul>
            <li>
              Please pay your EMIS on time to maintain a good credit score
            </li>
            <li>Pay EMIS online via UPI, Debit card, or Net banking</li>
            <li>You will receive monthly reminders via SMS and Email</li>
          </ul>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              checked
              id="flexCheckChecked"
            />
            <label className="form-check-label" for="flexCheckChecked">
              I have read and agree to the Terms & Conditions of this purchase{" "}
            </label>
          </div>
          <button className="ConfirmOrder" onClick={confirmOrderopen}>
            {loaderStatus?"Confirm Order": <ClipLoader
              // loading={loaderStatus}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />}
          </button>
           
        </div>
      )}
    </>
  );
};

export default ConfirmPage;

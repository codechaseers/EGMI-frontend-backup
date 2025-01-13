
import "./productdata.css"
import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";
import ProductData from "./ProductData";
import ProductSpacification from "./ProductSpacification";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductdetails,
  getProductImage,
  getProductDescription,
} from "../../features/productsdetails/ProductDetailsslice";
import axios from "axios";

function ProductPage() {
  const dispatch = useDispatch();

  const [id,setId]=useState()
  const param = useParams();
  // const id = param.id;
  useEffect(()=>{
    const getId = param.id;
    setId(getId)
  },[param])


  let [imagedata, setImagedata] = useState([]);
  let [specification, setSpecification] = useState([]);
  async function getData() {
    try {
      let data = await axios.get(
        ` ${import.meta.env.VITE_BASE_URL}/admin/allproducts/${id}`
      );
      //// console.log(data.data.data);
      // data=JSON.parse(data.data.allProducts)
      if (data.data.data.imageURL) {
        dispatch(getProductImage(JSON.parse(data.data.data.imageURL)));
      }
      if (data.data.data.specification) {
        dispatch(
          getProductDescription(JSON.parse(data.data.data.specification))
        );
      }

      dispatch(getProductdetails(data.data.data));
    } catch (error) {
     // console.log(error);
    }
  }

  useEffect(() => {
    getData();
  },);







  return (
    <>
      {/* <h1>singele-page</h1> */}

      <div className="singelePage">
        <ProductImage />
        <ProductDesc />
      </div>

     

      <ProductData />
      <ProductSpacification />

      {/* ------------------------------------------><--------------------------------------------- */}

      <style>
        {`
  
  
  .paymentgetaddress {
    width: 450px;
    margin: 0 auto;
}
.smptPayment {
  border: 1px solid;
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fff;
}
.paymentgetaddress .snap-card {
  display: flex;
 
  align-items: center;
}
.paymentgetaddress .snap-card .PayNow {
  display: flex;
}
.pay_emiInt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pay_emiInt p {
  margin-bottom: 0 !important;
}

p.emiAddres {
  margin: 10px 0;
}
.relative {
  margin-bottom: 5px;
}
.relative input {
  padding: 10px 10px;
  width: 100%;
  border-radius: 5px;
  border-color: #aeaeae
}
.pay_ment_get_but {
  display: flex;
  flex-direction: column;
  margin-top:10px;
}
.pay_ment_get_but button {
  background-color: gray;
  width: 50%;
  margin: 0px auto;
}
.pay_ment_get_but button.addNewAddress {
  background-color: transparent;
  color: #000;
}
.EMI_Plans p {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.singelePage .singleProductOPopup .mane .cardBox {
  padding: 15px 10px;
}
.singelePage .singleProductOPopup .mane {
  width: 375px;
  padding: 15px 5px;
}
.singelePage .form-check input {
  display: block !important;
}






  `}
      </style>

    </>
  );
}

export default ProductPage;

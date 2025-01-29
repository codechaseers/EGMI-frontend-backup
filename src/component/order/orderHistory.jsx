import "./order.css";
import Order from "../../assets/images/brand_iten.webp";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// import 

// import ProductData from "../singelePage/ProductData";

const OrderHistory = ({ orderData, i }) => {
  const [productData, SetProductData] = useState();
  const [productImage, SetProductImage] = useState();

  const getProductName = async () => {
    try {
      let data = await axios.get(
        ` ${import.meta.env.VITE_BASE_URL}/admin/allproducts/${orderData.productId
        }`
      ); 
      if (data) {
        SetProductData(data.data.data);
        SetProductImage(JSON.parse(data.data.data.imageURL));
      }
      //// console.log(data);
      // data=JSON.parse(data.data.allProducts)

      // dispatch(getProductdetails(data.data.data));
    } catch (error) {
     // console.log(error);
    }
  };

  function estimatedDate(fullDate) {
    const dateString = fullDate;
    const date = new Date(dateString);

    const options = { month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return formattedDate;
  }

  useEffect(() => {
    getProductName();
   // console.log(productData);
   // console.log(orderData);
    //// console.log(productImage[0].imageUrl);
  }, [orderData]);

  return (
    <>

   
      {orderData && (
        <>

          <div className="orderHistoryPage">
              <NavLink  className="orderHsitProt " to={`/single-oder/${orderData.id}`}>
            
            
                <div className="order_history_img">
                  <img
                    src={productData && productImage[orderData.color].imageUrl}
                  />
                </div>

                <div className="productint">
                  <p className="productTitle">
                    {" "}
                    {productData && productData.name}
                  </p>
                  <p className="colorProduct">
                    <span>
                      <b>Color :</b>
                    </span>
                    {productData && productImage[orderData.color].color}
                  </p>
                </div>
           
              <p className="order">
                <b>₹</b>{" "}
                {productData &&
                  Number(Math.round(productData.mrp)).toLocaleString()}
              </p>
              {/* confirmed */}
              {orderData.status == "confirmed" && (
                <p className="orderOn  confirm">
                  <span className="orderDot"></span><b> {orderData.status} </b>
                  <span className="dateOrede">{estimatedDate(orderData.createdAt)}</span>
                </p>
              )}

              {/* cancelled */}
              {orderData.status == "canceled" && (
                <p className="orderOn cancelled">
                  <span className="orderDot"></span><b> {orderData.status} </b>
                  <span className="dateOrede">{estimatedDate(orderData.updatedAt)}</span>
                </p>
              )}

              {/* panding */}
              {orderData.status == "pending" && (<p className="orderOn panding">
                <span className="orderDot"></span><b> {orderData.status} </b>
                {/* <span>{estimatedDate(orderData.createdAt)}</span> */}
              </p>)}
              {/* complited */}
              {orderData.status == "completed" && (<p className="orderOn compleat">
                <span className="orderDot"></span><b> {orderData.status} </b>
                {/* <span>{estimatedDate(orderData.createdAt)}</span> */}
              </p>)}
           
            </NavLink>
          </div>


        </>
      )}

      

{/* 

      <div class=" OrderHistoryPage" >
        <div class="payEmicom payUpcomingEMI">
          <div class="PayallEMIsImg"><i class="fa fa-exclamation-triangle"></i></div>
          <div class="PayallEMIsIinf">
            <h3>Your Orders</h3>
            <p> You have no order till now</p>
          </div>
          <div class="shopcome PayallEMIsbutton">
            <buton>Shop Now</buton>
          </div>
        </div>
      </div> */}
    </>
  );
};


export default OrderHistory;

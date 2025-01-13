import { Link, useParams } from "react-router-dom";
import React from "react";
import "./order.css";
import Order from "../../assets/images/brand_iten.webp";
import { useState, useEffect } from "react";


// import 


const singleOder = () => {
  const [orderData, SetOrderData] = useState();
  const [productData, SetProductData] = useState();
  const [productImage, SetProductImage] = useState();
  // Cancelled
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopup2 = () => {
    setShowPopup2(!showPopup2);
  };

  const param = useParams();
  const id = param.id;

  const getOrderDetails = async () => {
    try {
      let Data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/orders/singleorder/${id}`
      );
     // console.log(Data);

      if (Data) {
        SetOrderData(Data.data);

        getProductName(Data.data[0].productId);
      }
    } catch (error) {
     // console.log(error);
    }
  };

  const getProductName = async (id) => {
    try {
      let data = await axios.get(
        ` ${import.meta.env.VITE_BASE_URL}/admin/allproducts/${id}`
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

  const estimatedDate = (rawDate) => {
    const dateString = rawDate;
    const originalDate = new Date(dateString);

    // Add 7 days to the original date
    const newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() + 7);

    // Format the new date in "date month year" format
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      newDate
    );

    return formattedDate;
  };
  const orderCancel = async (id) => {
   // console.log(id);
    let data = await axios.patch(`${import.meta.env.VITE_BASE_URL}/user/orders/cancel/${id}`)
    if (data) {
      togglePopup()
      togglePopup2()
    }
   // console.log(data);
  }
  useEffect(() => {
    getOrderDetails();

   // console.log(orderData);
    if (orderData) {
     // console.log(orderData[0].productId);
    }
   // console.log(productData);
   // console.log(productImage);
  }, [showPopup]);

  return (
    <>
      {orderData && (
        <div className="SingleOder">
          <div className="orderImg">
            <img
              src={productData && productImage[orderData[0].color].imageUrl}
            />
          </div>
          <div className="orderIfor">
            <article className="card">
              <header className="card-header"> My Orders / Tracking </header>
              <div className="card-body">
                <h6 className="order_id">
                  {/* -----------------Cancel popup ------------------- */}
                  {/* conform you are Canceling */}
                  {showPopup && (
                    <div className="CancelledOder">
                      <span onClick={togglePopup} className="close-button">X</span>
                      <p className="CancelYourOrder">Are you confirm to Cancel your order?</p>
                      <div className="CancelledOderButton "><button onClick={togglePopup}>No</button> <button onClick={() => orderCancel(id)}>yes</button></div>
                    </div>
                  )}
                  {/* successfully Cancelled */}
                  {showPopup2 && (
                    <div className="CancelledOder">
                      <span onClick={togglePopup2} className="close-button">X</span>
                      <p className="successfullyCancelled">Your order has successfully Cancelled</p>
                      <p className="yourPaymentWill">your payment will be refunded within 3 working days to your original payment mode!</p>
                      <div className="CancelledOderButton "> <button onClick={togglePopup2}>Ok</button></div>
                    </div>
                  )}

                  {orderData && `Order ID: ODR45345345435${orderData[0].id} `}

                  {orderData[0].status == "canceled" || orderData[0].status == "completed" ? <></> :
                    <button className="Cancelyourorder" onClick={togglePopup} >Cancel your order</button>}

                </h6>
                <article className="card">
                  <div className="card-body row">
                    <div className="col">
                      {" "}
                      <strong>Estimated Delivery time:</strong> <br />
                      {estimatedDate(orderData[0].createdAt)}
                    </div>

                    <div className="col">
                      {" "}
                      <strong>Status:</strong> <br />
                      {orderData[0].status}
                    </div>
                    <div className="col">
                      {" "}
                      <strong>Tracking #:</strong> <br /> {`BD045903594059${orderData[0].id}`}
                    </div>
                  </div>
                  <div className="card-body row">
                    <div className="col">
                      {" "}
                      <strong>Shipping BY:</strong> <br /> dsddasdad sadsaddsad sadasdd , dsddasdad sadsaddsad sadasdd dsddasdad sadsaddsad sadasdd dsddasdad sadsaddsad sadasdd dsddasdad sadsaddsad sadasdd, dsdsdsd, 12345679
                  </div>
                  </div>
                </article>
                <div className="track">
                  <div
                    className={
                      orderData[0].status == "confirmed" ||
                        orderData[0].status == "pending" ||
                        orderData[0].status == "completed" ||
                        orderData[0].status == "canceled"
                        ? "step active"
                        : "step"
                    }
                  >
                    {" "}
                    <span className="icon">
                      {" "}
                      <i className="fa fa-check"></i>{" "}
                    </span>{" "}
                    <span className="text">Order confirmed</span>{" "}
                  </div>

                  {/* Panding */}
                  <div
                    className={
                      orderData[0].status == "pending" ||
                        orderData[0].status == "completed" ||
                        orderData[0].status == "canceled"
                        ? "step active"
                        : "step"
                    }
                  >
                    {" "}
                    <span className="icon">
                      {" "}
                      <i className="fa fa-user"></i>{" "}
                    </span>{" "}
                    <span className="text"> Pending </span>{" "}
                  </div>

                  {/* Cancelled  */}
                  {orderData[0].status == "canceled" ? (
                    <div
                      className={
                        orderData[0].status == "canceled"
                          ? "step active"
                          : "step"
                      }
                    >
                      {" "}
                      <span className="icon">
                        {" "}
                        <i className="fa fa-user"></i>{" "}
                      </span>{" "}
                      <span className="text"> Cancelled </span>{" "}
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* Compleat*/}
                  {orderData[0].status == "completed" ||
                    orderData[0].status == "pending" ? (
                    <div
                      className={
                        orderData[0].status == "completed"
                          ? "step active"
                          : "step"
                      }
                    >
                      {" "}
                      <span className="icon">
                        {" "}
                        <i className="fa fa-user"></i>{" "}
                      </span>{" "}
                      <span className="text"> Completed </span>{" "}
                    </div>
                  ) : (
                    <></>
                  )}

                  {/*                                 
                                <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                                <div className="step"> <span className="icon"><i class="fa fa-home"></i> </span> <span className="text">Ready for pickup</span> </div> */}
                </div>
                <hr />
                {/* <ul className="row">
                                <li className="col-md-4">
                                    <figure className="itemside mb-3">
                                        <div className="aside"><img src="https://i.imgur.com/iDwDQ4o.png" className="img-sm border" /></div>
                                        <figcaption className="info align-self-center">
                                            <p className="title">Dell Laptop with 500GB HDD <br /> 8GB RAM</p>
                                            <span className="text-muted">$950 </span>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4">
                                    <figure className="itemside mb-3">
                                        <div className="aside"><img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border" /></div>
                                        <figcaption className="info align-self-center">
                                            <p className="title">HP Laptop with 500GB HDD <br /> 8GB RAM</p>
                                            <span className="text-muted">$850 </span>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4">
                                    <figure className="itemside mb-3">
                                        <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" /></div>
                                        <figcaption className="info align-self-center">
                                            <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p>
                                            <span className="text-muted">$650 </span>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul> */}
                <hr />
                <Link
                  to={"/order-history"}
                  className="btn btn-warning"
                  data-abc="true"
                >
                  {" "}
                  <i className="fa fa-chevron-left"></i> Back to orders
                </Link>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default singleOder;

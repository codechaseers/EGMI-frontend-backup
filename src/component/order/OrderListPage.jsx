import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import OrderHistory from "./OrderHistory";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import

const OrderListPage = () => {
  const navigate=useNavigate()

  let userId = useSelector((state) => state.authReducer.userData);
  const [orderData, SetOrderData] = useState([]);
  let userStatus = useSelector((state) => state.authReducer.loggedInStatus);
  const getOrder = async () => {
    try {
      let ordererData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/orders/${userId.id}`
      );
      if (ordererData) {
        SetOrderData(ordererData.data);
      }
    } catch (error) {
     // console.log(error);
    }
  };
  useEffect(() => {
    getOrder();
   // console.log(orderData);
  }, [userId]);

  useEffect(()=>{
    if( !userStatus)
    navigate("/")
  })
  return userId ? (
    orderData.length > 0 ? (
      <div className="OrderHistoryPageDat">
        {orderData.map((item, i) => (
          <OrderHistory orderData={item} i={i} />
        ))}
      </div>
    ) : (
      <>
        <div class=" OrderHistoryPage" >
          <div class="payEmicom payUpcomingEMI">
            <div class="PayallEMIsImg"><i class="fa fa-exclamation-triangle"></i></div>
            <div class="PayallEMIsIinf">
              <h3>Your Orders</h3>
              <p> You have no order till now</p>
            </div>
            <div class="shopcome PayallEMIsbutton">
              {/* <buton>Shop Now</buton> */}
              <NavLink to={"/"}>Shop Now</NavLink>
            </div>
          </div>
        </div>
      </>
    )
  ) : (
    <>
      <h1>Loding..</h1>
    </>
  );

};
export default OrderListPage;

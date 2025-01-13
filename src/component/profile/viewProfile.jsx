import "./profile.css";
import location from "../../assets/images/profileIcon/location_icon.webp";
import notification from "../../assets/images/profileIcon/notification.webp";
import support from "../../assets/images/profileIcon/support_icon.webp";
import faq_icon from "../../assets/images/profileIcon/faq_icon.webp";
import tnc_icon from "../../assets/images/profileIcon/tnc_icon.webp";
import envelope_icon from "../../assets/images/profileIcon/envelope_icon.png";
import right_arrow from "../../assets/images/profileIcon/right_arrow_icon.png";
import logout from "../../assets/images/profileIcon/logout.png";
// import location from "../../assets/images/profileIcon/"
// import location from "../../assets/images/profileIcon/"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

function ProfilePage() {
  const [addresAvalabule,setAddresAvalabule]=useState(false)
  let navigate = useNavigate();

  const cookies = new Cookies();
  //   const [removeCookie] = useCookies(['BSE-authtoken-auto%log_in']);

  const handleRemoveCookie = () => {
    cookies.remove("BSE-authtoken-auto%log_in", { path: "/" });
    // navigate('/')
  };

  let userTokenCheck = useSelector((state) => state.authReducer.loggedInStatus);
  let userAuthCokie;
  if (userTokenCheck) {
    userAuthCokie = cookies.get("BSE-authtoken-auto%log_in");
  }

  let userStatus = useSelector((state) => state.authReducer.loggedInStatus);

  let userData = useSelector((state) => state.authReducer.userData);

  const [userAlladdress, setUserAlladdress] = useState([]);
  const getAddress = async () => {
    try {
      let userAddress = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/address`,

        { headers: { Authorization: userAuthCokie } }
      );
      if (userAddress) {
        // setSpinerstatus(false);
        //// console.log(JSON.parse(userAddress.data.userAddress[0].address));
        if (userAddress.data.userAddress.length > 0) {
          let data = JSON.parse(userAddress.data.userAddress[0].address);
          setUserAlladdress(data);
          setAddresAvalabule(true)
        }
        //   dispatch(login(userData.data.userData));
      }
    } catch (error) {
     // console.log(error);
      // dispatch(logout(error));
    }
  };
  useEffect(() => {
    getAddress();
  }, [userAuthCokie]);
  
useEffect(()=>{
  if( !userStatus)
  navigate("/")
})
 
  return   !userStatus
    ? navigate("/")
    : userData && (
        <div className="view_Profile">
          <div class="container_view_Profile ">
            <div class="customer_info_box">
              <div class="customer_personal_info">
                <div class="customer_img_box">
                  <span class="customer_img">
                    {" "}
                    {userData.name[0].toUpperCase()}
                  </span>
                </div>
                <div class="customer_info">
                  <h2> {userData.name.toUpperCase()}</h2>

                <span>{userData.email}</span>
                <span>+91{userData.mobileNo}</span>
                <span>{userData.panNo}</span>
              </div>
            </div>
            <div class="customer_address_info">
              <div class="address_type">
                <span>Address</span>
              </div>
            {  addresAvalabule ?<div class="customer_address">
                <span> {userAlladdress && userAlladdress.Flat},</span>
                <span> {userAlladdress && userAlladdress.Area},</span>
                <span> {userAlladdress && userAlladdress.City},</span>
                <span> {userAlladdress && userAlladdress.PinCode}</span>,
                <span> {userAlladdress && `+91${userAlladdress.PhoneNumber}`}</span>
              </div>:
              <div class="customer_address">
              <span> You have not saved any addresses yet.  </span>
               
            </div>}
            </div>
          </div>
        </div>

        <div class="container_view_Profile">
          <div class="account_check_mnt">
            <div className="account_check">
              <div className="lemit_check Approved_Limit ">
                <p> Approved Limit : <span>₹{Number(userData.creditLimit).toLocaleString()}</span>{" "}</p>
              </div>
              <div className="lemit_check Potential_Limit">
                <p> Potential Limit: <span>₹{Number(userData.creditLimit * 2).toLocaleString()}</span>{" "}</p>
              </div>
              <div className="lemit_check">
                <p>Available Limit : <span>₹{Number(userData.availableLimit).toLocaleString()}</span>{" "}</p>
              </div>
            </div>

          </div>
        </div>

        <div class="container_view_Profile">
          <div class="order_info_box">
            <div class="manage_address_link">
              <img src={location} />
              <Link to={"/manage-address"}>Manage Address</Link>
            </div>

            <div class="manage_orders_link">
              <svg
                width="21"
                height="23"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3h2" stroke="#000" stroke-linecap="round"></path>
                <rect
                  x=".5"
                  y=".5"
                  width="15"
                  height="4"
                  rx="1.5"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <rect
                  x="1.5"
                  y="6.5"
                  width="13"
                  height="8"
                  rx="1.5"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
              </svg>
              <Link to={"/order-history"}>My Orders</Link>
            </div>
          </div>
        </div>

        <div class="container_view_Profile">
          <div class="more_info_box">
            <div class="menu_items">
              <h3>More</h3>
              <ul class="menu_item_list">
                {/* <li>
                    <img class="link_icon" src={notification} />
                    <a href="#">
                      <span>Notification Center</span>
                      <img src={right_arrow} />
                    </a>
                  </li> */}
                <li>
                  <img class="link_icon" src={support} />
                  <Link to="/support">
                    <span>Help and Support</span>
                    <img src={right_arrow} />
                  </Link>
                </li>

                {/* <li>
                <img class="link_icon" src={faq_icon} />
                <a href="/pages/frequently-asked-questions">
                  <span>FAQs</span>
                  <img src={right_arrow} />
                </a>
              </li> */}
                <li>
                  <img class="link_icon" src={tnc_icon} />
                  <Link to="/terms-and-conditions">
                    <span>Terms &amp; conditions</span>
                    <img src={right_arrow} />
                    </Link>
                </li>
                <li>
                  <img class="link_icon" src={tnc_icon} />
                  <Link to="/privacy-policy">
                    <span>Privacy Policy</span>
                    <img src={right_arrow} />
                  </Link>
                </li>
                <li>
                  <img class="link_icon" src={envelope_icon} />
                  <Link to="/support">
                    <span>Get in touch</span>
                    <img src={right_arrow} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container_view_Profile">
          <div class="logout_box" >
            <img src={logout} />
            <a href="/" class="logout_link logout" onClick={handleRemoveCookie}>Logout</a>
          </div>
        </div>
      </div>
    );
}
export default ProfilePage;

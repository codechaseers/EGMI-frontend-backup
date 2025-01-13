import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, useLocation } from "react-router-dom"

const Protectroute = ({ isAuthenticated, path = "", children }) => {

 // console.log(isAuthenticated);
 // console.log(path);
  const navigate = useNavigate();
  const location = useLocation();


  if (!isAuthenticated && path == "profile") {

   // console.log('Inside the if statement');
   // console.log('Inside the if statement');
   // console.log(isAuthenticated);
    navigate('/')
  }
  else {
    // navigate('/')
  }


}


export default Protectroute
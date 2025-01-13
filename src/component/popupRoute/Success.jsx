import React from "react";
import { NavLink } from "react-router-dom";



const Success = () => {

  return (
    <>
      <div className="success_paget">
        <div id="success-box">
          <div className="dot"></div>
          <div className="dot two"></div>
          <div className="face">
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="mouth happy"></div>
          </div>
          <div className="shadow scale"></div>
          <div className="message"><h1 className="alerts">Success!</h1><p>Order Placed Successfully.</p></div>
          <NavLink to={"/"}>
          <button className="button-box"><h1 className="green">continue</h1></button>
          </NavLink>
          
        </div>
      </div>
      <style>
        {`


.success_paget {
  width: 100%;
  padding: 30px 0;
}
.success_paget #success-box {
  width: 445px;
  height: 560px;
  margin: 0 auto;
  background: linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%);
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
  perspective: 40px;
}
.success_paget h1.alerts {
  color: #fcfcfc;
}
.success_paget .green {
  color: #4ec07d;
}
.success_paget .face {
  position: absolute;
  width: 22%;
  height: 22%;
  background: #fcfcfc;
  border-radius: 50%;
  border: 1px solid #777;
  top: 21%;
  left: 37.5%;
  z-index: 2;
  animation: bounce 1s ease-in infinite;
}
.success_paget p {
  margin-top: -5px;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  letter-spacing: 1px;
}
.success_paget .dot {
  width: 8px;
  height: 8px;
  background: #fcfcfc;
  border-radius: 50%;
  position: absolute;
  top: 4%;
  right: 6%;
}
.success_paget .dot:hover {
  background: #c9c9c9;
}
.success_paget .two {
  right: 12%;
  opacity: 0.5;
}
.success_paget .eye {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #777;
  border-radius: 50%;
  top: 40%;
  left: 20%;
}
.success_paget .right {
  left: 68%;
}
.success_paget .mouth {
  position: absolute;
  top: 43%;
  left: 41%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.success_paget .happy {
  border: 2px solid;
  border-color: transparent #777 #777 transparent;
  transform: rotate(45deg);
}
.success_paget .shadow {
  position: absolute;
  width: 21%;
  height: 3%;
  opacity: 0.5;
  background: #777;
  left: 40%;
  top: 43%;
  border-radius: 50%;
  z-index: 1;
}
.success_paget .scale {
  animation: scale 1s ease-in infinite;
}
.success_paget .message {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 47%;
}
.success_paget .button-box {
  position: absolute;
  background: #fcfcfc;
  width: 50%;
  height: 15%;
  border-radius: 20px;
  bottom: 5%;
  left: 25%;
  outline: 0;
  border: none;
  box-shadow: 2px 2px 10px rgba(119, 119, 119, .5);
  transition: all 0.5s ease-in-out;
}
.success_paget .button-box:hover {
  background: #efefef;
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

@keyframes bounce {
  50% {
      transform: translateY(-10px);
 }
}

@keyframes scale {
  50% {
      transform: scale(0.9);
 }
}







   

        `}
      </style>
    </>
  );
};


export default Success;

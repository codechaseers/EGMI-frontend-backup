import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";


const MultiRangeSlider = () => {

    return (
        <>

            <div className="error_page">
                <div id="error-box">
                    <div className="dot"></div>
                    <div className="dot two"></div>
                    <div className="face2">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth sad"></div>
                    </div>
                    <div className="shadow move"></div>
                    <div className="message"><h1 className="alerte">Error!</h1><p>It Is  Looking Like Payment Failed, If Any Amount Deducted From Your Bank Account It Will be Refunded Within 3 Working Days</p>
                        <button className="button-box"><h1 className="red">try again</h1></button>
                    </div>
                </div>
            </div>
            <style>
                {`
       

       .error_page {
        width: 100%;
        padding: 30px 0;
      }
      .error_page #error-box {
          width: 400px;
          position: relative;
          height: 590px;
          margin: 0 auto;
          background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
          border-radius: 20px;
          box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
      }

.error_page .red {
        color: #e96075;
   }
   .error_page .alert {
        font-weight: 700;
        letter-spacing: 5px;
   }
   .error_page p {
     margin-top: -5px;
     font-size: 20px;
     font-weight: 400;
     color: #000000;
     letter-spacing: 1px;
 }
   .error_page  button, .error_page .dot {
        cursor: pointer;
   }
   .error_page .dot {
        width: 8px;
        height: 8px;
        background: #fcfcfc;
        border-radius: 50%;
        position: absolute;
        top: 4%;
        right: 6%;
   }
   .error_page .dot:hover {
        background: #c9c9c9;
   }
   .error_page .two {
        right: 12%;
        opacity: 0.5;
   }
   .error_page h1.alerte {
     color: #fff;
 }  
   .error_page .face2 {
        position: absolute;
        width: 22%;
        height: 22%;
        background: #fcfcfc;
        border-radius: 50%;
        border: 1px solid #777;
        top: 21%;
        left: 37.5%;
        z-index: 2;
        animation: roll 3s ease-in-out infinite;
   }
   .error_page .eye {
        position: absolute;
        width: 5px;
        height: 5px;
        background: #777;
        border-radius: 50%;
        top: 40%;
        left: 20%;
   }
   .error_page .right {
        left: 68%;
   }
   .error_page .mouth {
        position: absolute;
        top: 43%;
        left: 41%;
        width: 7px;
        height: 7px;
        border-radius: 50%;
   }
   
   .error_page .sad {
        top: 49%;
        border: 2px solid;
        border-color: #777 transparent transparent #777;
        transform: rotate(45deg);
   }
   
   .error_page .move {
        animation: move 3s ease-in-out infinite;
   }
   .error_page .message {
     position: absolute;
     width: 100%;
     text-align: center;
     top: 47%;
     bottom: 0;
 }
   .error_page .button-box {
     position: absolute;
     background: #fcfcfc;
     width: 202px;
     border-radius: 20px;
     top: 73%;
     left: 25%;
     outline: 0;
     border: none;
     box-shadow: 2px 2px 10px rgba(119, 119, 119, .5);
     transition: all 0.5s ease-in-out;
 }
   .error_page .button-box:hover {
        background: #efefef;
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
   }
   
   
    @keyframes roll {
        0% {
            transform: rotate(0deg);
            left: 25%;
       }
        50% {
            left: 60%;
            transform: rotate(168deg);
       }
        100% {
            transform: rotate(0deg);
            left: 25%;
       }
   }
    @keyframes move {
        0% {
            left: 25%;
       }
        50% {
            left: 60%;
       }
        100% {
            left: 25%;
       }
   }
   



   

        `}
            </style>
        </>
    );
};


export default MultiRangeSlider;

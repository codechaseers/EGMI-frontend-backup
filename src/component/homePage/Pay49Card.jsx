import { Link, json, NavLink } from "react-router-dom";
import ItemImg from "../../assets/images/homeSlider/brande/brandeItem.webp";
// import ItemImg1 from "../../assets/images/homeSlider/brande/brande2.webp"
import Star from "../../assets/images/homeSlider/svgviewer.png";
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png";
import { useState, useEffect } from "react";
import showProduct from "../../assets/images/homeSlider/brande/showscreenproduct.webp";import domyimage from "../../assets/images/dummy.png"

function Pay49card(props) {
  let image =props&& props? JSON.parse(props.ProductDetails.imageURL):"";
  function index() {
    if (image.length <= 1) {
      return 0;
    } else if (image.length == 4) {
      return Math.floor(Math.random() * 3) + 1;
    } else {
      return 1;
    }
  }

  return (
    <>
      {props.ProductDetails &&
      //   showProductScreen
      props.ProductDetails ? (
        <NavLink to={`/productdetails/${props.ProductDetails.id}`}>
          <div className="cardsBoxBody" key={props.ProductDetails.id}>
            <div className="cardBox">
              <div className="cardImg">
                <img src={image[index()].imageUrl[0]} />
                <span className="brand_name">{props.ProductDetails.brand}</span>
                <span className="emi_ct">0% EMI</span>
              </div>

              <div className="cardText">
                <span className="cardEmi">
                  ₹{" "}
                  <span>
                    {Math.floor(
                      (props.ProductDetails.dp -
                        props.ProductDetails.downPayment) /
                        props.ProductDetails.interestFreeMonth
                    )}
                  </span>
                  /mon
                </span>
                <p className="cardItemname"> {props.ProductDetails.name} </p>
                <p className="cardPrice">
                  <span className="reseantPrice">
                    ₹{Number(props.ProductDetails.dp).toLocaleString()},
                  </span>{" "}
                  <span className="cardLessPrise">
                    {" "}
                    ₹{Number(props.ProductDetails.mrp).toLocaleString()}
                  </span>
                  <span className="priceOf">
                    {Math.floor(
                      ((props.ProductDetails.mrp - props.ProductDetails.dp) /
                        props.ProductDetails.mrp) *
                        100
                    )}
                    % off
                  </span>{" "}
                </p>
                <p className="des_item">
                  {" "}
                  {props.ProductDetails.shortDescription}{" "}
                  <sapn className="des_item_dot">......</sapn>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      ) : (
        <></>
      )}

      <style>
        {`
    
    .showProductScreen span.emi_ct {
        background-color: #8b8888;
        color: transparent;
    }
    .showProductScreen span.cardEmi {
        background-color: #8b8888;
        border-color: #8b8888;
        color: transparent;
    }
    .showProductScreen p {
        background-color: #a5a5a5;
        color: #8b8888;
    }
    .showProductScreen p span {
        color: #8b8888 !important;
    }
    
    `}
      </style>
    </>
  );
}
export default Pay49card;

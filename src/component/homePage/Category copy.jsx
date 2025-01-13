import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, NavLink } from "react-router-dom";
import ItemImg from "../../assets/images/homeSlider/brande/brandeItem.webp";
// import ItemImg1 from "../../assets/images/homeSlider/brande/brande2.webp"
import Star from "../../assets/images/homeSlider/svgviewer.png";
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png";
import { useState, useEffect } from "react";
import Pay49card from "./Pay49Card";

import showProduct from "../../assets/images/homeSlider/brande/showscreenproduct.webp";
import Skaliton from "../Skaliton/Skaliton.jsx";

import Phones from "../../assets/images/homeSlider/brande/phone.png";
import Smartwatches from "../../assets/images/homeSlider/brande/Smartwatches.png";
import WirelessEarbuds from "../../assets/images/homeSlider/brande/WirelessEarbuds.png";
import WirelessEarphones from "../../assets/images/homeSlider/brande/WirelessEarphones.png";

function Deals49Now({ Product, Title, Heading, Offer }) {
  const category = [Phones, Smartwatches, WirelessEarbuds, WirelessEarphones];

  const [swipe, setSwipe] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 6.5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1224, min: 640 },
      items: 4.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // ==========  onditional swiping logic  ============
  useEffect(() => {
    if (window.screen.width > 900) {
      setSwipe(false);
    }
  });

  //   })
  //
  // if(Product.success==true)console.log(Product.allProducts);

  return (
    <>
      <h2 className="ExploreBestsellers">
        Explore <b>Category</b>
      </h2>

      <div className="cardsBoxBody">
        <Carousel
          swipeable={swipe}
          draggable={swipe}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //  deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
<<<<<<< HEAD
          {
            category.map((cat) => {
              return <img src={cat} className="bulkImage cardsBoxBody" />;
            })
            // category.map((cat)=>)
            // category.map((img) => (
            // <img   src={Phones}   className="bulkImage" />)
          }
=======
          {/* {
            Product && Product.allProducts ? (

              Product.allProducts.map((productDetails, i) => (

                <div className="bulkImageArea">
                  {category.map((img) => (
                    <img key={img} src={img} alt={img} className="bulkImage" />
                  ))}
                </div>
              ))
            ) : (
              <>
                <Skaliton />

              </>
              
            )} */}


<div className="bulkImageArea">
                  {category.map((img) => (
                    <img key={img} src={img} alt={img} className="bulkImage" />
                  ))}
                </div>

>>>>>>> f0db30fd31fea334400d9faeee949a5736709330

          {/* <Pay49card Product={Product}/> */}
        </Carousel>
      </div>
      <style>
        {`
                
                .react-multi-carousel-track li.react-multi-carousel-item {
                    margin-right: 0.1%;
                }
                `}
      </style>
    </>
  );
}
export default Deals49Now;

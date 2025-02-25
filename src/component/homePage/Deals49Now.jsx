import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link ,NavLink} from "react-router-dom";
import ItemImg from "../../assets/images/homeSlider/brande/brandeItem.webp";
// import ItemImg1 from "../../assets/images/homeSlider/brande/brande2.webp"
import Star from "../../assets/images/homeSlider/svgviewer.png";
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png";
import { useState, useEffect } from "react";
import Pay49card from "./Pay49Card";
import WirelessEarbuds from "../product/WirelessEarbuds";
import showProduct from "../../assets/images/homeSlider/brande/showscreenproduct.webp"
import Skaliton from "../Skaliton/Skaliton.jsx";

function Deals49Now({ Product, Title, Heading ,Offer}) {
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
        {Title} <b>{Heading}</b>{" "}
    
        {/* {console.log(Heading)} */}
        <NavLink  to={`/wireless-earbuds/?&heading=${encodeURIComponent(
               Heading
              )}&offer=${encodeURIComponent( Offer)}`}>
          View All <i className="fa fa-angle-double-right"></i>
        </NavLink>
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
          {
          Product &&  Product.allProducts ? (

            Product.allProducts.map((productDetails, i) => (
              
              <Pay49card ProductDetails={productDetails} i={i} />
            ))
          ) : (
            <>
          <Skaliton/>
             
            </>
          )}

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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, } from "react-router-dom";
import ItemImg from "../../assets/images/homeSlider/brande/brandeItem.webp"
// import ItemImg1 from "../../assets/images/homeSlider/brande/brande2.webp"
import Star from "../../assets/images/homeSlider/svgviewer.png"
import blueTick from "../../assets/images/homeSlider/Mask_group-10.png"
import { useState,useEffect } from "react";

function Deals99Now() {
    const [swipe, setSwipe] = useState(true);

    const responsive = { 
        desktop: {
            breakpoint: { max: 3000, min: 1224 },
            items: 7,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1224, min: 640 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
     // ==========  onditional swiping logic  ============
     useEffect(()=>{
        if(window.screen.width >900){
          setSwipe(false)
        
        }
      })

    return (
        <>
            <h2 className="ExploreBestsellers">Deals:  <b>Pay ₹99 Now</b> <Link>View All <i className="fa fa-angle-double-right"></i></Link></h2>
            <div className="cardsBoxBody">


            <Carousel
                    swipeable={swipe}
                    draggable={swipe}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
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



                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p>
                    </div>
                </div>
                <div className="cardBox">
                    <div className="cardImg"><img src={ItemImg} /></div>
                    <div className="cardText">
                        <span className="cardEmi">₹ <span>453</span>/mon</span>
                        <p className="cardItemname"> Airdopes 131 </p>
                        <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                        <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                        <div className="cardText">
                            <span className="cardEmi">₹ <span>453</span>/mon</span>
                            <p className="cardItemname"> Airdopes 131 </p>
                            <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                            <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                            {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                        </div>
                    </div>




                </Carousel>

            </div>
        </>
    )
}
export default Deals99Now;
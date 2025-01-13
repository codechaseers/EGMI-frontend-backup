import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageData = useSelector(
    (state) => state.productDetailsReduser.imageDetails
  );
  const colorId = useSelector(
    (state) => state.productDetailsReduser.selectColorid
  );  
  const productData = useSelector(
    (state) => state.productDetailsReduser.productDetails
  );

  useEffect(() => {
    // Reset the active index when the color changes
    setActiveIndex(0);
  }, [colorId, imageData]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

    // oopssPopup

    const [oopssPopup, setOopssPopup] = useState(false);
    const oopssPopupOPen = () => {
      setOopssPopup(!oopssPopup);
    };
  return (
    <>
      <div className="productImg">
        <div
          id="carouselExampleIndicators"
          className="carousel_home_slide carousel slide"
          data-bs-ride="carousel"
          data-bs-interval={ ""}
        >
          <div className="carousel-indicators">
            {imageData &&
              imageData[colorId].imageUrl.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={activeIndex === i ? 'active' : null}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={`${i}`}
                  onClick={() => handleIndicatorClick(i)}
                >
                  <img src={item} className=" w-100 desktop_time" />
                </button>
              ))}
          </div>
          <div className="carousel-inner">
            {imageData &&
              imageData[colorId].imageUrl.map((item, i) => (
                <div
                  key={i}
                  className={
                    i === activeIndex ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img src={item} className=" w-100 desktop_time" />
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + imageData[colorId].imageUrl.length) % imageData[colorId].imageUrl.length)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % imageData[colorId].imageUrl.length)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* variant */}
        {
          productData&&
          productData.category=="Smart Phones" ?<> <div className="Variant_data_show" onClick={oopssPopupOPen}>
          <p  className="close_Variant">Variant</p>
          <p>{productData.varient}</p>

          {oopssPopup && (

            <div className="Variant_data">
              <ul>
                <li className="active">{productData.varient}</li>
             
                
              </ul>
            </div>
          )}
        </div></>:<></>
        
        }
       
      </div>
    </>
  );
};

export default ProductImage;

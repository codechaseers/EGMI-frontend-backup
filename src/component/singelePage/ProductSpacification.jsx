import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductSpacification = () => {
  let spacitionData = useSelector(
    (state) => state.productDetailsReduser.specification
  );
  let productData = useSelector(
    (state) => state.productDetailsReduser.productDetails
  );
  let imageData = useSelector(
    (state) => state.productDetailsReduser.imageDetails
  );
  //// console.log(spacitionData);
  return (
    productData && (
      <>
        <div className="singleProductDescription">
          <div className="singleProductDescriptionBox">
            <p id="Description_data">Description</p>
            <p id="Reviews_data">Specification</p>
          </div>
          <div className="Description_data">
            <div className="text_description">
              <h2> {productData.name}</h2>
              <p>{productData.longDescrption}</p>
            </div>
            <div className="Description_data_item">
              <div className="Description_data_item_diteals">
                {spacitionData &&
                  spacitionData.map((item, i) => (
                    <p key={i}>
                      <span>{item.spacification_title}</span>
                      <span> {item.spacification_des}</span>
                    </p>
                  ))}
              </div>
              <div className="Description_data_item_img">
                {imageData && <img src={imageData[0].imageUrl[0]} />}
              </div>
            </div>
          </div>
          <div className="Reviews_data"></div>
        </div>
      </>
    )
  );
};
export default ProductSpacification;

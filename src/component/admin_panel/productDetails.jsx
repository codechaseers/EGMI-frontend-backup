import "./product_details_A.css";
import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const param = useParams();
  const id = param.id;
  const [imageSection, setImageSection] = useState([]);
  const [spacifiaction, setspacifiaction] = useState([]);
  async function getData() {
    let data = await axios.get(
      ` ${import.meta.env.VITE_BASE_URL}/admin/allproducts/${id}`
    );
   // console.log(data);
    // data=JSON.parse(data.data.allProducts)
    let imagedata = JSON.parse(data.data.data.imageURL);
    let specification = JSON.parse(data.data.data.specification);
    setImageSection(imagedata);
    setspacifiaction(specification);
  }

  useEffect(() => {
    getData();
  }, []);

 // console.log(imageSection);
 // console.log(spacifiaction);

  return (
    <>
      <h3>Product Details </h3>
      {/* <div className="A_Product_Details_Container">
        <div className="Product_imageContainer_A">
          <div className="ColorsSection_A">
            <h5>color : black </h5>
            <h5>color code : #oooo</h5>
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>{" "}
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div>
        <div className="Product_imageContainer_A">
          <div className="ColorsSection_A">
            <h5>color : blue </h5>
            <h5>color code : #oooo</h5>
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>{" "}
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div>
        <div className="spacificationContainer_A">
          <h5>Spacificaton: spacification Details</h5>
          <div className="spacification_A">
            <span>Spacificaton: </span> <span>Spacificaton Details </span>
          </div>{" "}
          <div className="spacification_A">
            <span>Spacificaton: </span> <span>Spacificaton Details </span>
          </div>{" "}
          <div className="spacification_A">
            <span>Spacificaton: </span> <span>Spacificaton Details </span>
          </div>{" "}

        </div>
      </div> */}
      <div className="A_Product_Details_Container">
        {imageSection.map((data) => (
          <>
            <div className="Product_imageContainer_A">
              <div className="ColorsSection_A">
                <h5>color :{data.color} </h5>
                <h5>color code : {data.colorCode}</h5>
              </div>
              {data.imageUrl.map((urls) => (
                <div className="image_container_A">
                  <img src={urls} className="img-thumbnail" alt="..." />
                </div>
              ))}
              {/* <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>{" "}
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div> */}
            </div>
          </>
        ))}
        {/* <div className="Product_imageContainer_A">
          <div className="ColorsSection_A">
            <h5>color : blue </h5>
            <h5>color code : #oooo</h5>
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>{" "}
          <div className="image_container_A">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/131-6_600x.jpg?v=1702008197"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div> */}

        <div className="spacificationContainer_A">
          <h5>Spacificaton: spacification Details</h5>
          {spacifiaction.map((data) => (
            <>
              <div className="spacification_A">
                <span>{data.spacification_title}: </span> <span> {data.spacification_des} </span>
              </div> 
            </>
          ))}
          
        </div>
      </div>
    </>
  );
};
export default ProductDetails;

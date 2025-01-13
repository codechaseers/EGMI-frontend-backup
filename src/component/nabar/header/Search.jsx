import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";




const Search = ({ SearchOpenPop, isSearchOpen }) => {
  const popupRef = useRef(null);


  let [prodtData, setProductData] = useState([]);
  let [input, setInput] = useState("");
 // console.log(input);

  const serchResulet = async (e) => {
    //// console.log(e.target.value);
    try {
      let inputValue = e.target.value;
      setInput(inputValue);
     // console.log(inputValue);
      let data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/search?search=${JSON.stringify(
          inputValue
        )} `
      );
      //  // console.log(JSON.parse(data.data));
      //  // console.log(typeof data.data);
     // console.log(data);

      if (data.status == 200 && typeof data.data == "string") {
        setProductData(JSON.parse(data.data));
      }

      if (inputValue == "") {
        setProductData([]);
      }
    } catch (error) {
     // console.log(error);
    }
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
 
      SearchOpenPop();
      console.log("clicked");
      
      console.log(showPopup);
    } 
    
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div className="search_popup ">
        <div className="search_popup_open" ref={popupRef}>
          <form className="searchform">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search your Product"
              onChange={serchResulet}
            />
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            <p className="popup_close" onClick={SearchOpenPop}>
              X
            </p>
          </form>

          {input == "" ? (
            <div className="product_search_Quick_links">
              <ul class="collection-products quick-url">
                <h3>Quick links</h3>
                <li>
                  <NavLink
                    class="collection-quick-url"
                    data-react="true"
                    to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                      "Smart Phones"
                    )}&offer=${encodeURIComponent(
                      JSON.stringify({ category: "Smart Phones" })
                    )}`}
                    onClick={SearchOpenPop}
                  >
                    Smart Phones
                  </NavLink>
                  </li>
                <li>
                  <NavLink
                    class="collection-quick-url"
                    data-react="true"
                    to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                      "EarBuds"
                    )}&offer=${encodeURIComponent(
                      JSON.stringify({ category: "EarBuds" })
                    )}`}
                    onClick={SearchOpenPop}
                  >
                    Wireless Earbuds
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    class="collection-quick-url"
                    data-react="true"
                    to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                      "Smart Watches"
                    )}&offer=${encodeURIComponent(
                      JSON.stringify({ category: "Smart Watches" })
                    )}`}
                    onClick={SearchOpenPop}
                  >
                    Smart Watches
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    class="collection-quick-url"
                    data-react="true"
                    to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                      "NeckBands"
                    )}&offer=${encodeURIComponent(
                      JSON.stringify({ category: "NeckBands" })
                    )}`}
                    onClick={SearchOpenPop}
                  >
                    Wireless Earphones
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}

          <div className="productSearch">
            {/* <div className="productSearchImg">
              <img src="https://www.bing.com/th?id=OPA.83e37BTc4u76bw474C474&o=5&pid=21.1&w=130&h=130&rs=1&qlt=100&dpr=1.7&bw=6&bc=FFFFFF" />
            </div> */}

            <div className="productSearchTitle">
              {prodtData && prodtData.length > 0 ? (
                prodtData.map((item, i) => {
                  let imagearray;
                  let imageUrl;
                  if (item.imageURL) {
                    {
                     // console.log(JSON.parse(item.imageURL));
                    }
                    imagearray = JSON.parse(item.imageURL);
                    //// console.log(item.imageURL[0].image);
                    if (item.imageURL.length > 0) {
                     // console.log(imagearray[0].imageUrl);

                      imageUrl = imagearray[0].imageUrl[0];
                      //// console.log(imageUrl);
                    }
                  }

                  return (
                    <NavLink
                      to={`/productdetails/${item.id}`}
                      onClick={SearchOpenPop}
                      className="search_data"
                    >
  
                        <div className="productSearchImg">
                          <img src={imageUrl} />
                        </div>
                        <p key={i}>{item.name}</p>
                 
                    </NavLink>
                  );
                })
              ) : (
                <div className="no_match_found">
                  <p>{input !== "" ? `No Results found for ${input}` : ""}</p>
                </div>
              )}
            </div>

            {/* end Product div */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;

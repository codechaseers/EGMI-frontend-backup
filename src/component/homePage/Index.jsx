import HoleSloder from "./slider.jsx";
import Category from "./Category.jsx";
import BrandLogo from "./brandLogo.jsx";
import Bestsellers from "./Bestsellers.jsx";
import Pay49Now from "./Deals49Now.jsx";
// import Pay49Now from "./Deals49Now copy.jsx"
import Pay99Now from "./Deals99Now.jsx";
import "./homePage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, NavLink } from "react-router-dom";
import Skaliton from "../Skaliton/Skaliton.jsx";

function HomeSlider() {
  const [allProduct49, setAllProduct49] = useState();
  const [allProduct99, setAllProduct99] = useState();
  const [bestselers, setBestselers] = useState();
  const [trending, setTrending] = useState();
  useEffect(() => {
    getData();
  }, []);

  // ---------------------------------------->Products Api Call <---------------------------
  async function getData() {
    const filterData1 = { downPayment: "49" };
    const filterData2 = { downPayment: "149" };
    const filterData3 = { Flag: "Best selling" };
    const filterData4 = { Flag: "trending" };
    try {
      const data = await axios.get(
        ` ${
          import.meta.env.VITE_BASE_URL
        }/filteredproducts?filter=${JSON.stringify(
          filterData1
        )}&page=0&limit=30`
      );
      // console.log(data , "12545");
      const data2 = await axios.get(
        ` ${
          import.meta.env.VITE_BASE_URL
        }/filteredproducts?filter=${JSON.stringify(
          filterData2
        )}&page=0&limit=30`
      );
      const data3 = await axios.get(
        ` ${
          import.meta.env.VITE_BASE_URL
        }/filteredproducts?filter=${JSON.stringify(
          filterData3
        )}&page=0&limit=30`
      );
      const data4 = await axios.get(
        ` ${
          import.meta.env.VITE_BASE_URL
        }/filteredproducts?filter=${JSON.stringify(
          filterData4
        )}&page=0&limit=30`
      );

      // data=JSON.parse(data.data.allProduct49s)
      // console.log(data.data , "hhhhh");
      // console.log(data2.data , "12223");
      // console.log(data3.data);
      setAllProduct49(data.data);
      setAllProduct99(data2.data);
      setBestselers(data3.data);
      setTrending(data4.data)
    } catch (error) {
      // console.log(error);
    }
  }

  // {console.log(allProduct49);}
  let obj = {
    category: "Smart Phones",
    brand: "Oppo",
    // minPrice:1000,
    maxPrice: 1800,
    sort: "Trending",
  };
  obj = JSON.stringify(obj);

  return (
    <>
      {" "}
      <HoleSloder />
      <div className="container_body">
        <BrandLogo />
        {/* <Pay49Now
          Product={bestselers}
          Title="Deals: "
          Heading="Best In Trending"
          Offer={obj}
        /> */}
        <Pay49Now
          Product={allProduct49}
          Title="Deals: "
          Heading="Pay ₹49 Now"
          Offer={JSON.stringify({ downPayment: "49",sort: "Featured" })}
        />
        <Category />
        <Pay49Now
          Product={trending}
          Title="Deals: "
          Heading="Trending 5G Smart Phones"
          Offer={JSON.stringify({ sort: "Trending" })}
        />
        <Pay49Now
          Product={allProduct99}
          Title="Deals: "
          Heading="Pay ₹149 Now"
          Offer={JSON.stringify({ downPayment: "149" ,sort: "Featured" })}
        />
        <Pay49Now
          Product={bestselers}
          Title="Deals: "
          Heading="Best Selling"
          Offer={JSON.stringify({ sort: "Best selling" })}
        /> 
         {/* <Pay49Now
          Product={bestselers}
          Title="Deals: "
          Heading="Top Deals"
          Offer={JSON.stringify({ sort: "Top Deals" })}
        /> */}

        {/* <Bestsellers /> */}
      </div>
      {/* <button onClick={getData}>get data</button> */}
    </>
  );
}
export default HomeSlider;

import "./addproduct.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add_product() {
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXX

  const notify = () =>
    toast.warn(" Fill all fields first ...👀", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifySucess = () =>
    toast.success(" Producte Added 💥", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const AddProductApi = async (data) => {
    try {
      const productdata = await axios.post(
        ` ${import.meta.env.VITE_BASE_URL}/admin/addproduct`,
        {
          name: data.name,
          brand: data.brand,
          category: data.category,
          imageURL: JSON.stringify(data.imageURL),
          mrp: data.mrp,
          dp: data.dp,
          shortDescription: data.shortDescription,
          longDescrption: data.longDescrption,
          specification: JSON.stringify(data.specification),
          downPayment: data.downPayment,
          flag: data.flag,
          varient:data.varient,
          createdBy: data.createdBy,
          totalAvailableMonthForEmi: data.totalAvailableMonthForEmi,
          interestFreeMonth: data.interestFreeMonth,
        }
      );
      if (productdata) {
        //console.log(productdata);
        notifySucess();
        setProduct({
          name: "",
          des: "",
          long_des: "",
          category: "",
          brand: "",
          flag: "",
          mrp: "",
          our_price: "",
          createdBy:"",
          varient:""
        });
  
        setFormData({
          imagesWithColors: [{ color: "", colorCode: "", imageUrl: [""] }],
        });
        // spacification empty
        setData([{ spacification_title: "", spacification_des: "" }]);
      }
    } catch (error) {
      //console.log(error);
    }

    // //console.log("api calling", data);
  };

  const [formData, setFormData] = useState({
    imagesWithColors: [{ color: "", colorCode: "", imageUrl: [""] }],
  });

  const handleInputChange = (index, key, value) => {
    const updatedimagesWithColors = [...formData.imagesWithColors];
    updatedimagesWithColors[index][key] = value;
    setFormData({ ...formData, imagesWithColors: updatedimagesWithColors });
  };

  const handleContactNumberChange = (addressIndex, contactIndex, value) => {
    const updatedimagesWithColors = [...formData.imagesWithColors];
    updatedimagesWithColors[addressIndex].imageUrl[contactIndex] = value;
    setFormData({ ...formData, imagesWithColors: updatedimagesWithColors });
  };

  const addAddress = () => {
    setFormData({
      ...formData,
      imagesWithColors: [
        ...formData.imagesWithColors,
        { color: "", colorCode: "", imageUrl: [""] },
      ],
    });
  };

  const addContactNumber = (addressIndex) => {
    const updatedimagesWithColors = [...formData.imagesWithColors];
    updatedimagesWithColors[addressIndex].imageUrl.push("");
    setFormData({ ...formData, imagesWithColors: updatedimagesWithColors });
  };

  const deleteAddress = (addressIndex) => {
    const updatedimagesWithColors = [...formData.imagesWithColors];
    updatedimagesWithColors.splice(addressIndex, 1);
    setFormData({ ...formData, imagesWithColors: updatedimagesWithColors });
  };

  const deleteContactNumber = (addressIndex, contactIndex) => {
    const updatedimagesWithColors = [...formData.imagesWithColors];
    updatedimagesWithColors[addressIndex].imageUrl.splice(contactIndex, 1);
    setFormData({ ...formData, imagesWithColors: updatedimagesWithColors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // //console.log(formData);
  };

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXX

  const [imageUrls, setImageUrls] = useState([{ imageurls: "" }]);
  const [imagedata, setImagedata] = useState(["", ""]);
  const [data, setData] = useState([
    { spacification_title: "", spacification_des: "" },
  ]);
  const [imageColors, setImageColors] = useState([
    { imageColor: "", colorCode: "", imageurl: imagedata },
  ]);

  const [product, setProduct] = useState({
    name: "",
    des: "",
    long_des: "",
    category: "",
    brand: "",
    flag: "",
    mrp: "",
    our_price: "",
    createdBy: "",
    varient:null,
  });
  // const [arr, setArr] = useState(0);
  function handeform(e) {
    e.preventDefault();
    // AddProductApi()
  }
  let setname;

  const handleInput = (e) => {
    setname = e.target.name;
    let value = e.target.value;
    setProduct({ ...product, [setname]: value });
 
  };

  function add(e) {
    e.preventDefault();
    setData([...data, { spacification_title: "", spacification_des: "" }]);
    // return(//console.log("hii")
    // setArr(arr + 1)
  }
  function addImageContainer(e) {
    e.preventDefault();
    setImageColors([
      ...imageColors,
      { imageColor: "", colorCode: "", imageUrl: [] },
    ]);
    // setImageColors([...imageColors,  {  imageUrl: [] }]);

    // return(//console.log("hii")
    // setArr(arr + 1)
  }

  function addImageUrl(e) {
    e.preventDefault();
    // setImageColors([...imageColors,  {  imageUrl: [] }]);
    // setImageUrls([...imageUrls,{imageUrl:""}])
    setImageUrls([...imageUrls, ""]);

    // return(//console.log("hii")
    // setArr(arr + 1)
  }

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    // const onchangeVal2 = [...imageColors];
    onchangeVal[i][name] = value;
    setData(onchangeVal);
    // setImageColors(onchangeVal2)
  };
  const handleChange2 = (e, i) => {
    const { name, value } = e.target;

    const onchangeVal2 = [...imageColors];
    onchangeVal2[i][name] = value;
    setImageColors(onchangeVal2);
    setImagedata(onchangeVal2);
  };
  const handleChange3 = (e, i) => {
    const { name, value } = e.target;

    const onchangeVal3 = [...imageUrls];
    onchangeVal3[i][name] = value;

    setImageUrls(onchangeVal3);
  };

  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };
  const handleDeleteImageContainer = (i) => {
    const deleteVal2 = [...imageColors];
    deleteVal2.splice(i, 1);
    setImageColors(deleteVal2);
  };

  const submit = (e) => {
    e.preventDefault()
    if (
      product.name == "" ||
      product.brand == "" ||
      product.mrp == "" ||
      product.our_price == "" ||
      product.flag == "" ||
      product.category=="" ||
      product.createdBy =="" ||
      product.des=="" ||
      product.long_des=="" 
    

    ) {
      notify();
    } else {
     

      // //console.log(product);
      // //console.log(data);       // all form  data //console log  heare
      // //console.log(formData);
      // //console.log(   imageColors.imagesWithColors)   
      let downPayment = "";
      let interestFreeMonth = "";
      let totalAvailableMonthForEmi = "";
      if (product.our_price > 0 && product.our_price <= 1000) {
        downPayment = "49";
        interestFreeMonth = "6";
        totalAvailableMonthForEmi = "12";
      } else if (product.our_price > 1000 && product.our_price <= 2000) {
        downPayment = "149";
        interestFreeMonth = "6";
        totalAvailableMonthForEmi = "12";
      } else if (product.our_price > 2000 && product.our_price <= 4000) {
        downPayment = "199";
        interestFreeMonth = "6";
        totalAvailableMonthForEmi = "12";
      } else if (product.our_price > 4000 && product.our_price <= 8000) {
        downPayment = "399";
        interestFreeMonth = "9";
        totalAvailableMonthForEmi = "12";
      } else if (product.our_price > 8000 && product.our_price <= 16000) {
        downPayment = "599";
        interestFreeMonth = "12";
        totalAvailableMonthForEmi = "24";
      } else if (product.our_price > 16000 && product.our_price <= 32000) {
        downPayment = "799";
        interestFreeMonth = "18";
        totalAvailableMonthForEmi = "24";
      } else {
        downPayment = "999";
        interestFreeMonth = "18";
        totalAvailableMonthForEmi = "24";
      }
      //console.log(product.our_price);
      AddProductApi({
        name: product.name,
        brand: product.brand,
        category: product.category,
        imageURL: formData.imagesWithColors,
        mrp: product.mrp,
        dp: product.our_price,
        shortDescription: product.des,
        longDescrption: product.long_des,
        specification: data,
        varient:product.varient,
        downPayment,
        flag: product.flag,
        createdBy: product.createdBy,
        totalAvailableMonthForEmi,
        interestFreeMonth,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="Addproduct_container">
        <form>
          {/* <form onSubmit={handeform}> */}
          <h1>Add Products</h1>

          <div className="form-group">
            <label className="label fs-4">Product name</label>
            <input
              name="name"
              value={product.name}
              onChange={handleInput}
              type="text"
              required
              className="form-control admin_form_input "
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label className="label fs-4">Short Description</label>
            <input
              name="des"
              value={product.des}
              onChange={handleInput}
              type="text"
              required
              className="form-control admin_form_input"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label className="label fs-4">Long Description</label>
            <textarea
              name="long_des"
              value={product.long_des}
              onChange={handleInput}
              rows="5"
              required
              className="form-control admin_form_input "
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group ">
            <label className="label fs-4">Chose Category</label>
            <select
              id="inputState"
              className="form-control admin_form_input"
              name="category"
              value={product.category}
              onChange={handleInput}
            >
              <option selected>Choose Category ▽ </option>
              <option>EarBuds</option>
              <option>Smart Watches</option>
              <option>NeckBands</option>
              <option>Smart Phones </option>
            </select>
          </div>
          <div className="form-group ">
            <label className="label fs-4">Chose Brand </label>
            <select
              id="inputState"
              className="form-control admin_form_input"
              name="brand"
              value={product.brand}
              onChange={handleInput}
            >
              <option selected>Choose Brand ▽</option>
              <option>Boat</option>
              <option>Noise</option>
              <option>Fire Boalt</option>
              <option>Realme</option>
              <option>Vivo</option>
              <option>Oppo</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Mi</option>
            </select>
          </div>

          {/* ============ image color section  ==============*/}
          {formData.imagesWithColors.map((address, addressIndex) => (
            <div
              className="form-group spacification_cotaniner"
              key={addressIndex}
            >
              <label className="label fs-4">Color</label>
              <input
                className="form-control w-25 admin_form_input "
                type="text"
                value={address.color}
                onChange={(e) =>
                  handleInputChange(addressIndex, "color", e.target.value)
                }
              />
              <label className="label fs-4">Color Code</label>
              <input
                className=" w-25  form-control admin_form_input"
                type="text"
                value={address.colorCode}
                onChange={(e) =>
                  handleInputChange(addressIndex, "colorCode", e.target.value)
                }
              />
              {address.imageUrl.map((contactNumber, contactIndex) => (
                <div
                  className="image_url_container form-group"
                  key={contactIndex}
                >
                  <label className="label fs-4">Image url</label>
                  <input
                    className="form-control form-group admin_form_input"
                    type="text"
                    value={contactNumber}
                    onChange={(e) =>
                      handleContactNumberChange(
                        addressIndex,
                        contactIndex,
                        e.target.value
                      )
                    }
                  />
                  <button
                    className="btn bg-danger m-2"
                    type="button"
                    onClick={() =>
                      deleteContactNumber(addressIndex, contactIndex)
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className="btn bg-warning m-2"
                type="button"
                onClick={() => addContactNumber(addressIndex)}
              >
                Add Image url
              </button>
              <button
                className="btn bg-danger mx-2"
                type="button"
                onClick={() => deleteAddress(addressIndex)}
              >
                Delete Secotion
              </button>
            </div>
          ))}
          <button
            className="btn bg-warning m-2"
            type="button"
            onClick={addAddress}
          >
            Add New
          </button>
          {/* <button type="submit">Submit</button> */}
          {/* ============= image color section end =================*/}

          <div className="form-group ">
            <label className="label fs-4">Chose Flag</label>
            <select
              id="inputState"
              className="form-control admin_form_input"
              name="flag"
              value={product.flag}
              onChange={handleInput}
            >
              <option selected>Choose Flag ▽</option>
              <option>Best selling</option>
              <option>Top Deals</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label fs-4">Mrp</label>
            <input
              name="mrp"
              value={product.mrp}
              onChange={handleInput}
              type="text"
              required
              className="form-control admin_form_input"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label className="label fs-4">Our Price</label>
            <input
              name="our_price"
              value={product.our_price}
              onChange={handleInput}
              type="text"
              required
              className="form-control admin_form_input "
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label className="label fs-4">Varient</label>
            <input
              name="varient"
              value={product.varient}
              onChange={handleInput}
              type="text"
              required
              className="form-control admin_form_input"
              id="exampleInputEmail1"
            />
          </div>
          {/* <div className="form-group">
            <label className="label fs-4">Discounted Price :</label>
            <input
              name="discount_price"
              value={product.discount_price}
              onChange={handleInput}
              type="text"
              required
              className="form-control "
              id="exampleInputEmail1"
            />
          </div> */}
          {/* ================= category section  start =====================*/}
          <div className="form-group  spacification_cotaniner i">
            {data.map((val, i) => {
              return (
                <>
                  <div className="spacification">
                    <label className="label m-2 fs-4">
                      Spacification Title:
                    </label>
                    <input
                      value={val.spacification_title}
                      name="spacification_title"
                      type="text"
                      required
                      className="form-control w-25 m-1 admin_form_input"
                      id="exampleInputEmail1"
                      onChange={(e) => handleChange(e, i)}
                    />
                    <label className="label m-2 fs-4">
                      Spacification Description:
                    </label>
                    <input
                      value={val.spacification_des}
                      name="spacification_des"
                      type="text"
                      required
                      className="form-control w-25 m-1  admin_form_input"
                      id="exampleInputEmail1"
                      onChange={(e) => handleChange(e, i)}
                    />
                    {/* <button className="btn bg-danger mx-2" onClick={()=>handleDelete(i)}>Delete</button> */}
                    <button
                      className="btn bg-danger mx-2"
                      onClick={() => handleDelete(i)}
                    >
                      X
                    </button>
                  </div>
                </>
              );
            })}

            <button className="btn bg-warning mx-2 " onClick={add}>
              <h3>+</h3>
            </button>
            {/* <p>{JSON.stringify(data)}</p> */}
          </div>
          {/*====================== category section  end =====================*/}
          <div className="form-group ">
            <label className="label fs-4">Created By</label>
            <select
              id="inputState"
              className="form-control admin_form_input"
              name="createdBy"
              value={product.createdBy} 
              onChange={handleInput}
            >
              <option selected>Created By ▽ </option>
              <option>Jashashree Dash</option>
              <option>Bharat Naik</option>
              <option>Aniket Shribastav</option>
              <option>priyadarshani Thakur </option>
              <option>Ritika Samantaroy </option>
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn bg-success text-light fs-4 w-25 h-25 m-2"
              onClick={submit}
              type="submit"
            >
              Submit
            </button>
          </div>
      
        </form>
      </div>
    </>
  );
}

export default Add_product;

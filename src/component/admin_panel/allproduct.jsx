import "./allproduct.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Allproducts = () => {
  const notify = () => toast.error(' Item deleted!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    



  const [allProduct, setAllproduct] = useState([]);

  async function getData() {
    const data = await axios.get(
      ` ${import.meta.env.VITE_BASE_URL}/admin/allproducts`
    );
    // data=JSON.parse(data.data.allProducts)
    //// console.log(data.data. allProducts )
    setAllproduct(data.data.allProducts);
  }


  

  const deleteItem=async (itemid)=>{
   let deleteitem=await axios.delete(` ${import.meta.env.VITE_BASE_URL}/admin/allproducts/${itemid}`)
    //// console.log(itemid);
    notify()

  }
  useEffect(() => {
    getData();
  }, [deleteItem]);

  return (
    <>
     <ToastContainer />
      <h3 className="Allproduct_heading">Allproducts</h3>
      <div className="allproducts_container">
        <div className="table_container">
          <table>
            <tr>
              <th>Sl No</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Discounted Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Flag</th>
              <th>Product Des</th>
              <th>Long Des</th>
              <th>Created By</th>
              <th>View Image And Spacifications</th>
              
              <th>Action</th>
            </tr>
            {allProduct.map((products,i) => (
              <>
                <tr key={products.id}>
                  <td>{i+1}</td>
                  <td>{products.name}</td>
                  <td>{products.mrp}</td>
                  <td>{products.dp}</td>
                  <td>{products.brand}</td>
                  <td>{products.category}</td>
                  <td>{products.flag}</td>
                  <td>{products.shortDescription}</td>
                  <td>{products.longDescrption}</td>
                  <td>{products.createdBy}</td>
                  <td>
                   <NavLink to={`/admin/productdetails/${products.id}`}> <button className="btn btn-info"  >View</button></NavLink>
                  </td>

                  <td>
                    <button className=" btn btn-danger"  onClick={()=>deleteItem(products.id)}>Delete</button>
                  </td>
                </tr>
              </>
            ))}
         
          </table>
        </div>
      </div>
    </>
  );
};

export default Allproducts;

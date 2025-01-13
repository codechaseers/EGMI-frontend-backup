import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skaliton.css"
import { useEffect, useState } from "react";

const Skaliton = () => {
    const [numberOfSkaliton ,setNumberOfSkaliton]=useState( [])
    function NumberOfSkaliton(){
      let num=10
      let arr=[]
      for (let i = 0; i < num; i++) {     
        arr.push(i)
      }
      setNumberOfSkaliton(arr)
    }
  
  useEffect(()=>{
    NumberOfSkaliton()
  },[])


  return (
    <>
      <SkeletonTheme baseColor="#e7e3e3" highlightColor="#fff">
        <div className="SkalitonMainContainer">

      {
        numberOfSkaliton.map((i)=>(
            <div className="SkalitonContainer" key={i}>
            <Skeleton height={180} width={180} />
            <Skeleton height={26} width={178} />
            <Skeleton height={26} width={128} />
           
          </div>
        ))
      }
       
      
         
        
         
        </div>
      </SkeletonTheme>
    
    </>
  );
};
export default Skaliton;

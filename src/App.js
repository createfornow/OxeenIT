import { useState } from 'react';

import './App.css';
import data from "./data/data"
import facebook from "./data/Image/facebook.png"
import instagram from "./data/Image/instagram.png"
import twitter from "./data/Image/twitter.png"
import youtube from "./data/Image/youtube.png"
import Image from "./components/Image"


// console.log(data);

function App() {

  const[home,setHome]=useState(data[0])
  const handleChange=(id)=>{
    //  console.log(data.data[id-1])
      setHome(data[id-1])
  }
  
  return (
    <>
    
       <nav>
        <div className="container-fluid"></div>
         <div className="row">

          <div className="col-4 social ms-2">

            <a href="https://www.facebook.com/" target="blank">  <img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/" target="blank"><img src={instagram} alt="" /></a>
            <a href="https://twitter.com/" target="blank"><img src={twitter} alt="" /></a>
            <a href="https://www.youtube.com/" target="blank"><img src={youtube} alt="" /></a>
          
          </div>
          <div className="navhead col-4 text-center">O᙭EEᑎ & ᖴITᑎEᔕᔕ</div>
          <div className="col-3 text-end"> 
             <div className="dropdown">
               <i className="bi bi-grid dropbtn"></i>
               <div className="dropdown-content">
               <a href="#">Cardio</a>
               <a href="#">Gym</a>
               <a href="#">Deit</a>
              </div>
          </div>
          </div>
         </div>
       </nav>
       
       
       <div className="flex-column icon float-end ">
        {data.length >0 && data.map((ele)=>(<div className="col-2 mb-2" key={ele.id}>
          <i style={{color:home.id==ele.id?"#11FF00":"white"}} 
        className="bi bi-nut" onClick={()=>{handleChange(ele.id)}}></i></div>
        // console.log(ele.id);
        ))
        // console.log(data)
        }
       
       </div>
       
       <Image data={home} />
      
    </>  
     

 
  );
}

export default App;

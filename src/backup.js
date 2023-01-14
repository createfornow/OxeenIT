import { useState } from 'react';

import './App.css';
import facebook from "./components/facebook.png"
import instagram from "./components/instagram.png"
import twitter from "./components/twitter.png"
import youtube from "./components/youtube.png"
import Image from "./components/Image"
import f1 from "./components/f1.jpg"
import f2 from "./components/f2.jpg"
import f3 from "./components/f3.jpg"
import f4 from "./components/f4.jpg"
import f5 from "./components/f5.jpg"



function App() {
  const[home,setHome]=useState({
    image:f1,
    id:1,
    head:"Set Goal"
  })
  const handleChange=(a)=>{
     if(a===1){
      setHome({
        image:f1,
        id:1,
        head:"Set Goal"
      })
     }
     if(a===2){
      setHome({
        image:f2,
        id:2,
        head:"Eat Fresh"
      })
     }
     if(a===3){
      setHome({
        image:f3,
        id:3,
        head:"Work Hard"
      })
     }
     if(a===4){
      setHome({
        image:f4,
        id:4,
        head:"Eat Green"
      })
     }
     if(a===5){
      setHome({
        image:f5,
        id:5,
        head:"Warm Up"
      })
     }
  }

  
  const[color,setColor]=useState("white");
  // const colorChange=()=>{
  //   if(color==="white"){
  //     setColor("#11ff00")
  //   }
  //   if(color==="#11ff00"){ 
  //     setColor("white")
  //   }
  // }


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
               <i class="bi bi-grid dropbtn"></i>
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
        <div className="col-2 mb-2"><i style={{color:home.id==1?"blue":"red"}} className="bi bi-nut" onClick={()=>{handleChange(1);}}></i></div>
        <div className="col-2 mb-2"> <i style={{color:home.id==2?"blue":"red"}} className="bi bi-nut"  onClick={()=>{handleChange(2);}}></i></div>
        <div className="col-2 mb-2"> <i className="bi bi-nut"  onClick={()=>{handleChange(3)}}></i></div>
        <div className="col-2 mb-2"> <i className="bi bi-nut"  onClick={()=>{handleChange(4)}}></i></div>
        <div className="col-2"> <i className="bi bi-nut" onClick={()=>{handleChange(5)}}></i></div>
       </div>
       
       <Image data={home} />
      
    </>  
     

 
  );
}

export default App;

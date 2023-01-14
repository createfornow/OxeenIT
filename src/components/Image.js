import React from 'react'
import './Image.css';
import f1 from "../data/Image/f1.jpg"
function Image(props) {
  // console.log(props.home)
  return (
    <>
      <div className="container-fluid">
      <div className="image"><img src={props.data.image} alt={"image"}/></div>
      <div className="heading" ><h1 >{props.data.head}</h1></div>
      
    </div>
    </>
  )
}

export default Image

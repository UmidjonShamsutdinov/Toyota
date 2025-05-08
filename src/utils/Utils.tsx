import React from "react"
import "./Utils.scss"
const Utils = () => {
  return (
    <div>Utils</div>
  )
}

export default Utils



export const Container = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="container">
            {children}
        </div>
    )
}



export const SmallContainer = ({children}:{children:React.ReactNode})=>{
  return(
    <div className="small-container">
      {children}
    </div>
  )
}



interface ReusableButtonProps {
  name: React.ReactNode;
  size: number
  Bgcolor?: string; // optional, agar doim bo'lishi shart bo'lmasa
  color?: string;   // optional
}

export const ReusableButton = (props:ReusableButtonProps)=>{
  
  return (
    <button className="reusable-button" style={{backgroundColor:props.Bgcolor, color:props.color, fontSize:props.size+"px"}}>
      {props.name}
    </button>
  )
}






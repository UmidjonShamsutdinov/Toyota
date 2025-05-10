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
  after?: boolean
  Bgcolor?: string; // optional, agar doim bo'lishi shart bo'lmasa
  color?: string;   // optional
}

export const ReusableButton = (props:ReusableButtonProps)=>{
  
  return (
      <button className={`reusable-button ${props.after ? "btn-after" : ""}`} style={{backgroundColor:props.Bgcolor, color:props.color, fontSize:props.size+"px"}}>
        <div className="btn-text">
          {props.name}
        </div>
      </button>
  )
}






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
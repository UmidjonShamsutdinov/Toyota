import { Container } from "../../utils/Utils"
import mainLogo from "../../assets/mainLogo.svg"
// import beyondLogo from "../../assets/beyond.svg"
import { useState } from "react"
import "./Nav.scss"
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const loggingIn = () => {
        setLoggedIn(!loggedIn)
    }

    const handleAnimate = (e:any) => {
        if(e.currentTarget.childNodes[1].className === "animate"){
            e.currentTarget.childNodes[1].className = "animate-reverse"           
            return 0;
        }      
        for(let i:number=0; i<e.currentTarget.parentElement.children.length-1; i++){
            if(e.currentTarget.parentElement.children[i].childNodes[1].className === "animate"){
                e.currentTarget.parentElement.children[i].childNodes[1].className = "animate-reverse"         

            }
        }        
        e.currentTarget.childNodes[1].className = "animate"        
    }



  return (
    <nav className="nav-main">
        <Container>
            <div className="nav">
                <div className="logo">
                    <img src={mainLogo} alt="" className="main-logo" width={124}/>
                </div>
                <div className="nav-details">
                    <p onClick={(e)=>{handleAnimate(e)}}>Vehicles<span><FaChevronDown/></span></p>
                    <p onClick={(e)=>{handleAnimate(e)}}>Shopping<span><FaChevronDown/></span></p>
                    <p onClick={(e)=>{handleAnimate(e)}}>Owners<span><FaChevronDown/></span></p>
                    <div className="is-logged">
                        {loggedIn ? <img src={mainLogo} alt="photo" onClick={loggingIn} width={66}/> : <FaRegCircleUser style={{color:"black"}} onClick={loggingIn} className="nav-user"/>}
                    </div>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav
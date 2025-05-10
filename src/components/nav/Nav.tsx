import { Container } from "../../utils/Utils"
import mainLogo from "../../assets/mainLogo.svg"
// import beyondLogo from "../../assets/beyond.svg"
import { useState } from "react"
import "./Nav.scss"
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import data  from "../../db/db.json"
import { Link } from "react-router-dom";


const Nav = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [hiddenProducts, setHiddenProducts] = useState<string>("hidden")
    
    
    const loggingIn = () => {
        // Logging informations are here
        setLoggedIn(!loggedIn)
    }

    const handleAnimate = (e: React.MouseEvent<HTMLElement>) => {
        const currentChild = e.currentTarget.childNodes[1] as HTMLElement;
        setHiddenProducts("flex")
        if (currentChild.className === "animate") {
            currentChild.className = "animate-reverse";
            setHiddenProducts("hidden")
            return;
        }
        
        const parentChildren = e.currentTarget.parentElement!.children;
        for (let i = 0; i < parentChildren.length - 1; i++) {
            const child = parentChildren[i].childNodes[1] as HTMLElement;
            if (child.className === "animate") {
                child.className = "animate-reverse";
            }
        }
    
        currentChild.className = "animate";
    };



  return (
    <nav className="nav-main">
        <div className={`products-details-${hiddenProducts}`}>
            <div className="hidden-products">
                <div className="hudden-products-sidebar">
                    Sidebar
                </div>
                <div className="hidden-products-grid">
                    {
                        data.Products.map((e:any, i:number)=>
                            <div className="grid-card" key={i}>
                                <img src={e.images?.[1]} alt="Photos"/>
                                <p>{e.name}</p>
                                <p>{e.model}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        <Container>
            <div className="nav">
                <div className="logo">
                    <Link to={"/"}>
                    <img src={mainLogo} alt="" className="main-logo" width={124}/>
                    </Link>
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


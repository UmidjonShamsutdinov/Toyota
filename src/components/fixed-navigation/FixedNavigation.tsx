import { Link } from "react-router-dom"
import { Container, ReusableButton } from "../../utils/Utils"
import "./FixedNavigation.scss"


const FixedNavigation = () => {
  return (
    <div className="fixed-navigation">
        <Container>
            <div className="main-fixed">
                <h2>Camry</h2>
                <ul>
                    <li><Link to={"/"}>Overview</Link></li>
                    <li><Link to={"/"}>Specs</Link></li>
                    <li><Link to={"/"}>Gallery</Link></li>
                    <li><Link to={"/"}>Features</Link></li>
                    <li><Link to={"/"}>Trims</Link></li>
                    <li><Link to={"/"}>Compare</Link></li>
                    <li><Link to={"/"}>Offers</Link></li>
                </ul>
                <ReusableButton Bgcolor="#fff" color="#000" name="Build" size={14} after={true}/>
            </div>
        </Container>
    </div>
  )
}

export default FixedNavigation
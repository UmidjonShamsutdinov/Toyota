import { Container, ReusableButton } from "../../utils/Utils"
import "./Hero.scss"
import { IoPauseOutline } from "react-icons/io5";
import data from "../../db/db.json"



const Hero = () => {
  
  

  
  


  const screenWidth = window.innerWidth
  const heroData = data.Hero
  return (
    <div className="hero-main">
      <video width="100%" autoPlay muted loop>
        <source src={heroData["hero-video"]} type="video/mp4" />
        Sizning brauzeringiz video formatni qo‘llab-quvvatlamaydi.
      </video>
      
      <Container>
        <div className="hero" style={{width:screenWidth-120}}>
            <h2>{heroData["hero-title"]}</h2>
            <div>
              <p>{heroData["hero-text"]} <span>{heroData["hero-span-text"]}</span></p>
              <ReusableButton Bgcolor={"#000"} name="Info" color={"#fff"}/>
              <ReusableButton Bgcolor={"#fff"} name={<IoPauseOutline/>} color={"#000"}/>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
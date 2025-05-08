import FixedNavigation from '../../components/fixed-navigation/FixedNavigation'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <div className='fixed-line'>
          <FixedNavigation/>
        </div>
    </div>
  )
}

export default Home
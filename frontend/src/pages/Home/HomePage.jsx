import About from '../../components/Home/About/About'
import Hero from '../../components/Home/Hero/Hero'
import Events from '../../components/Home/Events/Events'
import Executives from '../../components/Home/Executives/Executives'
import FAQs from '../../components/Shared/FAQs/Faqs'

import './HomePage.css'
// import { useEffect } from 'react'

/** SECTIONS
 ** hero -- ashraf
 ** about us
 * section 1 --ashraf
 * section 2,3 -- emma
 * section 4 -- sodiq
 ** events and bootcamps -- israel
 ** executives -- israel
 ** FAQS -- emma
 */

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // }, [])

  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Executives />
      <FAQs />
    </main>
  )
}

export default HomePage

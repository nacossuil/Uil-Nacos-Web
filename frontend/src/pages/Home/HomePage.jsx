import About from '../../components/Home/About/About'
import Hero from '../../components/Home/Hero/Hero'
import Section_2_3 from '../../components/Home/Section_2_3/sec2'
import FAQs from '../../components/Home/FAQs/faq'
import './HomePage.css'

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
  return (
    <main>
      <Hero />
      <About />
      <Section_2_3 />
      <FAQs />
    </main>
  )
}

export default HomePage
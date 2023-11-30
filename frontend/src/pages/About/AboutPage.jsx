import Hero from "../../components/About/Hero/Hero"
import Main from "../../components/About/Main/Main"
import Section1 from "../../components/About/Section1/sec1"
import Values from '../../components/Shared/Values/Values'
import Executives from '../../components/Home/Executives/Executives'
import Faqs from "../../components/Shared/FAQs/Faqs"

const AboutPage = () => {
  return (
    <section className=" about-page">
      <Hero />
      <Main />
      <Section1 />
      <Values />
      <Executives />
      <Faqs />
    </section>
  )
}

export default AboutPage
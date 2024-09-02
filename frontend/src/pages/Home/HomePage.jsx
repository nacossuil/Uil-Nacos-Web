import About from "../../components/Home/About/About";
import Hero from "../../components/Home/Hero/Hero";
import Events from "../../components/Events/Events/Events";
import Executives from "../../components/Home/Executives/Executives";
import FAQs from "../../components/Shared/FAQs/Faqs";

import "./HomePage.css";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Executives />
      <FAQs />
    </main>
  );
};

export default HomePage;

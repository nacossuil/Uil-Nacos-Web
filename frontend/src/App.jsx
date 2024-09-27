import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/About/AboutPage";
import EventsPage from "./pages/Events/EventsPage";
import OpportunitiesPage from "./pages/Opportunities/OpportunitiesPage";
import ScrollToTop from "./assets/up-arrow-icon.svg?react";

function App() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  // zoom level functionality
  useEffect(() => {
    document.body.style.zoom = "95%"; // Set default zoom level to 95%
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollToTopVisible(true);
    } else if (scrolled <= 300) {
      setScrollToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
      <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            {/* <Route path="/calculator" element={<CgpaCalculatorPage />} /> */}
          </Routes>
          {scrollToTopVisible ? (
              <div
                  className="scroll-to-top-icon"
                  onClick={() => {
                    scrollToTop();
                  }}
              >
                <ScrollToTop />
              </div>
          ) : null}
        </main>
        <Footer />
      </>
  );
}

export default App;

  import { Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar/Navbar";
  import HeroSection from "./components/HeroSection/HeroSection";
  import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
  import Projects from "./components/Projects/Projects";
  import Testimonials from "./components/Testimonials/Testimonials";
  import Footer from "./components/Footer/Footer"; // ✅ Import Footer
  import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
  import TermsAndConditions from "./pages/TermsandConditions/TermsandConditions";
  import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
  import ECommerce from "./pages/eCommerce/eCommerce";
  import CocaColaCaseStudy from "./pages/CaseStudies/CocaColaCaseStudy";
  import Careers from "./pages/Careers/Careers";


  import Portfolio from "./pages/Portfolio/Portfolio";
  import Blog from "./pages/Blog/Blog";
  import DigitalMarketing from "./pages/DigitalMarketing/DigitalMarketing";
  import GetInTouch from "./pages/GetInTouch/GetInTouch";

  function App() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WhatWeDo />
                <Projects />
                <Testimonials />
              </>
            }
          />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/who-we-are" element ={<WhoWeAre />} />
          <Route path="/blog" element ={<Blog />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/portfolio" element ={<Portfolio />} /> 
          <Route path="/portfolio/coca-cola-case-study" element={<CocaColaCaseStudy />} />
          <Route path="/careers" element={<Careers />} />

        </Routes>

        <Footer /> {/* ✅ Global footer rendered after all routes */}
      </>
    );
  }

  export default App;

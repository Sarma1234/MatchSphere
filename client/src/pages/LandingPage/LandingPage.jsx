import "./LandingPage.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/HeroComponent";
import TrustStats from "../../components/TrustStats/TrustStats";
import Features from "../../components/Features/Features";
import CategoryStrip from "../../components/CategoryStrip/CategoryStrip";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import useMouseGlow from "../../hooks/useMouseGlow";
function LandingPage() {
  useMouseGlow();
  return (
    <div className="landing-page">

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      <Navbar />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <TrustStats />
      </AnimatedSection>

      <AnimatedSection>
        <Features />
      </AnimatedSection>

      <AnimatedSection>
        <CategoryStrip />
      </AnimatedSection>

      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>

      <AnimatedSection>
        <CTA />
      </AnimatedSection>

      <Footer />

    </div>
  );
}

export default LandingPage;
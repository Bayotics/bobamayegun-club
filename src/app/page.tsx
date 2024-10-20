
import { Banner } from "@/components/HomePage/Banner";
import { IntroSection } from "../components/HomePage/IntroSection"; 
import { AboutUs } from "@/components/HomePage/AboutUs";
import { Initiatives } from "../components/HomePage/Initiatives";
import { WhyUs } from "@/components/HomePage/WhyUs";
import OurExcos from "@/components/HomePage/Excos/OurExcos";

export default function Home() {
  return (
    <div className="homepage-main">
      <div className="home-banner">
        <Banner />
      </div>
      <div className="home-intro">
        <IntroSection />
      </div>
      <div className="">
        <AboutUs />
      </div>
      <div className = 'initiatives-home-main'>
        <Initiatives />
      </div>
      <div className="home-why-us">
        <WhyUs />
      </div>
      <div className="home-our-excos pt-24 bg-gray-200 mb-44">
        <OurExcos />
      </div>
    </div>
  );
}

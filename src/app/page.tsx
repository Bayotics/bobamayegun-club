
import { Banner } from "@/components/HomePage/Banner";
import { IntroSection } from "../components/HomePage/IntroSection"; 
import { AboutUs } from "@/components/HomePage/AboutUs";
import { Initiatives } from "../components/HomePage/Initiatives";
import { WhyUs } from "@/components/HomePage/WhyUs";
import OurExcos from "@/components/HomePage/Excos/OurExcos";
import Gallery from "@/components/HomePage/Gallery";
import { EventHome } from "@/components/HomePage/Events/EventHome";
import { JoinUs } from "@/components/HomePage/JoinUs";

export default function Home() {
  return (
    <div className="homepage-main">
      <div className = 'home-gradient-top'>
        <div className="home-banner">
          <Banner />
        </div>
        <div className="home-intro">
          <IntroSection />
        </div>
      </div>
      <div className="">
        <AboutUs />
      </div>
      <div className = 'initiatives-home-main'>
        <Initiatives />
      </div>
      <div className="home-why-us mt-20">
        <WhyUs />
      </div>
      <div className="home-our-excos pt-32">
        <OurExcos />
      </div>
      <div className="home-gallery mt-16">
        <Gallery />
      </div>
      <div className="home-join-us mt-16 border">
        <JoinUs />
      </div>
      <div className="home-event mb-44 border">
        <EventHome />
      </div>
    </div>
  );
}

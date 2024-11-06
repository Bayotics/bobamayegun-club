
import { Banner } from "@/components/HomePage/Banner";
import { IntroSection } from "../components/HomePage/IntroSection"; 
import { AboutUs } from "@/components/HomePage/AboutUs";
import { Initiatives } from "../components/HomePage/Initiatives";
import { WhyUs } from "@/components/HomePage/WhyUs";
import OurExcos from "@/components/HomePage/Excos/OurExcos";
import Gallery from "@/components/HomePage/Gallery";
import { EventHome } from "@/components/HomePage/Events/EventHome";
import { JoinUs } from "@/components/HomePage/JoinUs";
import { Slider } from "@/components/HomePage/Slider";
import { HomeFaqMain } from "@/components/HomePage/FAQApplication";
import Block from "@/components/HomePage/Reviews/Block";
// import { HomeFaq } from "@/components/HomePage/FAQ/HomeFaq";

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
      <div className = 'slider-home-main mt-4'>
        <Slider />
      </div>
      <div className="home-gallery mt-16">
        <Gallery />
      </div>
      <div className="home-join-us mt-16">
        <JoinUs />
      </div>
      <div className="home-event mb-44 ">
        <EventHome />
      </div>
      <div className="home-reviews mb-44 ">
        <Block />
      </div>
      <div className="home-faq mb-44 ">
        <HomeFaqMain />
      </div>
    </div>
  );
}

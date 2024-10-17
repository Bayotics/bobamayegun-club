
import { Banner } from "@/components/HomePage/Banner";
import { IntroSection } from "../components/HomePage/IntroSection"; 
import { AboutUs } from "@/components/HomePage/AboutUs";

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
    </div>
  );
}


import { Banner } from "@/components/HomePage/Banner";
import { IntroSection } from "../components/HomePage/IntroSection"; 

export default function Home() {
  return (
    <div className="homepage-banner-main">
      <Banner />
      <IntroSection />
    </div>
  );
}

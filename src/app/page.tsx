
import { Banner } from "@/components/HomePage/Banner";
import { IntroSection } from "../components/HomePage/IntroSection"; 

export default function Home() {
  return (
    <div className="homepage-main">
      <Banner />
      <IntroSection />
    </div>
  );
}

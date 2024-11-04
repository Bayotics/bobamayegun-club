
import { Banner } from "@/components/Banner";
import Content from "@/components/Gallery/Content";

export default function GalleryPage (){
    return (
        <div className="gallery-page-main">
             <Banner
             bannerBgName={'gallery-page-banner'}
             textHeader={'Events Gallery'}
             subText={'Explore some of our memorable moments captured on camera '}
             />
             <div className="gallery-content px-20">
                <Content />
             </div>
        </div>
    )
}
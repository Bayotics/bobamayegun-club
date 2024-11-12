'use client'
import { Slide} from "react-awesome-reveal";
import { OjudeObaimages, OjudeObaimages2017, atlanta2024, conference2018, donations, wedding } from "./imageFiles"
import Gallery from "./Cards"

export default function Content () {
    
    return (
        <div className = 'gallery-contents-main my-20'>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Ojude Oba Festival 2024
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={OjudeObaimages} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Ojude Oba Festival 2017
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={OjudeObaimages2017} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Annual General Meeting, Atlanta 2024
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={atlanta2024} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Ileya party at Conference Hotel 2018
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={conference2018} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Donation of School Uniforms at different Schools
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={donations} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Bobamayegun Members @ Alhaji Ogunleyes wedding, Texas
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={wedding} />
                </div>      
            </div>
                  
        </div>
    )
}
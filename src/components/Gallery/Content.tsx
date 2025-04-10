'use client'
import { Slide} from "react-awesome-reveal";
import { OjudeObaimages, OjudeObaimages2017, atlanta2024, conference2018, donations, wedding, getTogetherImgs } from "./imageFiles"
import Gallery from "./Cards"

export default function Content () {
    
    return (
        <div className = 'gallery-contents-main my-20'>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Ojude Oba Festival 2018
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
                            Ojude Oba Festival 2019
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={OjudeObaimages2017} />
                </div>      
            </div>
            <div className="snp-contents mt-40 px-16">
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Ojude Oba Festival 2024
                        </h1>
                    </Slide>
                </div>
                <div className="gallery-vid-display mt-16">
                <iframe className="rounded-xl" height="515" src="https://www.youtube.com/embed/2gnZyEkjOgk?si=xM3fQI7VSU2bJ5Es" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Mayegun Day, North America Chapter 2024
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={atlanta2024} />
                </div>  
                <div className="mt-10">
                    <iframe className="rounded-xl" height="515" src="https://www.youtube.com/embed/34iWcNe6RVI?si=ZP6YCbmBmfXY5x1P" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>    
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            First Get together outside Ijebu 2024
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={getTogetherImgs} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            Donation of Educational Materials across multiple Schools
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
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <Slide direction = 'up'>
                        <h1 className="text-3xl font-semibold text-center">
                            More Events
                        </h1>
                    </Slide>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={conference2018} />
                </div>      
            </div>
                  
        </div>
    )
}
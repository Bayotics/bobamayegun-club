import { OjudeObaimages, OjudeObaimages2017, atlanta2024 } from "./imageFiles"
import Gallery from "./Cards"

export default function Content () {
    
    return (
        <div className = 'gallery-contents-main my-20'>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <h1 className="text-3xl font-semibold text-center">
                        Ojude Oba Festival 2024
                    </h1>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={OjudeObaimages} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <h1 className="text-3xl font-semibold text-center">
                        Ojude Oba Festival 2017
                    </h1>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={OjudeObaimages2017} />
                </div>      
            </div>
            <div className = 'gallery-container mt-40'>
                <div className="gallery-content-header">
                    <h1 className="text-3xl font-semibold text-center">
                        Annual General Meeting, Atlanta 2024
                    </h1>
                </div>
                <div className="pics-display mt-16">
                    <Gallery images={atlanta2024} />
                </div>      
            </div>
                  
        </div>
    )
}
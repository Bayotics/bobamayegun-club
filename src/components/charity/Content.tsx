'use client'
 
import { Fade} from "react-awesome-reveal";

export function Content () {

  return (
    <div className="charity-content-main mt-20 mb-10">
      <div className="orphanage-block flex px-10 gap-20">
        <div className="orphanage-cover w-1/2 rounded-2xl border-8 border-white">
        </div>
        <div className="orphanage-text w-1/2 py-32">
          <Fade direction="up" triggerOnce>
            <p>Orphanage Charity</p>
            <h1 className="text-3xl mt-4 font-semibold">
              Visit to Orphanage Homes
            </h1>
            <h2 className="mt-2 text-lg text-gray-600">
              As part of our mission at Egbe Bobamayegun Okunriun Akile Ijebu 
              is to help the less priviledge in the society,
              we engage in regular visits and donations to orphanage homes
            </h2>
          </Fade>
        </div>
      </div>
      <div className="orphanage-block-ii flex px-10 gap-20 mt-20">
        <div className="orphanage-text w-1/2 py-32">
          <Fade direction="up" triggerOnce>
            <p>Development</p>
            <h1 className="text-3xl mt-4 font-semibold">
              Community Development Projects
            </h1>
            <h2 className="mt-2 text-lg text-gray-600">
              Bobamayegun invests in infrastructure that enhances the quality of life in 
              rural communities. This includes funding for clean water projects, 
              road repairs, and the construction of public facilities. 
            </h2>
          </Fade>
        </div>
        <div className="orphanage-cover-ii w-1/2 rounded-2xl">
        </div>
      </div>
      <div className="orphanage-block-iii mt-20 flex px-10 gap-20">
        <div className="orphanage-cover-iii w-1/2 rounded-2xl border-8 border-white">
        </div>
        <div className="orphanage-text w-1/2 py-32">
          <Fade direction="up" triggerOnce>
            <p>Access to clean water</p>
            <h1 className="text-3xl mt-4 font-semibold">
              Water Delivery Initiative
            </h1>
            <h2 className="mt-2 text-lg text-gray-600">
              This program ensures that remote communities receive a consistent 
              supply of clean water, improving public health, sanitation, and overall quality of life.
            </h2>
          </Fade>
        </div>
      </div>
    </div>
    
  )
}
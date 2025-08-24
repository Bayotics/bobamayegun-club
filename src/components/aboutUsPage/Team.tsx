import ExcoModal from './ExcoModal';
import { excoDetails } from './excoDetails';
import { Slide, Zoom } from "react-awesome-reveal";

export function Team () {
    return (
        <div className="about-team py-20 px-32">
            <div className = 'team-intro text-center px-32'>
                <Slide direction = 'down' triggerOnce>
                    <h1 className="text-3xl font-semibold">
                    Meet Our Chiefs & Board of Trustees
                    </h1>
                    <p className="mt-6 text-gray-600 ">
                        We are thrilled to introduce to you the management team in our society.
                        Each individual brings<br/> a wealth of experience,creativity, and
                        passion to our society. 
                    </p>
                </Slide>
            </div>
            <div className="mt-10 about-exco-grid grid grid-cols-3 gap-10">
                {excoDetails.map((items) => {
                    return(
                        <div className="aeg-i bg-white pb-3 shadow-xl" key={items._name}>
                            <Zoom triggerOnce>
                            <div className='exco-img-about'>
                                <img src={items.imgSrc.src} alt='exco' className='w-full h-[400px]'/>
                            </div>
                            </Zoom>
                            <div className='exco-img-info mt-2 flex px-4 justify-between'>
                                <div className='exco-title mt-2'>
                                    <h1 className='font-semibold text-balance'>
                                        {items._name}
                                    </h1> 
                                    <p className=' text-gray-600 text-sm'>{items._title}</p>
                                </div>
                                <div className='exco-popup pt-3'> 
                                    <ExcoModal
                                        excoName={items._name}
                                        title={items._title}
                                        description={items._description}
                                        igLink={items._igLink}
                                        xLink={items.xLink}
                                        fbLink={items.fbLink}
                                    />
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
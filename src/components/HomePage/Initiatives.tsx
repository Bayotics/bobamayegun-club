'use client'
import ReactCardCarousel from 'react-card-carousel';
import AnimatedBtn from './AnimatedBtnForAbout';

export function Initiatives () {
    return (
      <div className='initiatives-content-home py-1'>
        <div className = 'initiatives-home-texts mt-20 px-40'>
          <p className='text-center text-black font-medium'>Our Initiatives</p>
          <h1 className='text-3xl text-black font-semibold text-center mt-1'>
            What We Do
          </h1>
        </div>
        <div className='flex initiative-grid'>
          <div className='initiative-grid-texts w-1/2'>
            <div className='init-grid-text-box mt-32 pl-10'>
              <h1 className='text-[3.75rem] font-semibold text-purple-950 leading-none'>
                How we impact the society</h1>
              <p className='text-base mt-8'>Preserving, 
                promoting, and celebrating the rich cultural heritage of the Ijebu people 
              </p>
              <div className='initiative-btn'>
                <button className='init-btn 
                  bg-gradient-to-r from-purple-500 to-purple-900 px-8 hover:bg-black
                  py-4 rounded-full text-white mt-12'>
                  Join our Community
                </button>
              </div>
            </div>
          </div>
          <div className='initiative-container-style mt-10 w-1/2'>
            <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
              <div className='initiative-card-style init-card-one pl-6 pr-10 pb-10'>
                <p className='text-gray-200 text-base'>COMMUNITY</p>
                <h1 className='text-white font-semibold text-2xl mt-6'>Empowerment</h1>
                <h2 className='text-gray-200 mt-6 text-base'>Empowering our members and the 
                  community with mentorship, 
                  career development programs, and networking opportunities...
                </h2>
                <div className='ic-home-btn mt-20'>
                  <AnimatedBtn />
                </div>
              </div>
              <div className='initiative-card-style init-card-two pl-6 pr-10 pb-10'>
                <p className='text-gray-200 text-base'>CULTURAL</p>
                  <h1 className='text-white font-semibold text-2xl mt-6'>Events & Festivals</h1>
                  <h2 className='text-gray-200 mt-6 text-base'>
                    We organize annual festivals, cultural performances, 
                    and ceremonies to showcase Ijebu and Yoruba culture to a wider audience...
                  </h2>
                  <div className='ic-home-btn mt-20'>
                    <AnimatedBtn />
                  </div>
              </div>
              <div className='initiative-card-style init-card-three pl-6 pr-10 pb-10'>
                <p className='text-gray-200 text-base'>CHARITY</p>
                <h1 className='text-white font-semibold text-2xl mt-6'>Donations</h1>
                <h2 className='text-gray-200 mt-6 text-base'>
                  Through various donation drives, 
                  community outreach programs, and special projects, 
                  we promote education, health, and well-being, 
                  particularly within underserved communities...
                </h2>
                <div className='ic-home-btn mt-16'>
                  <AnimatedBtn />
                </div>
              </div>
              <div className='initiative-card-style init-card-four pl-6 pr-10 pb-10'>
                <p className='text-gray-200 text-base'>HERITAGE</p>
                <h1 className='text-white font-semibold text-2xl mt-6'>Preservation Projects</h1>
                <h2 className='text-gray-200 mt-6 text-base'>
                  Our heritage preservation initiatives are aimed at documenting, 
                  safeguarding, and promoting Yoruba historical artifacts, 
                  oral histories, and cultural expressions...
                </h2>
                <div className='ic-home-btn mt-16'>
                  <AnimatedBtn />
                </div>
              </div>
            </ReactCardCarousel>
          </div>
        </div>
        
      </div>
    );
  }


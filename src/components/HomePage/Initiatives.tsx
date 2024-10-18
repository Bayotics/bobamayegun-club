'use client'
import ReactCardCarousel from 'react-card-carousel';
import AnimatedBtn from './AnimatedBtnForAbout';

export function Initiatives () {
    return (
      <div className='initiatives-content-home border py-10 bg-gray-300'>
        <div className = 'initiatives-home-texts mt-20 px-40'>
          <p className='text-center text-black font-medium'>Our Initiatives</p>
          <h1 className='text-3xl text-black font-semibold text-center mt-1'>
            How We Impact Society
          </h1>
          <h1 className='text-center mt-4'>At Egbe Bobamayegun, we are committed to preserving, 
            promoting, and celebrating the rich cultural heritage of the Ijebu people 
            and fostering unity within the broader African diaspora. 
            Our services and initiatives are designed to inspire cultural pride, 
            facilitate knowledge sharing, and strengthen community bonds.
          </h1>
        </div>
       <div className='initiative-container-style mt-10'>
          <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
            <div className='initiative-card-style init-card-one pl-6 pr-24'>
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
            <div className='initiative-card-style init-card-two pl-6 pr-24'>
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
            <div className='initiative-card-style init-card-three pl-6 pr-24'>
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
            <div className='initiative-card-style init-card-four pl-6 pr-24'>
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
    );
  }


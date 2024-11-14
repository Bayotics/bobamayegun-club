'use client'
import ReactCardCarousel from 'react-card-carousel';
import AnimatedBtn from './AnimatedBtnForAbout';
import {Fade } from 'react-awesome-reveal';
import Link from "next/link";



export function Initiatives () {
  const style = 'p-4 mt-2 w-2/3 border-2 grid place-content-center border-white bg-black'

    return (
      <div className='initiatives-content-home py-1'>
        <div className = 'initiatives-home-texts mt-20 px-40'>
          <Fade direction = 'up' cascade triggerOnce>
            <p className='text-center text-black font-medium'>Our Initiatives</p>
            <h1 className='text-3xl text-black font-semibold text-center mt-1'>
              What We Do
            </h1>
          </Fade>
        </div>
        <div className='flex initiative-grid'>
          <div className='initiative-grid-texts w-1/2'>
            <Fade direction='left' triggerOnce>
              <div className='init-grid-text-box mt-32 pl-10'>
                <h1 className='text-[3.75rem] font-semibold text-purple-950 leading-none'>
                  How we impact the society</h1>
                <p className='text-base mt-8'>Preserving, 
                  promoting, and celebrating the rich cultural heritage of the Ijebu people 
                </p>
                <div className='initiative-btn'>
                  <Link href  = '/membership'>
                    <AnimatedBtn text={'Join our Community'}
                    style={'bg-gradient-to-r from-purple-500 to-purple-900 px-8 hover:bg-black py-4 rounded-full text-white mt-12 w-[45%] text-center'} />
                  </Link>
                </div>
              </div>
            </Fade>
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
                    <Link href = '/aboutus'>
                      <AnimatedBtn 
                      text={'Learn More →'}
                      style = {style}/>
                    </Link>
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
                      <Link href = '/socialnetwork'>
                        <AnimatedBtn 
                        text={'Learn More →'}
                        style = {style}/>
                      </Link>              
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
                      <Link href = '/charity'>
                        <AnimatedBtn 
                        text={'Learn More →'}
                        style = {style}/>
                      </Link>                  
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
                      <Link href = '/aboutus'>
                        <AnimatedBtn 
                        text={'Learn More →'}
                        style = {style}/>
                      </Link>                    
                  </div>
                </div>
              </ReactCardCarousel>
          </div>
        </div>
        
      </div>
    );
  }


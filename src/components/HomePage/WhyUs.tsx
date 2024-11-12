'use client'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import whyUsI from '@/images/why-us-i.jpeg';
import whyUsIII from '@/images/why-us-iii.jpeg';
import aboutImg from '@/images/banner-img.jpg'
import { WhyUsAnimate } from './WhyUsAnimation';
import Image from 'next/image';
import { Zoom, Fade } from 'react-awesome-reveal';

export function WhyUs () {
    return(
        <div className = 'why-us-content bg-[#1e1b24] py-20 px-10'>
            <div className = 'flex'>
                <div className='why-us-left w-1/2'>
                    <Fade direction = 'up' triggerOnce>
                        <p className='text-gray-200'>Why join us?</p>
                        <h1 className="text-white mt-4 font-bold text-4xl">
                            Become a Part of the Bobamayegun Family
                        </h1>
                    </Fade>
                </div>
                <div className='why-us-right w-1/2'>
                    <Fade direction = 'down' triggerOnce>
                        <p className='ml-6 text-gray-300 text-lg mt-10'>
                            You become part of a family 
                            dedicated to preserving and sharing the values and 
                            customs that define who we are.
                        </p>
                    </Fade>                   
                </div>
            </div> 
            <div className='flex gap-8'>
                <div className='why-us-cards mt-12 w-1/2'>
                <Fade direction = 'left' cascade triggerOnce>
                    <div className='wuc-i bg-[#26232c] ml-8 w-[90%] rounded-3xl pl-8 pr-10 py-6'>
                            <div className='flex gap-4 wuc-content'>
                                <div className='wuc-icon'>
                                    <div className="wug-icon rounded-2xl text-[#d1cadd]  
                                        px-4 py-3 bg-[#1b1a1f]"
                                        ><AccountBalanceOutlinedIcon className='text-3xl text-center'/>
                                    </div>
                                </div>
                                <div className='wuc-texts'>
                                <h1 className='text-gray-200 text-lg font-semibold'>
                                    Cultural Preservation
                                </h1>
                                <p className='text-gray-300 text-base mt-4'>
                                    You’ll play an active role in keeping the Ijebu and 
                                    Yoruba culture alive, from traditional ceremonies to language 
                                    promotion.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className='wuc-ii bg-[#26232c] mt-4 w-[90%] rounded-3xl pl-8 pr-10 py-6'>
                            <div className='flex gap-4 wuc-content'>
                                <div className='wuc-icon'>
                                    <div className="wug-icon rounded-2xl text-[#d1cadd]  
                                        px-4 py-3 bg-[#1b1a1f]"
                                        ><EscalatorWarningOutlinedIcon className='text-3xl text-center'/>
                                    </div>
                                </div>
                                <div className='wuc-texts'>
                                <h1 className='text-gray-200 text-lg font-semibold'>
                                    Community Support  
                                </h1>
                                <p className='text-gray-300 text-base mt-4'>
                                    Our society is built on the foundation of mutual support. 
                                    We believe in helping one another through life’s challenges, 
                                    offering guidance, mentorship, and assistance in times of need. 
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className='wuc-iii bg-[#26232c] mt-4 ml-8 w-[90%] rounded-3xl pl-8 pr-10 py-6'>
                            <div className='flex gap-4 wuc-content'>
                                <div className='wuc-icon'>
                                    <div className="wug-icon rounded-2xl text-[#d1cadd]  
                                        px-4 py-3 bg-[#1b1a1f]"
                                        ><Diversity3OutlinedIcon className='text-3xl text-center'/>
                                    </div>
                                </div>
                                <div className='wuc-texts'>
                                <h1 className='text-gray-200 text-lg font-semibold'>
                                    Networking and Opportunities
                                </h1>
                                <p className='text-gray-300 text-base mt-4'>
                                    Being part of our society connects you with individuals
                                    from various walks of life, both locally and globally
                                </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='flex wur-pics gap-4 mt-12 ml-4 w-1/2'>
                    <div className='wur-pic-left w-1/2'>
                        <Image src={whyUsI} alt='bobamayegun' 
                            className='rounded-3xl h-full' />
                    </div>
                    <div className='wur-pic-right w-1/2'>
                        <Zoom duration = {2000} >
                            <div className='wpr-top'>
                                <Image src={aboutImg} alt='bobamayegun' 
                                className='rounded-3xl h-[265px] w-full'/>
                            </div>
                            <div className='wpr-bottom mt-4'>
                                <Image src={whyUsIII} alt='bobamayegun' 
                                    className='rounded-3xl h-[265px] w-full' />
                            </div>
                        </Zoom>
                    </div>
                </div> 
            </div>
        </div>
    )
}
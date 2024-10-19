'use client'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import { WhyUsAnimate } from './WhyUsAnimation';

export function WhyUs () {
    return(
        <div className = 'why-us-content bg-[#090513]'>
            <div className = 'why-us-text px-32 py-20'>
                <p className="text-center text-white">Why Join Us?</p>
                <h1 className="text-white text-center mt-4 font-semibold text-3xl">
                    Become a Part of the Bobamayegun Family
                </h1>
                <h2 className="mt-2 text-gray-300 text-center text-base">
                    We are a community that celebrates tradition, foster unity, 
                    and promotes the rich heritage of the Ijebu people. 
                    By joining our society, you become part of a family 
                    dedicated to preserving and sharing the values and 
                    customs that define who we are.
                </h2>
            </div>
            <div className="why-us-grid flex  gap-4  px-10 mt-10">
                <div className="wug-left grid grid-cols-2 w-2/3 gap-12">
                    <div className="wug-left-content  ">
                        <div className="wug-icon w-[15%] rounded-full text-white  
                         px-4 py-3 bg-[#281b47]"
                        ><AccountBalanceOutlinedIcon className='text-3xl text-center'/>
                        </div>
                        <div className='wug-texts pr-5'>
                            <h1 className='text-gray-200 text-lg font-semibold mt-8'>
                                Cultural Preservation
                            </h1>
                            <p className='text-gray-300 text-sm mt-4'>
                                As a member, you’ll play an active role in keeping the Ijebu and 
                                Yoruba culture alive. From traditional ceremonies to language 
                                promotion, your involvement helps preserve the customs 
                                passed down through generations.
                            </p>
                        </div>
                    </div>
                    <div className="wug-left-content  ">
                        <div className="wug-icon w-[15%] rounded-full text-white  
                         px-3 py-4 bg-[#281b47] "
                        ><EscalatorWarningOutlinedIcon className='text-3xl text-center'/>
                        </div>
                        <div className='wug-texts pr-5'>
                            <h1 className='text-gray-200 text-lg font-semibold mt-8'>
                                Community Support
                            </h1>
                            <p className='text-gray-300 text-sm mt-4'>
                                Our society is built on the foundation of mutual support. 
                                We believe in helping one another through life’s challenges, 
                                offering guidance, mentorship, and assistance in times of need. 
                            </p>
                        </div>
                    </div>
                    <div className="wug-left-content  ">
                        <div className="wug-icon w-[15%] rounded-full text-white  
                         px-4 py-4 bg-[#281b47]"
                        ><Diversity3OutlinedIcon className='text-3xl text-center'/>
                        </div>
                        <div className='wug-texts pr-5'>
                            <h1 className='text-gray-200 text-lg font-semibold mt-8'>
                                Networking and Opportunities
                            </h1>
                            <p className='text-gray-300 text-sm mt-4'>
                                Being part of our society connects you with individuals
                                from various walks of life, both locally and globally. 
                                These connections foster relationships that can lead to new 
                                personal, academic, and professional opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="wug-left-content  ">
                        <div className="wug-icon w-[15%] rounded-full text-white  
                         px-4 py-3 bg-[#281b47]"
                        ><CelebrationOutlinedIcon className='text-3xl text-center'/>
                        </div>
                        <div className='wug-texts pr-5'>
                            <h1 className='text-gray-200 text-lg font-semibold mt-8'>
                                Events and Celebrations
                            </h1>
                            <p className='text-gray-300 text-sm mt-4'>
                                We organize cultural events, and gatherings where you can immerse 
                                yourself in Yoruba and Ijebu traditions. These celebrations are a 
                                chance to learn, enjoy, and pass on the beauty of our culture to 
                                future generations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3  wug-right">
                    <WhyUsAnimate />
                </div>
            </div>
        </div>
    )
}
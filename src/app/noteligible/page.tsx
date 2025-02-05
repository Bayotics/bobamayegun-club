'use client'

import Link from 'next/link';
import AnimatedBtn from '@/components/HomePage/AnimatedBtnForAbout';

export default function notEligible () {
    return (
        <div className = 'noteligible-main'>
            <div className="noteligible-page-banner py-40 px-32">
                <h1 className="text-6xl font-semibold text-white">
                    Not Eligible :(
                </h1>
                <p className="mt-8 font-normal text-lg text-white">
                    Get a Bobamayegun okunrin Akile Ijebu membership and be eligible for exclusive events in our society 
                </p>
            </div>
            <div className="noteligible-content mt-20 px-20 py-10 mb-20">
                <div className='mt-20 mb-20 py-24 px-52 bg-slate-600'>
                    <h2 className='text-white text-center font-semibold text-3xl'>Sorry, You are not 
                        eligible to attend this event because you are not a Bobamayegun Okunrin Akile Ijebu member!</h2>
                    <h2 className='text-white text-center font-semibold text-xl mt-5'>Click the button below
                        to join the society first
                    </h2>
                    <div className = 'w-1/3 mt-8 m-auto'>
                        <Link href={'/membershipform'}>
                        <AnimatedBtn 
                            text={'Join Us'}
                            style={' w-full mt-10 bg-black px-4 py-6  text-white text-center text-2xl'}/>
                        </Link>
                    </div>
                </div>  
            </div>
        </div>
    )
}
'use client'

import eventsAvi from '@/images/social/social-events-avi.png'
import Image from 'next/image';
import ShiftingCountdown from './CountDown';
import eventPhone from '@/images/social/event-phone.png'
import Link from "next/link";


export function EventHome () {
    return(
        <div className="event-home-contents h-[680px] px-4 py-16">
            <Image className='event-phone' src={eventPhone} alt='event' />
            <div className="event-home-hero flex rounded-3xl">
                <div className = 'event-left py-16 px-20 w-2/3 rounded-l-3xl bg-gradient-to-tr from-[#1e293b] from-50% via-[#46269e] via-70% to-[#da5296] to-90%'>
                    <div className="event-left-texts">
                        <h1 className="text-white font-semibold text-4xl leading-tight">
                            Join us for our <br/> <span className="event-span">
                            10th YEAR ANNIVERSARY!!
                            </span>.
                        </h1>
                        <h2 className="text-gray-400 text-lg mt-4">
                            Our events are not just about entertainment; they are a gateway
                            to understanding the values, wisdom, and creativity of the Yoruba people.
                        </h2>
                        <div className="attend-event flex gap-4 mt-6">
                            <div className="attend-event-btn">
                                <Link href = '/anniversary'>
                                    <button className=
                                    "text-white mt-1 px-4 py-2 bg-[#3b82f6] rounded-3xl hover:bg-[#336ac4]">
                                        Make Inquiry →
                                    </button>
                                </Link>
                            </div>
                            <div className='event-avis'>
                                <Image src={eventsAvi} alt='attending' 
                                className='h-[80%] '/>
                            </div>
                            <p className='text-gray-400 mt-3'>+50 attending</p>
                        </div> 
                    </div>
                    <div className='event-countdown mt-4'>
                        <ShiftingCountdown />
                    </div>
                </div>
                <div className="event-right w-1/3 rounded-r-3xl bg-gradient-to-tl from-[#5299c9] from-30% via-[#1e293b] via-70% to-[#da5296] to-90%'">

                </div>
            </div>
        </div>
    )
}
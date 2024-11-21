'use client'
import AnimatedBtn from '../HomePage/AnimatedBtnForAbout'
import Link from 'next/link'
import pici from '@/images/social-gatherings/social-g-i-transformed.png'
import picii from '@/images/social-gatherings/social-g-ii-transformed.png'
import piciii from '@/images/social-gatherings/social-g-iii.jpg'
import piciv from '@/images/social-gatherings/social-g-iv.jpg'
import picv from '@/images/social-gatherings/social-g-v.jpg'
import picvi from '@/images/social-gatherings/social-g-vi.jpg'
import picvii from '@/images/social-gatherings/social-g-vii.jpg'
import picviii from '@/images/social-gatherings/social-g-viii.jpg'
import picix from '@/images/social-gatherings/social-g-ix.jpg'
import Image from 'next/image'
import { Fade,  Zoom} from "react-awesome-reveal";



export function Content () {
    return (
        <div className =  'socialnetwork-content-main'>
            <div className="socialnetwork-intro mt-20 text-center w-1/2 m-auto">
                <Fade direction='down' triggerOnce>
                    <p>A Safe Space - A Cultural and Social Hub</p>
                    <h1 className="text-4xl font-semibold mt-4">
                        At Bobamayegun, You Network, Unwind, and Relax
                    </h1>
                </Fade>
            </div>
            <div className="socialnetwork-info mt-4 px-10 py-16">
                <div className="flex gap-8 socialnetwork-info-inner">
                    <div className="sni-grid-i w-1/3">
                        <Fade direction='up' triggerOnce>
                            <div className="sni-img-i rounded-lg"></div>
                            <div className="sni-captions mt-6">
                                <h1 className="text-2xl font-semibold text-purple-950">
                                    Connect For Business
                                </h1>
                                <p className="mt-4 text-gray-700">
                                    Our society provides a unique platform for members 
                                    and partners to connect, collaborate, and grow together. 
                                    Bobamayegun members enjoy special opportunities to 
                                    showcase their products and services through our events, 
                                    website, and social media platforms. Join our exclusive 
                                    networking events to connect with fellow Ijebu 
                                    entrepreneurs and professionals. These gatherings provide 
                                    a platform for members to share insights, explore 
                                    collaboration opportunities, and build valuable 
                                    connections that extend beyond our society.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="sni-grid-i w-1/3">
                        <Fade direction='up' triggerOnce>
                            <div className="sni-img-ii rounded-lg"></div>
                            <div className="sni-captions mt-6">
                                <h1 className="text-2xl font-semibold text-purple-950">
                                    Engage in Social Activities
                                </h1>
                                <p className="mt-4 text-gray-700">
                                    At Egbe Bobamayegun Okunrin Akile Ijebu, 
                                    we believe that a strong community is built on meaningful 
                                    connections, shared experiences, and 
                                    the celebration of our rich cultural heritage. Our regular socials 
                                    offer a relaxed environment for members to meet, 
                                    share ideas, and build friendships. We host meet-and-greets, 
                                    networking events, and themed socials to encourage 
                                    connections and create a strong, supportive network among members. 
                                    Join us as we celebrate traditional Ijebu festivals, 
                                    bringing to life the customs and stories that have shaped our heritage.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="sni-grid-i w-1/3">
                        <Fade direction='up' triggerOnce>
                            <div className="sni-img-iii rounded-lg"></div>
                            <div className="sni-captions mt-6">
                                <h1 className="text-2xl font-semibold text-purple-950">
                                    Relax and De-Stress
                                </h1>
                                <p className="mt-4 text-gray-700">
                                    Embracing Ijebu culture’s unique approaches to 
                                    relaxation, we provide our members with opportunities 
                                    to unwind, connect, and rejuvenate—whether through 
                                    peaceful gatherings, cultural practices, or serene 
                                    community spaces. Sometimes, relaxation is best 
                                    achieved with laughter and good company. Our regular 
                                    gatherings are a chance for members to come together, 
                                    enjoy traditional music, dance, and storytelling, and 
                                    simply unwind in a warm, friendly atmosphere. Sharing in 
                                    the joy of cultural activities allows us to relax and appreciate 
                                    life’s simple pleasures.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="social-network-press mt-10">
                <div className="w-2/5 m-auto snp-header">
                    <Zoom triggerOnce>
                        <h1 className="text-3xl font-semibold text-center">
                            Bobamayegun Okunrin Akile Ijebu in the Press
                        </h1>
                    </Zoom>
                </div>
                <div className="snp-contents mt-16 px-16">
                    <div className="snp-video flex justify-center">
                        <video loop autoPlay controls className='w-full'>
                            <source src="https://media.istockphoto.com/id/1768638896/video/shot-of-a-village-in-the-western-part-of-nigeria.mp4?s=mp4-640x640-is&k=20&c=nuN7MM1ZakhSDiavXJ-TykiPP6O5BPp8dxMvnGZE1IQ=" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='mt-20 press-header px-16'>
                    <Fade direction='left' triggerOnce>
                        <h1 className = 'text-2xl font-light text-gray-600'>
                            Bobamayegun okunrin Akile Ijebu is proud to be a prominent 
                            voice in the preservation and celebration of Ijebu culture, 
                            drawing the attention of local and international media. 
                            Our society’s activities and commitment to the community frequently
                            appear in press features, showcasing our efforts to uplift 
                            Ijebu heritage and support our people. Here are some highlights of 
                            our recent appearances and engagements:
                        </h1>
                    </Fade>
                </div>
                <div className='mt-20 bg-purple-400 px-10 pt-24 pb-44'>
                    <div className='press-notes-main mt-10  flex '>
                        <div className='press-notes-right pressnotes-for-mobile hidden w-1/2 '>
                        </div>
                        <div className='press-notes-left w-1/2  py-16 px-16'>
                            <Fade direction = 'up' triggerOnce>
                                <div className='pnl-content'>
                                    <h1 className='text-white text-2xl font-normal text-center'>
                                        Egbe Bobamayegun Okunrin Akile Ijebu Emerges
                                    </h1>
                                    <div className='press-btn mt-2 flex justify-center'>
                                        <Link target='_blank'
                                        href={'https://www.citypeopleonline.com/new-egbe-bobamaiyegun-okunrin-emerges-ijebu/'}>
                                            <AnimatedBtn 
                                                style={'bg-white px-2 py-2 text-black rounded-full'}
                                                text={'Read More'}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='pnl-content mt-10'>
                                    <h1 className='text-white text-2xl font-normal text-center'>
                                        Egbe Bobamayegun Okunrin Akile Ijebu at Ojude Oba
                                    </h1>
                                    <div className='press-btn mt-2 flex justify-center'>
                                        <Link target='_blank'
                                        href={'https://www.citypeopleparties.com/2017/09/at-ojude-oba-2017-bobamayegun-okunrin_6.html'}>
                                            <AnimatedBtn 
                                                style={'bg-white px-2 py-2 text-black rounded-full'}
                                                text={'Read More'}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='pnl-content mt-10'>
                                    <h1 className='text-white text-2xl font-normal text-center'>
                                        Kakanfo Bobamayegun Okunrin Akile Ijebu Birthday Celebration
                                    </h1>
                                    <div className='press-btn mt-2 flex justify-center'>
                                        <Link target='_blank'
                                        href={'https://kosofepost.com/tag/happy-birthday-to-me-kakanfo-bobamayegun-okunrin-akile-ijebu/'}>
                                            <AnimatedBtn 
                                                style={'bg-white px-2 py-2 text-black rounded-full'}
                                                text={'Read More'}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className='press-notes-right w-1/2 '>
                        </div>
                    </div>
                    <div className='social-gallery-main mt-20'>
                        <div className='sgm-content grid grid-cols-3 gap-9'>
                            <div className='sgm-pic'>
                                <Zoom triggerOnce>
                                    <Image src={pici} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {100} triggerOnce>
                                    <Image src={picii} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {200} triggerOnce>
                                    <Image src={piciii} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {100} triggerOnce>
                                    <Image src={piciv} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {200} triggerOnce>
                                    <Image src={picv} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {300} triggerOnce>
                                    <Image src={picvi} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {100} triggerOnce>
                                    <Image src={picvii} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {200} triggerOnce>
                                    <Image src={picviii} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                            <div className='sgm-pic'>
                                <Zoom delay = {300} triggerOnce>
                                    <Image src={picix} className='h-[300px] w-full' alt='social gallery'/>
                                </Zoom>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
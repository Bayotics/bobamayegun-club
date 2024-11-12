import socialOne from '@/images/social/social-portrait-one.png'
import socialTwo from '@/images/social/social-portrait-two.png'
import socialThree from '@/images/social/social-portrait-three.png'
import socialFour from '@/images/social/social-portrait-four.png'
import socialRight from '@/images/social/social-right.png'
import Image from 'next/image'
import AnimatedBtn from './AnimatedBtnForAbout'
import {Fade, Zoom, Slide} from 'react-awesome-reveal';


export function JoinUs () {
    return (
        <div className="join-us-main px-20">
            <div className="px-32 join-us-header">
                <Slide direction = 'up' triggerOnce>
                    <h1 className = 'text-5xl font-semibold text-center'>
                        Join us and Discover the Beauty of Yoruba and Ijebu Culture
                    </h1>
                </Slide>
            </div>
            <div className="flex join-us-contents mt-20 gap-10">
                <div className="join-us-handles grid grid-cols-2 gap-4 w-1/2">
                    <div className="handle-one pb-12">
                        <Slide direction = 'up' triggerOnce>
                            <div className="social-header-one h-32 ">
                                <div className='social-header-avi pt-4'>
                                    <Image
                                    src={socialOne}
                                    className='rounded-full h-20 w-20 m-auto' alt='social' />
                                </div>
                                <h1 className='text-xl font-semibold text-center mt-2'>Ade Olaiya</h1>
                            </div>
                            <div className='social-user mt-4'>
                                <p className='text-center'>@adeboy</p>
                                <div className='social-user-btn flex justify-center'>
                                    <button className=
                                    'text-center text-white social-user-button px-4 mt-8 py-2 rounded-3xl bg-slate-800'>
                                        + Follow
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="handle-two mt-6 pb-12">
                        <Slide direction='down' triggerOnce>
                            <div className="social-header-two h-32 ">
                                <div className='social-header-avi pt-4'>
                                    <Image
                                    src={socialTwo}
                                    className='rounded-full h-20 w-20 m-auto' alt='social' />
                                </div>
                                <h1 className='text-xl font-semibold text-center mt-2'>Adekunle Gold</h1>
                            </div>
                            <div className='social-user mt-4'>
                                <p className='text-center'>@agbaby</p>
                                <div className='social-user-btn flex justify-center'>
                                    <button className=
                                    'text-center text-white social-user-button px-4 mt-8 py-2 rounded-3xl bg-slate-800'>
                                        + Follow
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="handle-three pb-12">
                        <Slide direction = 'up' triggerOnce>
                            <div className="social-header-three h-32 ">
                                <div className='social-header-avi pt-4'>
                                    <Image
                                    src={socialThree}
                                    className='rounded-full h-20 w-20 m-auto' alt='social' />
                                </div>
                                <h1 className='text-xl font-semibold text-center mt-2'>Basit Awe</h1>
                            </div>
                            <div className='social-user mt-4'>
                                <p className='text-center'>@bassboy</p>
                                <div className='social-user-btn flex justify-center'>
                                    <button className=
                                    'text-center text-white social-user-button px-4 mt-8 py-2 rounded-3xl bg-slate-800'>
                                        + Follow
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="handle-four mt-6 pb-12">
                        <Slide direction = 'down' triggerOnce>
                            <div className="social-header-four h-32 ">
                                <div className='social-header-avi pt-4'>
                                    <Image
                                    src={socialFour}
                                    className='rounded-full h-20 w-20 m-auto' alt='social' />
                                </div>
                                <h1 className='text-xl font-semibold text-center mt-2'>Alabi Mike</h1>
                            </div>
                            <div className='social-user mt-4'>
                                <p className='text-center'>@mikkieoo7</p>
                                <div className='social-user-btn flex justify-center'>
                                    <button className=
                                    'text-center text-white social-user-button px-4 mt-8 py-2 rounded-3xl bg-slate-800'>
                                        + Follow
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="join-us-promo w-1/2">
                    <Zoom triggerOnce>
                        <div className='social-promo-img'>
                            <Image src={socialRight} alt='bobamayegun' 
                            className='ml-20 w-[80%] h-350px]'/>
                        </div>
                    </Zoom>
                    <div className='social-promo-texts mt-8 pr-10 ml-20'>
                        <Fade direction='up' cascade triggerOnce>
                            <h1 className='text-5xl font-semibold'>More than a community</h1> 
                            <p className='text-xl text-gray-500 mt-4'>
                                Discover the Beauty of Yoruba Culture with Bobamayegun Okunrin Akile Ijebu! 
                                Be Part of the Legacy – Yoruba Pride Lives Here!
                            </p>
                            <div className='join-us-promo-btn mt-3'>
                                <AnimatedBtn text={'Join our Community'}
                                style={'bg-gradient-to-r from-purple-500 to-purple-900 px-8 hover:bg-black py-4 rounded-full text-white mt-12 w-[60%] text-center'} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}
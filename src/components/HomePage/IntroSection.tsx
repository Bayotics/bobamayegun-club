import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AnimatedBtnForAbout from './AnimatedBtnForAbout';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export function IntroSection () {
    return (
        <div className = 'intro-section-main mt-24'>
            <div className="intro-sec-texts px-48">
                <h1 className="text-center text-3xl font-semibold">Our Pillars</h1>
                <p className="mt-4 text-center font-normal">
                    At Egbe Bobamayegun, we are deeply rooted in the preservation and promotion
                    of our rich cultural heritage. Our guiding principles reflect the core values
                    that bind us together as a society, committed to fostering unity, growth,
                    and cultural pride. These pillars define our identity and drive our mission:
                </p>
            </div>
            <div className="center-box mt-7 bg-transparent ">
                <div className = 'flex justify-center gap-7 anim-about-main'>
                    <div className="animated-border-box">
                        <div className = 'animated-about-content flex gap-6 py-4 px-6 mt-2'>
                            <div className='anim-about-icon'>
                                <Diversity3OutlinedIcon className='text-5xl'/>
                            </div>
                            <div className = 'anim-about-icons'>
                                <h1 className = 'text-2xl font-semibold'>Cultural Preservation</h1>
                                <p className = 'mt-4 font-normal text-sm leading-none'>
                                    We ensure that the richness of our ancestral 
                                    heritage is passed on to future generations.
                                </p>
                                <div className = 'amin-about-btn mt-4'>
                                    <AnimatedBtnForAbout />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[33%]">
                        <div className = 'animated-about-content flex gap-6 py-4 px-6 mt-2'>
                            <div className='anim-about-icon'>
                                <HandshakeOutlinedIcon className='text-5xl'/>
                            </div>
                            <div className = 'anim-about-icons'>
                                <h1 className = 'text-2xl font-semibold'>Unity & Brotherhood</h1>
                                <p className = 'mt-4 font-normal text-sm leading-none'>
                                    We thrive on the spirit of togetherness
                                    and the responsibility of uplifting one another.
                                </p>
                                <div className = 'amin-about-btn mt-4'>
                                    <AnimatedBtnForAbout />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animated-border-box">
                        <div className = 'animated-about-content flex gap-6 py-4 px-6 mt-2'>
                            <div className='anim-about-icon'>
                                <GroupsOutlinedIcon className='text-5xl'/>
                            </div>
                            <div className = 'anim-about-icons'>
                                <h1 className = 'text-2xl font-semibold'>Empowerment</h1>
                                <p className = 'mt-4 font-normal text-sm leading-none'>
                                    We empower the community through education, 
                                    and socio-economic initiatives.
                                </p>
                                <div className = 'amin-about-btn mt-4'>
                                    <AnimatedBtnForAbout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'flex justify-center gap-7 anim-about-main mt-6'>
                    <div className="animated-border-box">
                        <div className = 'animated-about-content flex gap-6 py-4 px-6 mt-2'>
                            <div className='anim-about-icon'>
                                <LeaderboardOutlinedIcon className='text-5xl'/>
                            </div>
                            <div className = 'anim-about-icons'>
                                <h1 className = 'text-2xl font-semibold'>Leadership & Excellence</h1>
                                <p className = 'mt-4 font-normal text-sm leading-none'>
                                    We inspire members to become leaders
                                    who positively impact their communities
                                </p>
                                <div className = 'amin-about-btn mt-4'>
                                    <AnimatedBtnForAbout />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[33%]">
                        <div className = 'animated-about-content flex gap-6 py-4 px-6 mt-2'>
                            <div className='anim-about-icon'>
                                <CampaignOutlinedIcon className='text-5xl'/>
                            </div>
                            <div className = 'anim-about-icons'>
                                <h1 className = 'text-2xl font-semibold'>Cultural Advocacy</h1>
                                <p className = 'mt-4 font-normal text-sm leading-none'>
                                    We promote our heritage on global platforms, 
                                    fostering respect for diversity
                                </p>
                                <div className = 'amin-about-btn mt-4'>
                                    <AnimatedBtnForAbout />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animated-border-box">
                        <div className = 'animated-about-content flex gap-6 py-4 px-6 mt-2'>
                            <div className='anim-about-icon'>
                                <ThumbUpAltOutlinedIcon className='text-5xl'/>
                            </div>
                            <div className = 'anim-about-icons'>
                                <h1 className = 'text-2xl font-semibold'>Integrity</h1>
                                <p className = 'mt-4 font-normal text-sm leading-none'>
                                    Our members lead by example, influencing others
                                    positively.
                                </p>
                                <div className = 'amin-about-btn mt-4'>
                                    <AnimatedBtnForAbout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
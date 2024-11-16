'use client'
import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import logo from '@/images/Bobamayegun-logo.png'
import flywhisk from '@/images/fly-whisk-logo.png'
import AnimatedNav from "./AnimatedNav";
import AnimatedBtn from "./AnimatedBtn";
import Link from "next/link";
import { Hamburger } from "./Hamburger";

export default function NavBar () {
    const [showHamburger, setShowHamburger] = useState(false);
    const [hamburgerCancel, setHamburgerCancel] = useState('hidden');
    const [showFuels, setShowFuels] = useState(false)

    // const [navCancel, setNavCancel] = useState('hidden');



    // const phoneMenuRef = useRef(null);


    // const closeMobileOpenMenus = useCallback(
    //     (e) => {
    //       if (
    //         phoneMenuRef.current &&
    //         showHamburger &&
    //         !phoneMenuRef.current.contains(e.target)
    //       ) {
    //         setShowHamburger(false);
    //       }
    //     },
    //     [showHamburger]
    //   );
    //   useEffect(() => {
    //     document.addEventListener("mousedown", closeMobileOpenMenus);
    //   }, [closeMobileOpenMenus]);

      const mobileHamburger = () => {
        setShowHamburger(!showHamburger);
        setHamburgerCancel('hidden');
      }
      const mobileFuels = () => {
        setShowFuels(!showFuels);
      }



    return(
        <div className="navbar-main-box">
            <div className="text-black flex navbar-main justify-between ">
                <div className="navbar-logo  flex">
                    <Link href = '/'>
                        <div className="pic-logo">
                            <Image src={logo} alt="bobamayegun logo" height={20} width={60} className="mt-2"/>
                        </div>
                    </Link>
                    <Link href = '/'>
                        <div className="text-logo">
                            <h1 className="text-3xl font-semibold mt-6">Bóbamàyègùn</h1>
                            <p className = 'text-xs hidden logo-text-for-mobile'>Bóbamàyègùn</p>
                            <p className = 'text-xs text-bottom-logo'>Okunrin Akile Ijebu 74-76</p>
                        </div>
                    </Link>
                    <div className="flywhisk-logo pt-2">
                        <Image src={flywhisk} alt="bobamayegun logo" height={20} width={20}/>
                    </div>
                </div>
                <div className="navbar-menus  flex justify-between gap-20">
                        <div className="nav-menu-btn  mt-8">
                            <AnimatedNav />
                        </div>
                </div>
                <div className="navbar-promo ">
                    <AnimatedBtn />
                </div>
                <div className= {`hamburger-mobile hidden ${hamburgerCancel}`} onClick={mobileHamburger}>
                    <Hamburger />
                </div>

                
            </div>
             {/************** MOBILE NAV ********************/  }
             <div className=
                {` hidden mobile-nav-box w-full bg-[#f4eff7] border-2 border-black text-left text-black pr-4 ${showHamburger ? 'hamburgerActive' : ''}`}
                >
                <div>
                    <div className='mt-6' >
                        <Link href = "/" className='text-3xl font-semibold hover:text-[#b067da] hover:font-bold w-full'> Home</Link>
                    </div>
                    <div className='mt-6 about-nav-mobile' >
                        <div className = 'flex justify-between'>
                            <h1 className='text-3xl font-semibold hover:text-[#b067da] hover:font-bold'>About Us</h1>
                            <div className = 'mobile-nav-drop text-3xl' onClick={mobileFuels}>+</div>
                        </div>
                        <div className = {`about-contents-nav-mob  ${showFuels ? 'mobileFuelActive' : ''}`}>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Values</Link>
                            </div>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>History</Link>
                            </div>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Council</Link>
                            </div>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Leadership</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 initiative-nav-mobile' >
                        <div className = 'flex justify-between'>
                            <h1 className='text-3xl font-semibold hover:text-[#b067da] hover:font-bold'>Our Initiatives</h1>
                            <div className = 'mobile-nav-drop text-3xl'>+</div>
                        </div>
                        <div className = 'about-contents-nav-mob'>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Arts & Culture</Link>
                            </div>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Charity</Link>
                            </div>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Policy</Link>
                            </div>
                            <div className = 'mt-2 text-xl'>
                                <Link href = '/aboutus' className='font-semibold'>Social Networking</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       
    )
}
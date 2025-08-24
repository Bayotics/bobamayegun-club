'use client'
import { useState} from "react"
import Image from "next/image"
import logo from '../../images/bobamayegun-logo.png'
// import logo from '@/images/Bobamayegun-logo.png'
import flywhisk from '@/images/fly-whisk-logo.png'
import AnimatedNav from "./AnimatedNav";
import AnimatedBtn from "./AnimatedBtn";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { FaSortDown } from "react-icons/fa";



export default function NavBar () {
    const [showHamburger, setShowHamburger] = useState(false);
    const [hamburgerCancel, setHamburgerCancel] = useState('hidden');
    const [showAbout, setShowAbout] = useState(false);
    const [showInitiative, setShowInitiative] = useState(false);
    const [showJoin, setShowJoin] = useState(false);



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
      const mobileAbout = () => {
        setShowAbout(!showAbout);
        setShowInitiative(false);
        setShowJoin(false);
      }
      const mobileInitiative = () => {
        setShowInitiative(!showInitiative);
        setShowAbout(false);
        setShowJoin(false);
      }
      const mobileJoin = () => {
        setShowJoin(!showJoin);
        setShowAbout(false);
        setShowInitiative(false);
      }
      const closeMobileNavOnClick = ()  => {
        setShowHamburger(false)
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
                            <h1 className="text-3xl font-semibold mt-6">Bọ́bamáyégún</h1>
                            <p className = 'text-xs hidden logo-text-for-mobile'>Bọ́bamáyégún</p>
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
                {` hidden mobile-nav-box w-full bg-[#f4eff7]  
                   text-left shadow-2xl text-black pl-16 ${showHamburger ? 'hamburgerActive' : ''}`}
                >
                <div>
                    <div className='mt-10' >
                        <Link
                            href = "/"
                            onClick={closeMobileNavOnClick} 
                            className='text-5xl font-normal hover:text-[#b067da] hover:font-bold w-full'>
                            Home
                        </Link>
                    </div>
                    <div className='mt-16 about-nav-mobile' >
                        <div className = 'flex gap-6'>
                            <h1 className='text-5xl font-normal hover:text-[#b067da] hover:font-bold'>About Us</h1>
                            <div className = 'mobile-nav-drop text-5xl' onClick={mobileAbout}>
                                <FaSortDown/>
                            </div>
                        </div>
                        <div className = 
                        {`about-dropdown-contents text-4xl ml-4   ${showAbout ? 'mobileAboutActive' : ''}`}>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/aboutus' className=''
                                onClick={closeMobileNavOnClick} >Values</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/aboutus' className=''
                                onClick={closeMobileNavOnClick} >History</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/aboutus' className='' 
                                onClick={closeMobileNavOnClick} >Council</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/aboutus' className=''
                                onClick={closeMobileNavOnClick} >Leadership</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16 initiative-nav-mobile' >
                        <div className = 'flex gap-8'>
                            <h1 className='text-5xl font-normal hover:text-[#b067da] hover:font-bold'>
                                Our Initiatives
                            </h1>
                            <div className = 'mobile-nav-drop text-5xl' onClick={mobileInitiative}>
                                <FaSortDown/>
                            </div>
                        </div>
                        <div className = 
                        {`about-dropdown-contents text-4xl ml-4   ${showInitiative ? 'mobileAboutActive' : ''}`}>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/artsandculture' className=''
                                onClick={closeMobileNavOnClick} >Arts and Culture</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/charity' className=''
                                onClick={closeMobileNavOnClick} >Charity</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/policy' className=''
                                onClick={closeMobileNavOnClick} >Policy</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/socialnetwork' className=''
                                onClick={closeMobileNavOnClick} >
                                    Social Networking
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16' >
                        <Link href = "/news" 
                            className='text-5xl font-normal hover:text-[#b067da] hover:font-bold w-full'
                            onClick={closeMobileNavOnClick} 
                        >
                            News & Events
                        </Link>
                    </div>
                    <div className='mt-16' >
                        <Link href = "/gallery" 
                            className='text-5xl font-normal hover:text-[#b067da] hover:font-bold w-full'
                            onClick={closeMobileNavOnClick} 
                        >
                            Gallery
                        </Link>
                    </div>
                    <div className='mt-16 join-nav-mobile' >
                        <div className = 'flex gap-8'>
                            <h1 className='text-5xl font-normal hover:text-[#b067da] hover:font-bold'>
                                Join & Support
                            </h1>
                            <div className = 'mobile-nav-drop text-4xl' onClick={mobileJoin}>
                                <FaSortDown/>
                            </div>
                        </div>
                        <div className = 
                        {`about-dropdown-contents text-5xl ml-4   ${showJoin ? 'mobileAboutActive' : ''}`}>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/partnership' className=''
                                onClick={closeMobileNavOnClick} >Partnership</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/donations' className=''
                                onClick={closeMobileNavOnClick} >Donations</Link>
                            </div>
                            <div className = 'mt-8 hover:text-[#b067da]'>
                                <Link href = '/volunteering' className=''
                                onClick={closeMobileNavOnClick} >Volunteering</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16' >
                        <Link href = "/membership" 
                            className='text-5xl font-normal hover:text-[#b067da] hover:font-bold w-full'
                            onClick={closeMobileNavOnClick} 
                        >
                            Membership
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
       
    )
}
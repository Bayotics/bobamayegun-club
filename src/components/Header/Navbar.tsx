import Image from "next/image"
import logo from '@/images/Bobamayegun-logo.png'
import flywhisk from '@/images/fly-whisk-logo.png'
import Link from "next/link"
import AnimatedNav from "./AnimatedNav";


export default function NavBar () {
    return(
        <div className="text-black flex navbar-main justify-between border">
            <div className="navbar-logo border flex">
                <div className="pic-logo">
                    <Image src={logo} alt="bobamayegun logo" height={20} width={60} className="mt-2"/>
                </div>
                <div className="text-logo">
                    <h1 className="text-3xl font-semibold mt-6">Bobamayegun</h1>
                </div>
                <div className="flywhisk-logo pt-2">
                    <Image src={flywhisk} alt="bobamayegun logo" height={20} width={20}/>
                </div>
            </div>
            <div className="navbar-menus border flex justify-between gap-20">
                <Link href= '/' className="nav-menu-btn border mt-6 font-semibold">
                    <div className="">
                        <p className="font-semibold">Home</p>
                    </div>
                </Link>
                    <div className="nav-menu-btn border mt-6">
                        <AnimatedNav />
                    </div>
                <Link href= '/'>
                    <div className="nav-menu-btn border mt-6">
                        <p className="font-semibold">Initiatives</p>
                    </div>
                </Link>
                <Link href= '/'>
                    <div className="nav-menu-btn border mt-6">
                        <p className="font-semibold">News & Events</p>
                    </div>
                </Link>
                <Link href= '/'>
                    <div className="nav-menu-btn border mt-6">
                        <p className="font-semibold">Gallery</p>
                    </div>
                </Link>
                <Link href= '/'>
                    <div className="nav-menu-btn border mt-6">
                        <p className="font-semibold">Contact</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-promo border">c</div>
        </div>
    )
}
import Image from "next/image"
import logo from '@/images/Bobamayegun-logo.png'
import flywhisk from '@/images/fly-whisk-logo.png'
import AnimatedNav from "./AnimatedNav";
import AnimatedBtn from "./AnimatedBtn";


export default function NavBar () {
    return(
        <div className="text-black flex navbar-main justify-between ">
            <div className="navbar-logo  flex">
                <div className="pic-logo">
                    <Image src={logo} alt="bobamayegun logo" height={20} width={60} className="mt-2"/>
                </div>
                <div className="text-logo">
                    <h1 className="text-3xl font-semibold mt-6">Bóbamàyègùn</h1>
                </div>
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
        </div>
    )
}
'use client'
import abidemi from '@/images/members/abidemi.jpg'
import abolore from '@/images/members/abolore.jpg'
import adebambo from '@/images/members/adebambo.jpg'
import adekunmi from '@/images/members/adekunmi.png'
import adewale from '@/images/members/adewale.jpg'
import alausa from '@/images/members/alausa.jpg'
import ashiru from '@/images/members/ashiru.jpg'
import bajo from '@/images/members/bajo.jpg'
import lateef from '@/images/members/lateef.jpg'
import leke from '@/images/members/leke.jpg'
import moshood from '@/images/members/moshood.jpg'
import olabode from '@/images/members/olabode.jpg'
import oluwatosin from '@/images/members/oluwatosin.jpg'
import onakoya from '@/images/members/onakoya.jpg'
import rasheed from '@/images/members/rasheed.jpg'
import seye from '@/images/members/seye.jpg'
import tola from '@/images/members/tola.jpg'
import yusuf from '@/images/members/yusuf.jpg'
// import yomi from '@/images/members/yomi.jpg'
// import abiodun from '@/images/members/abiodun.jpg'
// import adenola from '@/images/members/adenola.jpg'


import Image from 'next/image'

export function Slider () {
    return (
        <div className="lifetime-members">
            {/* <div className = 'lifetime-members-head text-center px-56'>
                <h1 className="font-bold text-4xl">Lifetime Members</h1>
                <p className="mt-4 text-lg text-gray-600">Lifetime Memberships are bestowed upon individuals 
                    who make extraordinary contributions to Egbe bobamayegun okunrin Akile Ijebu,
                    going above and beyond in their dedication and support.</p>
            </div> */}
            <div className = 'slider-body'>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <Image src={tola} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Alhaji Tola Olanlege</h1>
                                    <p className='mt-2'>Chief Agba-Akin Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={bajo} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Chief Bajo Rasak</h1>
                                    <p className='mt-2'>Asiwaju Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={yusuf} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Yusuf Odunaiya</h1>
                                    <p className='mt-2'>Chief Amuludun Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={adewale} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Adewale Ogundele</h1>
                                    <p className='mt-2'>Chief Aro Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={olabode} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Engr. Olabode Ogunbamowo</h1>
                                    <p className='mt-2'>Chief Baagbimo Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={leke} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Leke Kuye</h1>
                                    <p className='mt-2'>Chief Baamesho Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={abolore} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Abolore Balogun</h1>
                                    <p className='mt-2'>Chief Babalaje Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={adebambo} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Adebambo Kazeem</h1>
                                    <p className='mt-2'>Chief Bobagunwa Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={oluwatosin} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Oluwatosin Ogunseye</h1>
                                    <p className='mt-2'>Chief Bobasuwa Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={moshood} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Moshood Oduntan</h1>
                                    <p className='mt-2'>Chief Borokinni Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={onakoya} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Adewale Onakoya</h1>
                                    <p className='mt-2'>Chief Fesogboye Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={alausa} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Olugbenga Alausa</h1>
                                    <p className='mt-2'>Chief Bobaniyi Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={lateef} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Omotola Lateef</h1>
                                    <p className='mt-2'>Chief Jagunmolu Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={abidemi} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Prince Abidemi Akintunde</h1>
                                    <p className='mt-2'>Chief Kakanfo</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={rasheed} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Rasheed Adebayo</h1>
                                    <p className='mt-2'>Chief Kakanfo</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={ashiru} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Olugbenga Ashiru</h1>
                                    <p className='mt-2'>Chief Olootu Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={seye} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Mayegun Seye Odufejo</h1>
                                    <p className='mt-2'>Chief Oluomo Egbe</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={adekunmi} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Chief Adekunmi Odebunmi</h1>
                                    <p className='mt-2'>Olori Omooba</p>
                            </div>
                        </div>
                        
                        {/* <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


'use client'
import memberI from '@/images/members/memberIX.jpg'
import memberIV from '@/images/members/memberIV.jpg'
import memberV from '@/images/members/memberV.jpg'
import memberVI from '@/images/members/memberVI.jpg'
import memberVII from '@/images/members/memberVII.jpg'
import memberX from '@/images/members/memberX.jpg'
import memberXI from '@/images/members/memberXI.jpg'
import memberXII from '@/images/members/memberXII.jpg'


import Image from 'next/image'

export function Slider () {
    return (
        <div className="lifetime-members">
            <div className = 'lifetime-members-head text-center px-56'>
                <h1 className="font-bold text-4xl">Lifetime Members</h1>
                <p className="mt-4 text-lg text-gray-600">Lifetime Memberships are bestowed upon individuals 
                    who make extraordinary contributions to Egbe bobamayegun okunrin Akile Ijebu,
                    going above and beyond in their dedication and support.</p>
            </div>
            <div className = 'slider-body'>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <Image src={memberV} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Alhaji Akin Bode</h1>
                                    <p className='mt-2'>Lawyer</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Agbaje Mutiu</h1>
                                    <p className='mt-2'>Member, LHOS</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberVI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Dr. Ogunmepon</h1>
                                    <p className='mt-2'>Lecturer, LASU</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberVII} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Bello Idris</h1>
                                    <p className='mt-2'>Accountant</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberIV} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Ogunmakin Babatunde</h1>
                                    <p className='mt-2'>Aviator</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberX} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Fadamisi Olaiya</h1>
                                    <p className='mt-2'>Stylist</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberXI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Agunbiade John</h1>
                                    <p className='mt-2'>Custom</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberXII} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Col. Olaniyi</h1>
                                    <p className='mt-2'>Nigerian Army</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Tajudeen Edu</h1>
                                    <p className='mt-2'>Accountant</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberV} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Alhaji Akin Bode</h1>
                                    <p className='mt-2'>Lawyer</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Agbaje Mutiu</h1>
                                    <p className='mt-2'>Member, LHOS</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberVI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Dr. Ogunmepon</h1>
                                    <p className='mt-2'>Lecturer, LASU</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberVII} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Bello Idris</h1>
                                    <p className='mt-2'>Accountant</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberIV} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Ogunmakin Babatunde</h1>
                                    <p className='mt-2'>Aviator</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberX} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Fadamisi Olaiya</h1>
                                    <p className='mt-2'>Stylist</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberXI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Agunbiade John</h1>
                                    <p className='mt-2'>Custom</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberXII} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Col. Olaniyi</h1>
                                    <p className='mt-2'>Nigerian Army</p>
                            </div>
                        </div>
                        <div className="slide">
                            <Image src={memberI} className='h-[85%] w-full rounded-xl'
                             alt='member' />
                                <div className='slide-member-content mt-2'>
                                    <h1 className='text-lg font-semibold'>Tajudeen Edu</h1>
                                    <p className='mt-2'>Accountant</p>
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


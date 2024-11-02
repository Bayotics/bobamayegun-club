import { CiCircleCheck } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPeace } from "react-icons/bs";
import { PiHandFist } from "react-icons/pi";

export default function Policy () {
    return (
        <div className = 'policy-main'>
            <div className="policy-page-banner py-40 px-32">
                <h1 className="text-6xl font-semibold text-white">
                    Our Policy
                </h1>
                <p className="mt-8 font-normal text-lg text-white">Preserving, promoting, 
                    and celebrating the rich heritage of the Ijebu people. 
                </p>
            </div>
            <div className="policy-content mt-20 px-20 py-10 mb-20">
                <h1 className="text-3xl font-semibold text-center">
                    Our policies reflect our dedication to integrity, inclusivity, and respect 
                    for our traditions and members.
                </h1>
                <div className="policyontent-right  grid grid-cols-2 gap-4 gap-y-12 mt-20">
                    <div className="policy-grid-i  flex gap-4">
                        <div className="policy-grid-icon">
                            <CiCircleCheck className=
                            "text-5xl text-green-400"/>
                        </div>
                        <div className="policy-grid-text">
                            <h1 className="text-2xl">Integrity and Transparency</h1>
                            <p className="mt-2 text-gray-700">
                                We hold ourselves to high standards of ethical conduct and 
                                transparency. Financial accountability and honest 
                                communication with our members and partners are paramount 
                                to our society’s reputation and growth.
                            </p>
                        </div>
                    </div>
                    <div className="policy-grid-i  flex gap-4">
                        <div className="policy-grid-icon">
                            <PiHandshakeLight className=
                            "text-5xl text-pink-500"/>
                        </div>
                        <div className="policy-grid-text">
                            <h1 className="text-2xl">Inclusivity and Respect</h1>
                            <p className="mt-2 text-gray-700">
                                We welcome all who share our love for Ijebu heritage 
                                and respect for our values. Discrimination or exclusion of 
                                any kind is not tolerated, and we strive to create a welcoming 
                                environment for all members.
                            </p>
                        </div>
                    </div>
                    <div className="policy-grid-i  flex gap-4">
                        <div className="policy-grid-icon">
                            <FaHandHoldingHeart className=
                            "text-5xl text-yellow-500"/>
                        </div>
                        <div className="policy-grid-text">
                            <h1 className="text-2xl">Volunteerism </h1>
                            <p className="mt-2 text-gray-700">
                                Bobamayegun organizes volunteer initiatives and encourages 
                                members to serve through community projects, 
                                outreach programs, and charitable activities that 
                                benefit the Ijebu community and society at large.
                            </p>
                        </div>
                    </div>
                    <div className="policy-grid-i  flex gap-4">
                        <div className="policy-grid-icon">
                            <PiHandFist className=
                            "text-5xl text-purple-500"/>
                        </div>
                        <div className="policy-grid-text">
                            <h1 className="text-2xl">Empowerment</h1>
                            <p className="mt-2 text-gray-700">
                                We offer small grants and resources for micro-enterprises, 
                                especially for women and youth, to boost self-reliance and 
                                economic independence.
                            </p>
                        </div>
                    </div>
                    <div className="policy-grid-i  flex gap-4">
                        <div className="policy-grid-icon">
                            <IoMdHeartEmpty className=
                            "text-5xl text-orange-500"/>
                        </div>
                        <div className="policy-grid-text">
                            <h1 className="text-2xl">Elderly Care and Respect</h1>
                            <p className="mt-2 text-gray-700">
                                Our elders are the keepers of our history and wisdom. 
                                Bobamayegun places high value on honoring and supporting 
                                our elderly members. We organize outreach programs for 
                                elderly members, ensuring they feel valued, connected, 
                                and celebrated within the society.
                            </p>
                        </div>
                    </div>
                    <div className="policy-grid-i  flex gap-4">
                        <div className="policy-grid-icon">
                            <BsPeace className=
                            "text-4xl text-blue-500"/>
                        </div>
                        <div className="policy-grid-text">
                            <h1 className="text-2xl">Conflict Resolution and Harmony</h1>
                            <p className="mt-2 text-gray-700">  
                                In cases of conflict, we prioritize peaceful 
                                resolutions that honor our values and traditions. 
                                We provide mediation support to members and 
                                encourage practices that strengthen unity and mutual respect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
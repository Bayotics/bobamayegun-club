import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";





export default function Content () {
    return (
        <div className = 'membership-content-main py-20'>
            <div className="membership-intro px-32 flex gap-10">
                <div className="w-1/2 membership-intro-texts">
                    <h1 className="text-2xl font-semibold text-purple-950">
                        Who is A Bobamayegun Okunrin Akile Ijebu Member?
                    </h1>
                    <p className="mt-4 text-lg font-thin text-gray-600">
                        He is experienced, culturally, and socially cosmopolitan 
                        and is a male leader who has achieved impact and 
                        success in his chosen field. He is an individual deeply 
                        committed to preserving and promoting the rich cultural heritage, 
                        traditions, and values of the Ijebu people.<br/><br/>
                        Members embody the spirit of the Ijebu people and work 
                        actively to keep these traditions alive both within 
                        Nigeria and across the global diaspora.
                        <br/><br/>
                        Our members include innovative thinking entrepreneurs 
                        as well as executives and corporate executives 
                        from leading African and multinational companies.
                    </p>
                </div>
                <div className="w-1/2 membership-intro-pic">
                </div>
            </div>
            <div className="membership-benefits pt-14 pb-10 bg-purple-100 mt-40">
                <div className="benefits-intro">
                    <div className="benefits-intro-texts m-auto w-1/2 mt-10">
                        <h1 className="text-3xl font-medium text-center">
                            Benefits of Bobamayegun Membership
                        </h1>
                        <p className="mt-4 text-lg text-center">
                            Whether you’re seeking a supportive community, connections, 
                            and/or other opportunities, we have something for you.
                        </p>
                    </div>
                </div>
                <div className="benefits-cards grid grid-cols-3 mt-20 px-20 gap-10">
                    <div className="benefits-card">
                        <div className="benefits-icon p-[.5px] bg-white">
                            <div className = 'bebefits-icon-content border-purple-800 border-2 py-16'>
                                <div className="bic-icon place-content-center flex">
                                    <HiOutlineUserGroup className="text-9xl text-purple-900" />
                                </div>
                            </div>
                        </div>
                        <div className="bic-texts mt-8">
                            <h1 className="text-xl text-purple-800">BOARD TALENT</h1>
                            <p className="mt-4">
                                We have reputable investment and consulting firms as partners which
                                are seeking to place our members on variuos boards
                            </p>
                        </div>
                    </div>
                    <div className="benefits-card">
                        <div className="benefits-icon p-[.5px] bg-white">
                            <div className = 'bebefits-icon-content border-purple-800 border-2 py-16'>
                                <div className="bic-icon place-content-center flex">
                                    <TbCalendarEvent className="text-9xl text-purple-900" />
                                </div>
                            </div>
                        </div>
                        <div className="bic-texts mt-8">
                            <h1 className="text-xl text-purple-800">CURATED EVENTS</h1>
                            <p className="mt-4">
                                Enjoy specially curated events designed to bring men together
                                to connect, reconnect, do business and form valuable
                                networks.
                            </p>
                        </div>
                    </div>
                    <div className="benefits-card">
                        <div className="benefits-icon p-[.5px] bg-white">
                            <div className = 'bebefits-icon-content border-purple-800 border-2 py-16'>
                                <div className="bic-icon place-content-center flex">
                                    <BiNetworkChart className="text-9xl text-purple-900" />
                                </div>
                            </div>
                        </div>
                        <div className="bic-texts mt-8">
                            <h1 className="text-xl text-purple-800">NETWORKING OPPORTUNITIES</h1>
                            <p className="mt-4">
                                As a member of Bobamayegun Okunrin Akile Ijebu, 
                                you join a network of Ijebu professionals, leaders, 
                                and families who are committed to mutual support and 
                                advancement.
                            </p>
                        </div>
                    </div>
                </div>

            </div> 
        </div>
    )
}
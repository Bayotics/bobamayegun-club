import AnniversaryForm from "./AnniversaryForm"


export function AnniversaryContent () {

    return (
        <div className="anniversary-content-main">
            <div className="px-10 anniversary-box py-20">
                <div className="anniversary-intro px-20">
                    <h1 className="text-center text-xl text-gray-600">
                        Bobamayegun Okunrin Akile Ijebu is turning 10, and we are celebrating in 
                        grand style! Join us in <span className="text-black font-extrabold">
                        June 2026</span> in the <span className="text-black font-extrabold">USA
                        </span> as we mark a decade of 
                        cultural heritage, unity, and progress. This milestone event will 
                        bring together members from across the world for an unforgettable 
                        experience filled with rich traditions, exciting performances, 
                        and networking opportunities.  
                        To ensure all our members, including those in Nigeria and other countries, 
                        can attend, we have created a dedicated registration page. After a successful registration
                        and review, An invitation will be sent to the email address provided. 
                        Secure your spot now and be part of this historic celebration!  
                        Stay tuned for more details, and get ready for an event like no other! 🎉
                    </h1>
                </div>
                <div className="anniversary-form mt-40">
                    <AnniversaryForm />
                </div>
            </div>
        </div>
    )
}
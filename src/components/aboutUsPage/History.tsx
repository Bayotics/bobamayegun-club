import { BaseModal } from "./BaseModal"
import { Slide } from "react-awesome-reveal";


export function History () {
    return(
        <div className = 'history-main mb-20'>
            <div className = 'history-content flex px-16'>
                <div className="history-text bg-white px-12 py-10 w-[60%]">
                    <Slide direction="down" triggerOnce>
                        <p className="">History</p>
                        <h1 className="text-3xl font-semibold">
                            Preserving the Ijebu Identity<br/> Since 2008
                        </h1>
                        <p className = 'mt-6 text-gray-600'>
                            Founded in 2008 by Chief Wasiu Noman, 
                            Bobamayegun was born out of a deep desire to preserve, 
                            promote, and share the rich and diverse history of the 
                            Ijebu people. For centuries, the Ijebu Kingdom has held a 
                            unique place within Nigeria, recognized for its.......
                        </p>
                    </Slide>
                    <div className="full-history-btn mt-3">
                        <BaseModal />
                    </div>
                </div>
                <div className='history-bg w-[40%]'>
                    
                </div>
            </div>
        </div>
    )
} 
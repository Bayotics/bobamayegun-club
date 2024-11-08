import Image from "next/image"
import loader from '@/images/preloader/preloader.gif';

const Spinner = () => {
    return (
        <div>
            <div id="preload-spinner" className= {`spinner-container`}>
              <Image src = {loader} alt="bobamayegun loader" />
            </div>
        </div>
    )
}

export default Spinner
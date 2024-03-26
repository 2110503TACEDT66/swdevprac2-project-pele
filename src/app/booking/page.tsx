import Image from "next/image";
import styles from '../page.module.css'


export default function BookingPage(){
    return(
        <main>
            {/* <div className="text-lg text-center"> Booking</div>
            <div className='block p-[5px] m-0 w-[100vw] h-[100vh] relative'>
            <Image src={'/img/cover.jpeg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            </div> */}
            <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-4xl font-bold">Test Booking Page</h1>
            <p className="text-lg mt-4">This text is vertically centered in the middle of the page.</p>
            </div>
            </div>

        </main>
    );

}
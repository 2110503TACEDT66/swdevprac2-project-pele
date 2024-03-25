import Image from "next/image";
import styles from '../page.module.css'


export default function BookingPage(){
    return(
        <main>
            <div className='block p-[5px] m-0 w-[100vw] h-[100vh] relative'>
            <Image src={'/img/cover.jpeg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            </div>

        </main>
    );

}
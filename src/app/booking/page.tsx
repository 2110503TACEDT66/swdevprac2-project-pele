import Image from "next/image";
import styles from '../page.module.css'


export default function BookingPage(){
    return(
        <main>
            <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            className='opacity-30'
            />
            </div>

        </main>
    );

}
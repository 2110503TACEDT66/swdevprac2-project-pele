import Image from 'next/image'
import styles from './topmenu.module.css'
import Link from 'next/link'
import TopMenuItem from './TopMenuItem';


export default function TopMenu() {

    

    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='About us' pageRef='#aboutUs'/>
            <TopMenuItem title='Hotels' pageRef='/hotels'/>

        <div className='flex flex-row absolute right-0 h-full'>
        <TopMenuItem title='My Booking' pageRef='/mybooking'/>
        </div>
        </div>
    );
}
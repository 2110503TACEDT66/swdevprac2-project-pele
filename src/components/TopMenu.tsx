import Image from 'next/image'
import styles from './topmenu.module.css'
import Link from 'next/link'
import TopMenuItem from './TopMenuItem';


export default function TopMenu() {

    const session =''

    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='About us' pageRef='#aboutUs'/>
            <TopMenuItem title='Hotels' pageRef='/hotels'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>

        <div className='flex flex-row absolute right-0 h-full'>
        {
            session? '' : <TopMenuItem title='Register' pageRef='/register'/>
        }
        {
            session? <TopMenuItem title='Sign Out' pageRef='/signout'/> :
            <TopMenuItem title='Sign In' pageRef='/signin'/>
        }
        {
            session? <TopMenuItem title='My Booking' pageRef='/mybooking'/> : ''
        }  

        </div>
        </div>
    );
}
'use server'

import Image from 'next/image'
import styles from './topmenu.module.css'
import { Link } from '@mui/material';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='h-[80px] fixed left-0 right-0 z-50 flex flex-row bg-sky-950 '>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='About us' pageRef='/about'/>
            <TopMenuItem title='Hotels' pageRef='/hotels'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>

        <div className='flex flex-row absolute right-0 h-full'>
        {
            session? '' : <TopMenuItem title='Register' pageRef='/register'/>
        }
        {
            session? <TopMenuItem title='My Booking' pageRef='/mybooking'/> : ''
        }  

        {
            session? <TopMenuItem title='Sign Out' pageRef='/api/auth/signout'/> :
            <TopMenuItem title='Sign In' pageRef='/api/auth/signin'/>
        }
        </div>
        </div>
    );
}
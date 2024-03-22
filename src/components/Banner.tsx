'use client'

import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'


export default function Banner () {

    const covers = ['/img/cover.jpg','/img/cover2.jpg'];
    const [index,setIndex] = useState(0)

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%2]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            className='opacity-30'
            />
            <div className={styles.bannerText}>
                <h1 className='opacity-90 font-extrabold'>Hotels</h1>
                <h1 className='opacity-90 font-extrabold'>Booking Service</h1>
            </div>
            {
                //session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Welcome {session.user?.name}</div> : null
            }
        </div>
    );
}
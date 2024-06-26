'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import TransitionWrapper from '@/motion/TransitionWrapper'
import LeftToRightTransition from '@/motion/LeftToRightTransition'


export default function Banner () {


    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpeg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            <TransitionWrapper>
                <LeftToRightTransition>
                <div className={styles.bannerText}>
                <h1 className='opacity-90 font-extrabold'>Hotels</h1>
                <h1 className='opacity-90 font-extrabold'>Booking Service</h1>
                </div>
                </LeftToRightTransition>
            </TransitionWrapper>
            
                
            
            {
                //session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Welcome {session.user?.name}</div> : null
            }
        </div>
    );
}
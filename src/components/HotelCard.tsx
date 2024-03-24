'use client'
import Image from 'next/image'

export default function HotelCard({hotelName , imgSrc} : {hotelName : string , imgSrc : string}) {

    const session =''

    return (
        <div className='w-[300px] h-[300px] rounded-lg shadow-lg bg-white'>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                    alt='Hotel'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[25%] p-[10px]'>{hotelName}</div>
            {
                session? <button className="w-full h-[5%] block rounded-[30px] px-10 bg-sky-600 hover:bg-indigo-600 py-2 text-white shadow-sm">Booking</button>
                : ''
            } 
        </div>
    );
}
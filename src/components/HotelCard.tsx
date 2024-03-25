'use client'
import Image from 'next/image'

export default function HotelCard({hotelName, hotelAddress, hotelTel } : {hotelName : string, hotelAddress: string, hotelTel : string }) {

    const session =''

    return (
        <div className='border w-[300px] h-[200px] p-4 my-4 mx-2 rounded-xl hover:shadow-lg transition duration-300  ease-in-out transform hover:scale-105 bg-white animate-fade-up animate-once"'>
            <div className='w-full h[40%]  p-[10px]  text-xl  font-serif '>{hotelName}</div>
            <div className='w-full h[20%] p-[10px] text-sm'>Address: {hotelAddress}</div>
            <div className='w-full h[20%] p-[10px] text-sm'>Tel: {hotelTel}</div>
            {
                session? <button className="w-full h[20%] block rounded-[30px] px-10 bg-sky-600 hover:bg-indigo-600 py-2 text-white shadow-sm">Booking</button>
                : ''
            } 
        </div>
    );
}
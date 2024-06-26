import { BookingItem, BookingJson } from "../../interface"
import getBookings from "@/libs/getBookings"
import deleteBooking from "@/libs/deleteBooking"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default async function BookingList(){
    //เราอยากได้อะไร
    const bookItems = await getBookings()
    //const router = useRouter()
    
    return( //วนลูปแสดงข้อมูลจาก array
        <>
        { bookItems.length === 0 ? <div>No Hotel Booking</div> :
        bookItems?.data.map( (bookingItem : BookingItem) =>(
            
            <div className="bg-slate-200 rounded-xl px-10 mx-5 py-8 my-2 mb-10 font-sans hover:shadow-xl hover:shadow-zinc-500 " 
            key={bookingItem._id}>
                <div className="text-xl text-cyan-800">Hotel: {bookingItem.hotel.name} </div>
                <div className="text-xl text-cyan-800">StartDate: {bookingItem.startDate} </div>
                <div className="text-xl text-cyan-800">EndDate: {bookingItem.endDate} </div>
                <div className="text-xl text-cyan-800">User Id: {bookingItem.user} </div>
                
                <div className="flex flex-row space-x-4 mt-3 " >

                <Link href= {`/mybooking/edit/${bookingItem._id}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                text-white shadow-sm" > 
                Edit This Booking </button>
                </Link>
                
                <Link href="/mybooking">
                <button className="block rounded-md bg-red-600 hover:bg-red-800 px-3 py-2
                text-white shadow-sm"
                onClick={ ()=> { console.log(bookingItem._id); deleteBooking(bookingItem._id)}}>  
                Cancel This Booking </button></Link>
                
        
                </div>
            </div>
        ))
        
        
        }
        </>
        

    )

    //onClick={ () => router.push(`/mybooking/edit/${bookingItem._id}`) }
}
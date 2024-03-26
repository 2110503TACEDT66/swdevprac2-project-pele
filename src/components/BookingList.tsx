import { BookingItem, BookingJson } from "../../interface"
import getBookings from "@/libs/getBookings"
import deleteBooking from "@/libs/deleteBooking"
import { useState } from "react";
import Link from "next/link";


export default async function BookingList(){
    //เราอยากได้อะไร
    const bookItems = await getBookings()
    
    return( //วนลูปแสดงข้อมูลจาก array
        <>
        { bookItems.length === 0 ? <div>No Hotel Booking</div> :
        bookItems?.data.map( (bookingItem : BookingItem) =>(
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 mb-10" 
            key={bookingItem._id}>
                <div className="text-xl">Hotel: {bookingItem.hotel.name} </div>
                <div className="text-xl">StartDate: {bookingItem.startDate} </div>
                <div className="text-xl">EndDate: {bookingItem.endDate} </div>
                <div className="text-xl">User Id: {bookingItem.user} </div>
                
                <div className="flex flex-row space-x-4 " >
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm"
                onClick={ ()=> { console.log(bookingItem._id); deleteBooking(bookingItem._id)}}>  
                Cancel This Booking </button>
                
                <Link href="/mybooking/edit">
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                text-white shadow-sm"> 
                Edit This Booking </button>
                </Link>
                </div>
            </div>
        ))
        
        
        }
        </>

    )
}
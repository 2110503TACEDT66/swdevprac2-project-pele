'use client'
import { removeBooking, setBookingReducer } from "@/redux/features/bookSlice"
import { useAppSelector , AppDispatch } from "@/redux/store"
import {  useDispatch } from "react-redux"
import { useEffect } from "react"
import { BookingJson } from "../../interface"
import getBookings from "@/libs/getBookings"

export default function BookingList(){
    //เราอยากได้อะไร
    const bookItems = useAppSelector(state => state.bookSlice.bookItems)
    
    //เพิ่มการลบ
    const dispatch = useDispatch<AppDispatch>()
    console.log(bookItems)

        
    useEffect(() => {
        const fetchBooking = async () => {
            const booking:BookingJson = await getBookings();
            dispatch(setBookingReducer(booking.data))
        }
        fetchBooking();
    }, [dispatch])
    
    return( //วนลูปแสดงข้อมูลจาก array
        <>
        { bookItems.length === 0 ? <div>No Hotel Booking</div> :
        bookItems.map( (bookingItem) =>(
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" 
            key={bookingItem._id}>
                <div className="text-xl">Hotel: {bookingItem.hotel.name} </div>
                <div className="text-xl">StartDate: {bookingItem.startDate} </div>
                <div className="text-xl">EndDate: {bookingItem.endDate} </div>
                <div className="text-xl">User Id: {bookingItem.user} </div>
                       
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm"
                onClick={ ()=> dispatch(removeBooking(bookingItem._id))}>  
                Cancel This Booking </button>
            </div>
        ))
        
        
        }
        </>

    )
}
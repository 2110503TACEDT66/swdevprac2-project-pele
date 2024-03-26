'use client'
import Image from "next/image";
import styles from '../page.module.css'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import dayjs , { Dayjs } from "dayjs"
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem } from "@mui/material";
import { useAppSelector } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { addBooking } from "@/redux/features/bookSlice";
import updateBooking from "@/libs/updateBooking";
import BottomPage from "@/components/BottomPage";
import { BookingItem } from "../../../../../interface";
import getBooking from "@/libs/getBooking";
import getBookings from "@/libs/getBookings";



export default  function MyBookingEditPage({params} : {params : {bid:string}}) {


    const { data: session } = useSession();
    if (!session || !session.user.token) return null

    const urlParams = useSearchParams()
    const hid = urlParams.get('id')
    //console.log(params.bid);
    
    const hotelItems = useAppSelector(state => state.hotelSlice.hotelItems)
    const bookItems = useAppSelector(state => state.bookSlice.bookItems)
    
 
    

    const dispatch = useDispatch<AppDispatch>()

    const editBooking =  () => {
        if (!hotel || !startDate || !endDate) return;
    
        try {
            const startDateTime = startDate.toDate();
            const endDateTime = endDate.toDate();
            const id = params.bid
    
             updateBooking(id,startDateTime,endDateTime , hotel);
            console.log("makeBooking success");
        } catch (error) {
            console.error("Error making booking:", error);
            // Handle error
        }
    };
    const [hotel , setHotel] = useState<string>(hid || '')
    const [startDate,setStartDate] = useState<Dayjs|null>(null)
    const [endDate,setEndDate] = useState<Dayjs|null>(null)


    return(
        <main>

            <div className="min-h-screen flex items-center justify-center">
            <div className="'justify-center items-center h-[500px] w-[400px] p-9 border rounded-lg mx-auto shadow-md shadow-white hover:shadow-2xl hover:shadow-white'">
                <div className="text-4xl fonts-sans mb-10 mt-3 ">Edit Booking </div>
                <div className="text-md fonts-sans mb-1 ">Select Check-in Date</div>
                <div className="">
                    <DateReserve onDateChange={ (value:Dayjs) =>{
                        setStartDate(value) 
                    }} defaultDate={startDate} />
                </div>
                <div className="text-md fonts-sans mt-6 mb-1 ">Select Check-out Date</div>
                <div>
                    <DateReserve onDateChange={ (value:Dayjs) =>{
                        setEndDate(value)
                    }} defaultDate={endDate} />
                </div>
                <div className="text-md fonts-sans mt-6 mb-1 ">Select Hotel</div>
                <div>
                    <Select variant="standard" name="hotell" id="hotel" className="h-[2em] w-[200px]" value={hotel} onChange={(event) => {setHotel(event.target.value); console.log(hotel)}}>
                    {
                        hotelItems.map((hotelitem) => (
                            <MenuItem key={hotelitem.id} value={hotelitem.id}> {hotelitem.name}  </MenuItem>
                        ))
                    }
                    </Select> 
                </div>


                
            <button name="Book Vaccine" className='text-cyan-800 text-xl font-sans border px-5 py-3 rounded-md hover:bg-cyan-950 hover:shadow-lg hover:shadow-white mt-5 hover:text-white' onClick={editBooking}>Edit Booking</button>   
            </div>
            </div>

        </main>
    );

}
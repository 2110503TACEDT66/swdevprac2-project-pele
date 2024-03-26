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
import { BookingItem } from "../../../interface";
import { useAppSelector } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { addBooking } from "@/redux/features/bookSlice";


export default function BookingPage(){

    const { data: session } = useSession();
    if (!session || !session.user.token) return null
    
    const hotelItems = useAppSelector(state => state.hotelSlice.hotelItems)
    const bookItems = useAppSelector(state => state.bookSlice.bookItems)

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if (hotel && startDate && endDate){
            const item: BookingItem = {
                _id : hotel ,
                startDate : dayjs(startDate).format("YYYY-MM-DD") , 
                endDate : dayjs(endDate).format("YYYY-MM-DD") ,
                user : session.user.email ,
                hotel: {
                _id: hotel,
                name: "",
                address: "",
                tel: "",
                id: hotel
                },
                createdAt : "" ,
                __v : 0 
            }
            console.log("makeBooking success");
            dispatch(addBooking(item))
        }

    }
    const [hotel , setHotel] = useState<string>("")
    const [startDate,setStartDate] = useState<Dayjs|null>(null)
    const [endDate,setEndDate] = useState<Dayjs|null>(null)



    // const onBooking = async () => {

    //     if (!hotel || !startDate || !endDate) return

    //     const data: BookingItem = {
    //         _id : hotel ,
    //         startDate : dayjs(startDate).format("YYYY-MM-DD") , 
    //         endDate : dayjs(endDate).format("YYYY-MM-DD") ,
    //         user : session.user._id ,
    //         hotel: {
    //           _id: hotel,
    //           name: "",
    //           address: "",
    //           tel: "",
    //           id: hotel
    //         },
    //         createdAt : "" ,
    //         __v : 0 
    //     }
 
    // }

    return(
        <main>
            {/* <div className="text-lg text-center"> Booking</div>
            <div className='block p-[5px] m-0 w-[100vw] h-[100vh] relative'>
            <Image src={'/img/cover.jpeg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            </div> */}
            <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
            <DateReserve onDateChange={ (value:Dayjs) =>{
                setStartDate(value) 
            }} defaultDate={startDate} />
            <DateReserve onDateChange={ (value:Dayjs) =>{
                setEndDate(value)
            }} defaultDate={endDate} />


            <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]" value={hotel} onChange={(event) => setHotel(event.target.value)}>
                {
                    hotelItems.map((hotelitem) => (
                        <MenuItem key={hotelitem.id} value={hotelitem.id}> {hotelitem.name}  </MenuItem>
                    ))
                }
            </Select>     
            <button name="Book Vaccine" className="bg-white p-2 rounded-lg shadow-lg" onClick={makeBooking}>Booking Hotel</button>   
            </div>
            </div>
  


        </main>
    );

}
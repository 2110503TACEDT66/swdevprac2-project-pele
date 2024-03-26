'use client'
import HotelCard from "@/components/HotelCard";
import Image from "next/image";
import styles from '../page.module.css'
import { useState } from "react";
import HotelCatalog from "@/components/HotelCatalog";
import getHotels from "@/libs/getHotels";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material"


export default function hotelsPage(){
    const hotels = getHotels()

    return(
        <main>
            <div className='block p-[5px] m-0 w-[100vw] h-fit relative'>
                <Image
                src={'/img/cover.jpeg'}
                alt='cover'
                fill={true}
                priority
                objectFit='cover'
                style={{ zIndex: -1 }}

                />
            <div className="flex flex-row m-[20px] mt-[160px] flex-wrap justify-around content-around ">
                <Suspense fallback={<p className="text-white text-center text-4xl font-sans p-10 h-[100vh]">Loading ... <LinearProgress className="w-[80vw] h-[20px] rounded-3xl mt-5"/></p>}>
                    <HotelCatalog hotelsJson={hotels}/>
                </Suspense>
            
            </div>
            </div>
        </main>
    );
}
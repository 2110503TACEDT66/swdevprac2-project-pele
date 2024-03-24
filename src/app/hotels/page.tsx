'use client'

import HotelCard from "@/components/HotelCard";
import Image from "next/image";
import styles from '../page.module.css'
import { useState } from "react";
import HotelCatalog from "@/components/HotelCatalog";
import getHotels from "@/libs/getHotels";


export default function hotelsPage(){
    const hotels = getHotels()

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <main>
            <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            className='opacity-30'
            />
            <div className="text-center my-[10%]">
                    <input
                        type="text"
                        placeholder="Search hotels..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className="border border-gray-300 rounded-md px-4 py-2 mt-4 mb-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
            <div className="flex flex-row m-[20px] flex-wrap justify-around content-around ">
            <HotelCatalog hotelsJson={hotels}/>
            </div>
            </div>
        </main>
    );
}
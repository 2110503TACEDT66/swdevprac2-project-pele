'use client'
import BookingList from "@/components/BookingList";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function MyBookingPage() {
    return(
        <main>
            <div className="m-[20px] flex-wrap justify-around content-around ">
                <Suspense fallback={<p className="mt-[300px] text-cyan-900 text-center text-4xl font-sans p-10 h-[100vh]">Loading ... <LinearProgress className="text-center h-[20px] rounded-3xl mt-5"/></p>}>
                    <div className="mt-[150px] ml-10 text-4xl text-cyan-900">Bookings</div>
                    <div className="mt-10">
                         <BookingList></BookingList>
                    </div>
                </Suspense>
            
            </div>
        </main>
    );
}
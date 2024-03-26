'use client'
import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
    return(
        <main>
            <div className="mt-[150px] ml-10 text-4xl">Bookings</div>
            <div className="mt-10">
                <BookingList></BookingList>
            </div>
            
        </main>
    );
}
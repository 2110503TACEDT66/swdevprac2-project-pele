"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../interface";

export default async function updateBooking(id:string, bookingData: BookingItem) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:3500/api/v1/bookings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            startDate: bookingData.startDate,
            endDate: bookingData.endDate,
            user: bookingData.user,
            //ค่อยเพิ่ม
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}
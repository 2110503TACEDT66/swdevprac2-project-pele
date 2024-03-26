'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../interface";
import { getServerSession } from "next-auth";

export default async function createBooking(startDate : Date , endDate : Date , hotel : string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:3500/api/v1/hotels/${hotel}/bookings`, {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            startDate: startDate,
            endDate: endDate
        })
    });

    if (!response.ok) {
        throw new Error('Failed to create Booking');
    }

    return await response.json();
}
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useEffect } from "react";

export default async function getBooking(id:string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:3500/api/v1/bookings/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to get booking")
    }

    return await response.json();
}
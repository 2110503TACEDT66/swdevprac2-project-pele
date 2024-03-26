'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function deleteBooking(id:string) {

    const session = await getServerSession(authOptions);
    

    const response = await fetch(`http://localhost:3500/api/v1/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to delete bookings: ${response.statusText}`);
    }

    return await response.json();
}
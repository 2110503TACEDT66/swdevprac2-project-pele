"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { BookingItem } from "../../interface";

export default async function updateBooking(id:string, EstartDate : Date , EendDate : Date , Ehotel : string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            startDate: EstartDate,
            endDate: EendDate,
            hotel : Ehotel ,
            //ค่อยเพิ่ม
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}
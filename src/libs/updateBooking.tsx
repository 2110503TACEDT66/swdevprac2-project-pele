"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../interface";

<<<<<<< HEAD
export default async function updateBooking(id:string, EstartDate : Date , EendDate : Date , Ehotel : string) {
=======
export default async function updateBooking(id:string, startDate : Date, endDate :Date ,hotel : string ) {
>>>>>>> 6ab303683cd9ebc049ca34de7ef15362422f422d

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:3500/api/v1/bookings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
<<<<<<< HEAD
            startDate: EstartDate,
            endDate: EendDate,
            hotel : Ehotel ,
=======
            startDate: startDate,
            endDate: endDate,
            hotel : hotel
>>>>>>> 6ab303683cd9ebc049ca34de7ef15362422f422d
            //ค่อยเพิ่ม
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}
"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({ onDateChange, defaultDate }: { onDateChange: Function, defaultDate: Dayjs | null}) {
    // console.log("defaultDate = ", defaultDate);
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(defaultDate);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-cyan-200" 
            value= {bookingDate}
            onChange={(value) => {setBookingDate(value); onDateChange(value)}}/>
        </LocalizationProvider>
    )
}
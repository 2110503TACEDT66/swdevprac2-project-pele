import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem, BookingJson } from "../../../interface";
import { store } from "../store";

import getBookings from "@/libs/getBookings";
import getBooking from "@/libs/getBooking";
import createBooking from "@/libs/createBooking";
import updateBooking from "@/libs/updateBooking";
import deleteBooking from "@/libs/deleteBooking";


type BookState = {
    bookItems : BookingItem[]
}

const initialState:BookState = {bookItems:[]}

export const bookSlice = createSlice({
    name : "booking",
    initialState,
    reducers : {
        setBookingReducer: (state, action: PayloadAction<BookingItem[]>) => {
            state.bookItems = action.payload
        },
        addBooking : (state , action : PayloadAction<BookingItem>) => {
            //เงื่อนไข
            state.bookItems.push(action.payload)
            
        },
        removeBooking : (state, action:PayloadAction<string>) => {

        }
    }
})

export const { addBooking , removeBooking , setBookingReducer } = bookSlice.actions
export default bookSlice.reducer
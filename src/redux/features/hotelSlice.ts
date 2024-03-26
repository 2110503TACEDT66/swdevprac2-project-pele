import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HotelItem,HotelJson } from "../../../interface";
import { store } from "../store";

import getHotels from "@/libs/getHotels";

type HotelState = {
    hotelItems: HotelItem[]
}

const initialState: HotelState = {
    hotelItems: []
}

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setHotelReducer: (state, action: PayloadAction<HotelItem[]>) => {
            state.hotelItems = action.payload
        },
        addMassageReducer: (state, action: PayloadAction<HotelItem>) => {
            const remainMassage = state.hotelItems.filter((hotel) => hotel.id !== action.payload.id)
            remainMassage.push(action.payload)
            state.hotelItems = remainMassage
            //createMassage(action.payload)
        }

    },
});

export const { setHotelReducer, addMassageReducer } = hotelSlice.actions

export default hotelSlice.reducer

// Fetch data and update initialState
getHotels().then((res:HotelJson) => {
    store.dispatch(setHotelReducer(res.data));
});
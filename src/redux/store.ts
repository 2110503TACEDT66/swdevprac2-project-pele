import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import {  TypedUseSelectorHook, useSelector} from "react-redux";
import hotelSlice from "./features/hotelSlice";



export const store = configureStore({
    reducer : {
        bookSlice,
        hotelSlice
    }


})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
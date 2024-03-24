'use client'

import HotelCard from "./HotelCard"
import { useEffect, useReducer , useState} from "react"
import Link from "next/link"
import getHotels from "@/libs/getHotels"


export default function CardPanel(){
    //มันคือ arrow function เฉยๆ
    const [hotelResponse , setHotelResponse] = useState(null)
    useEffect( ()=>{
        const fetchData = async () => {
            const hotels = await getHotels()
            setHotelResponse(hotels)
        }
        fetchData()
    }, [] )
    
    if(!hotelResponse) return  (<p>Hotel Panel is Loading...</p>)
    return(
        <div>
            <div style={{margin:"20px" , display:"flex" , flexDirection:"row" , flexWrap:"wrap" , alignContent:"space-around" , justifyContent:"space-around"}}>
                {
                    hotelResponse.data.map( (HotelItem)=> (
                        <Link href={`/hotels/${HotelItem.hid}`} className="w-1/5">
                        <HotelCard hotelName={HotelItem.name} imgSrc={HotelItem.picture}
                        />
                        </Link>
                    ))  //Array.map ( (x)=> (ฟังชั่นแสดงไรบ้างล้ะ) )
                }
            </div>
        </div>  //สมากชิกแต่ละตัวเปลี่ยนเป้น array โดน map กลายเป้น jsx component ในตัวแปรชื่อ car
    )
    
}

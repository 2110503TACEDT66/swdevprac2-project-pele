import HotelCard from "./HotelCard"
import Link from "next/link"

export default async function HotelCatalog({hotelsJson} : {hotelsJson:Promise<HotelJson>}){
    const hotelJsonReady = await hotelsJson
    //Explore {hotelJsonReady.count} models of our catalog
    return(
        <>
        <div className="font-serif text-center text-white text-4xl">Select 1 of {hotelJsonReady?.count} hotels</div>
        <div style={{margin:"20px",justifyContent:"space-around", alignContent:"space-around",display:"flex" , flexDirection:"row" , flexWrap:"wrap"}}>
                {
                    hotelJsonReady?.data.map( (hotelItem:HotelItem)=> (
                        <HotelCard hotelName={hotelItem.name} hotelAddress={hotelItem.address} hotelTel={hotelItem.tel} hid={hotelItem._id} />
                    ))  //Array.map ( (x)=> (ฟังชั่นแสดงไรบ้างล้ะ) ) copy from hospitalpanel
                }
            </div>  
        </>
    )
}

//ขึ้นแดงๆ เพราะ json เป้น Object ธรรมดา ไม่ได้ทำเป็นคลาส
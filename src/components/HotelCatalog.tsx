import HotelCard from "./HotelCard"
import Link from "next/link"

export default async function HotelCatalog({hotelsJson} : {hotelsJson:Promise<HotelJson>}){
    const hotelJsonReady = await hotelsJson
    //Explore {hotelJsonReady.count} models of our catalog
    return(
        <>
        choose 1 of {hotelJsonReady?.count} hospitals
        <div className="m-[20px] justify-around content-around flex flex-row flex-wrap">
                {
                    hotelJsonReady?.data.map( (hotelItem:HotelItem)=> (
                        <Link href={`/hotels/${hotelItem.id}`} className="w-1/5">
                        <HotelCard hotelName={hotelItem.name} imgSrc={hotelItem.picture}/>
                        </Link>
                    ))  //Array.map ( (x)=> (ฟังชั่นแสดงไรบ้างล้ะ) ) copy from hospitalpanel
                }
            </div>  
        </>
    )
}
//style={{margin:"20px" ,justifyContent:"space-around", alignContent:"space-around",display:"flex" , flexDirection:"row" , flexWrap:"wrap"}

//ขึ้นแดงๆ เพราะ json เป้น Object ธรรมดา ไม่ได้ทำเป็นคลาส
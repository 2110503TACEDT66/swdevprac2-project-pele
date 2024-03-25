
import getHotel from "@/libs/getHotel"
import Image from "next/image"//ต้องกำหนด  width height (require) ดูใน assignment09
export default async function HotelDetailPage( {params} : {params : {hid:string}}) {

    const HotelDetail = await getHotel(params.hid)
    
    return (
        <main className="text-center p-5 ">
            <h1 className="text-lg font-medium text-white">{HotelDetail.data.name} </h1>
            <div className="flex flex-row my-5">
                <Image src={HotelDetail.data.picture} alt="Hospital Image" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%] m-10"/>  
                <div className="text-md mx-5 text-left text-white my-10"> {HotelDetail.data.name}
                <div className=""> Address: {HotelDetail.data.address} </div>
                <div className=""> Tel: {HotelDetail.data.tel} </div>
                </div>
            </div>
        </main>
    )
} 
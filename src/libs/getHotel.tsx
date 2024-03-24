export default async function getHotel(hid:string) {
    
    
    const response = await fetch(`http://localhost:3500/api/v1/hotels/${hid}`)
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }

    return await response.json()
}
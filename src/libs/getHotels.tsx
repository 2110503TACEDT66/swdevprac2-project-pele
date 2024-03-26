export default async function getHotels() {
    
    await new Promise( (resolve)=>setTimeout(resolve,5000) )
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/hotels`)
    
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }

    return await response.json()
}
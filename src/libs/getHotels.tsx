export default async function getHotels() {
    
    await new Promise( (resolve)=>setTimeout(resolve,1000) )
    
    const response = await fetch("http://localhost:3500/api/v1/hotels")
    
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }

    return await response.json()
}
import Image from "next/image"


export default function AboutUs(){
    return(
        <div className="">  
            <h1 className="text-white p-5 text-5xl font-sans">ABOUT US</h1>
            <div className="w-full h-[300px] bg-zinc-700 rounded-3xl flex flex-row mt-10 shadow-xl shadow-black">
                <div className="h-full w-[30%] relative rounded-l-3xl">
                    <Image src='/img/Jirayu.jpeg'
                    alt='true'
                    fill={true}
                    className="rounded-l-3xl object-cover"/>
                </div>
                <div className="h-full w-[70%] relative ml-10 mt-5 text-white font-sans p-10">
                    <h1 className="text-4xl py-5">Jirayu Khunrak</h1>
                    <h2 className="text-3xl py-5">Computer Enngineering Chula</h2>
                </div>
                
            </div>

        </div>
    );
}
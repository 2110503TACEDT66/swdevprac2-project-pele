import Image from "next/image"


export default function AboutUs(){
    return(
        <div className="">
              
            <h1 className="text-white p-5 text-8xl font-serif">ABOUT US</h1>
            <div className="w-full h-[300px] bg-white rounded-3xl flex flex-row mt-10 shadow-xl shadow-black p-5">
                <div className="h-full w-[30%] relative rounded-l-3xl">
                    <Image src='/img/Jirayu.jpeg'
                    alt='true'
                    fill={true}
                    className="rounded-l-3xl object-cover"/>
                </div>
                <div className="h-full w-[70%] relative text-cyan-100 ml-5 font-serif pl-10 pt-10 text-center p-5 bg-sky-900 rounded-r-3xl">
                    <h1 className="text-4xl py-5">Jirayu Khunrak</h1>
                    <h2 className="text-3xl py-5">Computer Engineering Chula</h2>
                </div>
                
            </div>
            <div className="w-full h-[300px] bg-white rounded-3xl flex flex-row-reverse mt-20 shadow-xl shadow-black p-5">
                <div className="h-full w-[30%] relative rounded-r-3xl">
                    <Image src='/img/Jirayu.jpeg'
                    alt='true'
                    fill={true}
                    className="rounded-r-3xl object-cover"/>
                </div>
                <div className="h-full w-[70%] relative ml-10 mt-5 text-slate-700 font-serif p-5 ">
                    <h1 className="text-4xl py-5">Jirayu Khunrak</h1>
                    <h2 className="text-3xl py-5">Computer Engineering Chula</h2>
                </div>
                
            </div>
            <div className="w-full h-[300px] bg-white rounded-3xl flex flex-row mt-20 shadow-xl shadow-black p-5">
                <div className="h-full w-[30%] relative rounded-l-3xl">
                    <Image src='/img/Jirayu.jpeg'
                    alt='true'
                    fill={true}
                    className="rounded-l-3xl object-cover"/>
                </div>
                <div className="h-full w-[70%] relative ml-10 mt-5 text-slate-700 font-serif p-5">
                    <h1 className="text-4xl py-5">Jirayu Khunrak</h1>
                    <h2 className="text-3xl py-5">Computer Engineering Chula</h2>
                </div>
                
            </div>

        </div>
    );
}
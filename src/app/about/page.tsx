
import AboutUs from "@/components/AboutUs";
import Image from "next/image";

export default function About(){
    return(
<main>
      <div className='block p-[5px] m-0 w-[100vw] h-[100vh] relative'>
        <Image
          src={'/img/cover.jpeg'}
          alt='cover'
          fill={true}
          priority
          objectFit='cover'
          style={{ zIndex: -1 }}

        />
        <div className="mt-[125px] mx-[40px]">
            <AboutUs/>
        </div>
        
      </div>
    </main>
    );
}
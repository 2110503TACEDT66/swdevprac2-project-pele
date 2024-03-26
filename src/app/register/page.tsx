import Image from "next/image";
import Register from './Register';
import BottomPage from "@/components/BottomPage";

export default function RegisterPage() {
  return (
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
        <div className="text-center">
            <Register/>
        </div>
      </div>
    </main>
  );
}

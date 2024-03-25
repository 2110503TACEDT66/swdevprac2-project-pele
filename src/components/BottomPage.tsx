
import Link from "next/link";

export default function BottomPage() {
    return (
        <main>
            <div className="bg-gray-900 justify-center text-white h-[250px] flex flex-row py-6">
        <div className="text-left font-sans p-9">
            <div className="text-lg">Help</div>
            <div><Link href={'/helpcenter'} className="text-white opacity-50 text-sm">Help Center</Link></div>
            <div><Link href={'/helpcenter/'} className="text-white opacity-50 text-sm">FAQs</Link></div>
            <div><Link href={'/privacypolicy'} className="text-white opacity-50 text-sm">Privacy policy</Link></div>
            <div><Link href={'/cookiepolicy'} className="text-white opacity-50 text-sm">Cookie policy</Link></div>
        </div>
        <div className="text-left font-sans p-9">
            <div className="text-lg">Company</div>
            <div><Link href={'/about'} className="text-white opacity-50 text-sm">About us</Link></div>
            <div><Link href={'/contact'} className="text-white opacity-50 text-sm">Contact</Link></div>
        </div>
        <div className="text-left font-sans p-9">
            <div className="text-lg">Booking</div>
            <div><Link href={'/mybooking'} className="text-white opacity-50 text-sm">My Booking</Link></div>
            <div><Link href={'/hotels'} className="text-white opacity-50 text-sm">Hotels</Link></div>
            <div><Link href={'/booking'} className="text-white opacity-50 text-sm">Booking</Link></div>
        </div>
        <div className="text-left font-sans p-9">
            <div className="text-lg"></div>
            <div><Link href={'/mybooking'} className="text-white opacity-50 text-sm">My Booking</Link></div>
            <div><Link href={'/hotels'} className="text-white opacity-50 text-sm">Hotels</Link></div>
        </div>
      </div>
      <div className="bg-slate-100 h-[100px] text-center p-7 font-sans text-md">
        <div className="text-center">All material herein © 2024 Pele Company Pte. Ltd. All Rights Reserved.</div>
        <div className="text-center">Pele is part of Bookig Center Service Inc., the world leader in online booking hotels.</div>
      </div>
       <div className="bg-slate-100 h-[20px] text-center font-sans text-xs text-slate-400">sg-pc-6g-acm-web-user-78cb6d4958-c8jf6</div>
        </main>
      
    );
  }
  
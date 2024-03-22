import Image from 'next/image'

export default function HotelCard({hotelName , imgSrc} : {hotelName : string , imgSrc : string}) {
    return (
        <div>
            <div>
                <Image src={imgSrc}
                    alt='Hotel'
                    fill={true}
                    objectFit='cover'/>
            </div>
            <div className=''>{hotelName}</div>
            <button className=''>Book</button>
        </div>
    );
}
interface HotelItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
  }

  interface BookingItem {
    name : string,
    surname : string,
    id : string,
    hospital: string,
    bookDate : string,
  }
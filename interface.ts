export interface HotelItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    __v: number,
    id: string
  }
  
  export interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
  }

  export interface BookingItem {
    _id : string
    user : string,
    hotel: string,
    startDate : string , 
    endDate : string ,
    createdAt : string ,
    __v : string 
  }
  export interface BookingJson {
    success : boolean , 
    count : number ,
    data : BookingItem[]
  }
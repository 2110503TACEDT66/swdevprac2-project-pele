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
    startDate : string , 
    endDate : string ,
    user : string ,
    hotel: {
      _id: string,
      name: string,
      address: string,
      tel: string,
      id: string
    },
    createdAt : string ,
    __v : number 

  }
  export interface BookingJson {
    success : boolean , 
    count : number ,
    data : BookingItem[]
  }
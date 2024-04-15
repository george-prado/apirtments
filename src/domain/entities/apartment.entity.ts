export class Apartment {
  constructor(
    public id: number,
    public addressId: number,
    public price: number,
    public rooms: RoomDetails,
    public photos: string[],
  ) {}
}

export class Address {
  constructor(
    public addressId: number,
    public streetName: string,
    public streetNumber: string,
    public neighborhood: string,
  ) {}
}

export class RoomDetails {
    constructor(
        public communityFee: number,
        public renovationNeeded: boolean,
        public squareMeters: number,
        public apartmentFloor: number,
        public bedrooms: number,
        public bathroom: number,
        public suites: number,
        public gotBalcony: boolean,
        public gotCarSpace: boolean,
        public insideGatedCommunity: boolean,
    ) {}
}

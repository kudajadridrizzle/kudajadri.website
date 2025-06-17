import {
  duluxeRoomsImage1,
  duluxeRoomsImage2,
  duluxeRoomsImage3,
  duluxeRoomsImage4,
  duluxeRoomsImage5,
  deluxeHeritageRoomsImage1,
  deluxeHeritageRoomsImage2,
  deluxeHeritageRoomsImage3,
  deluxeHeritageRoomsImage4,
  deluxeHeritageRoomsImage5,
  classicRoomsImage1,
  classicRoomsImage2,
  classicRoomsImage3,
  classicRoomsImage4,
  classicRoomsImage5,

} from "./assets";

import sessionImage from "../../assets/imageFour.jpg";

interface SessionMorning {
  titile: string;
  subTitlestr: string;
  image: string;
}
interface AnotherRoom {
  titlestr: string;
  roomType: string;
  discription: string;
  image: string;
  navigate?: string;
}
interface Room {
  imageOne: string;
  imageTwo: string;
  imageFive: string;
  imageThree: string;
  imageFour: string;
  sesstion: SessionMorning;
  anotherRoomOne: AnotherRoom;
  anotherRoomTwo: AnotherRoom;
}
interface RoomData {
  [key: string]: Room;
}
interface ExtraPerson {
  note: string;
  rules: string[];
}

export interface RoomContent {
  roomType: string;
  description: string;
  offersTitle: string;
  offers: string[];
  pricePerNight: number;
  priceNote: string;
  checkIn: string;
  checkOut: string;
  cancellationPolicyTitle: string;
  cancellationPolicy: string[];
  extraPerson: ExtraPerson;
  bookingButtonText: string;
  bookingButtonLink: string;
}

export const roomData: RoomData = {
  "deluxe-rooms": {
    imageOne: duluxeRoomsImage1,
    imageTwo: duluxeRoomsImage2,
    imageThree: duluxeRoomsImage3,
    imageFour: duluxeRoomsImage4,
    imageFive: duluxeRoomsImage5,
    sesstion: {
      titile: "Good Morning, Sunshine.",
      subTitlestr:
        "Wake up to the soothing melodies of chirping birds and the warm embrace of sunlight, surrounded by serene greenery and breathtaking views of Wayanad’s natural beauty.",
      image: sessionImage,
    },
    anotherRoomOne: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Heritage Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: deluxeHeritageRoomsImage1,
      navigate: "/rooms/deluxe-rooms",
    },
    anotherRoomTwo: {
      titlestr: "ESSENTIAL",
      roomType: "Classic Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: classicRoomsImage1,
      navigate: "/rooms/classic-rooms",
    },
  },
  "deluxe-heritage-rooms": {
    imageOne: deluxeHeritageRoomsImage1,
    imageTwo: deluxeHeritageRoomsImage2,
    imageThree: deluxeHeritageRoomsImage3,
    imageFour: deluxeHeritageRoomsImage4,
    imageFive: deluxeHeritageRoomsImage5,
    sesstion: {
      titile: "Good Morning, Sunshine.",
      subTitlestr:
        "Wake up to the soothing melodies of chirping birds and the warm embrace of sunlight, surrounded by serene greenery and breathtaking views of Wayanad’s natural beauty.",
      image: sessionImage,
    },
    anotherRoomOne: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Room",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: duluxeRoomsImage1,
      navigate: "/rooms/deluxe-rooms",
      
    },
    anotherRoomTwo: {
      titlestr: "ESSENTIAL",
      roomType: "Classic Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: classicRoomsImage1,
      navigate: "/rooms/classic-rooms",
    },
  },
  "classic-rooms": {
    imageOne: classicRoomsImage1,
    imageTwo: classicRoomsImage2,
    imageThree: classicRoomsImage3,
    imageFour: classicRoomsImage4,
    imageFive: classicRoomsImage5,
    sesstion: {
      titile: "Good Morning, Sunshine.",
      subTitlestr:
        "Wake up to the soothing melodies of chirping birds and the warm embrace of sunlight, surrounded by serene greenery and breathtaking views of Wayanad’s natural beauty.",
      image: sessionImage,
    },
    anotherRoomOne: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Heritage Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: deluxeHeritageRoomsImage1,
      navigate: "/rooms/deluxe-heritage-rooms",
    },
    anotherRoomTwo: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: duluxeRoomsImage1,
      navigate: "/rooms/deluxe-rooms",
    },
  },
};


// rooms/classicRooms.ts
export const classicRooms = {
  roomType: "Classic Rooms",
  description:
    "Deluxe rooms, which have been carefully chosen for their breathtaking scenic views and a wide range of amenities, are an affordable way to escape to a lush environment.",
  offersTitle: "What this place offers",
  offers: [
    "Free parking on premises",
    "WIFI",
    "Washine machine",
    "Dedicated workspace"
  ],
  pricePerNight: 3500,
  priceNote: "Rates are twin share basis.",
  checkIn: "12:00 PM",
  checkOut: "10:00 AM",
  cancellationPolicyTitle: "Cancellation Policy",
  cancellationPolicy: [
    "Reservations canceled 30 days prior to the date of arrival: 50% refund",
    "Reservations canceled 15 days or less before arrival: No refund",
    "For cancellations due to natural or other reasons, the advance payment will be retained for your next visit."
  ],
  extraPerson: {
    note: "For Extra Person: ₹800/-",
    rules: [
      "Children aged 10 years and above: Considered as adults.",
      "Children aged 5–10 years: Chargeable as per the applicable rates."
    ]
  },
  bookingButtonText: "Book Now",
  bookingButtonLink: "/booking"
};

// rooms/classicRooms.ts
export const deluxeHeritageRooms = {
  roomType: "Deluxe Heritage Rooms",
  description:
    "Deluxe rooms, which have been carefully chosen for their breathtaking scenic views and a wide range of amenities, are an affordable way to escape to a lush environment.",
  offersTitle: "What this place offers",
  offers: [
    "Free parking on premises",
    "WIFI",
    "Washine machine",
    "Dedicated workspace"
  ],
  pricePerNight: 3500,
  priceNote: "Rates are twin share basis.",
  checkIn: "12:00 PM",
  checkOut: "10:00 AM",
  cancellationPolicyTitle: "Cancellation Policy",
  cancellationPolicy: [
    "Reservations canceled 30 days prior to the date of arrival: 50% refund",
    "Reservations canceled 15 days or less before arrival: No refund",
    "For cancellations due to natural or other reasons, the advance payment will be retained for your next visit."
  ],
  extraPerson: {
    note: "For Extra Person: ₹800/-",
    rules: [
      "Children aged 10 years and above: Considered as adults.",
      "Children aged 5–10 years: Chargeable as per the applicable rates."
    ]
  },
  bookingButtonText: "Book Now",
  bookingButtonLink: "/booking"
};

// rooms/classicRooms.ts
export const deluxeRooms = {
  roomType: "Deluxe Rooms",
  description:
    "Deluxe rooms, which have been carefully chosen for their breathtaking scenic views and a wide range of amenities, are an affordable way to escape to a lush environment.",
  offersTitle: "What this place offers",
  offers: [
    "Free parking on premises",
    "WIFI",
    "Washine machine",
    "Dedicated workspace"
  ],
  pricePerNight: 3500,
  priceNote: "Rates are twin share basis.",
  checkIn: "12:00 PM",
  checkOut: "10:00 AM",
  cancellationPolicyTitle: "Cancellation Policy",
  cancellationPolicy: [
    "Reservations canceled 30 days prior to the date of arrival: 50% refund",
    "Reservations canceled 15 days or less before arrival: No refund",
    "For cancellations due to natural or other reasons, the advance payment will be retained for your next visit."
  ],
  extraPerson: {
    note: "For Extra Person: ₹800/-",
    rules: [
      "Children aged 10 years and above: Considered as adults.",
      "Children aged 5–10 years: Chargeable as per the applicable rates."
    ]
  },
  bookingButtonText: "Book Now",
  bookingButtonLink: "/booking"
};

export const roomDataMap: Record<string, RoomContent> = {
  "classic-rooms": classicRooms,
  "deluxe-heritage-rooms": deluxeHeritageRooms,
  "deluxe-rooms": deluxeRooms
};

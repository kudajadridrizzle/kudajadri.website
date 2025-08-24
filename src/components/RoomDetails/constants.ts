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
  premiumRoomsImage22,
  premiumRoomsImage11,
  premiumRoomsImage13,
  premiumRoomsImage14,
  premiumRoomsImage15,
} from './assets';

import sessionImage from '../../assets/imageFour.jpg';

interface SessionMorning {
  titile: string;
  subTitlestr: string;
  image: string;
}
interface AnotherRoom {
  title: string;
  roomType: string;
  description: string;
  image: string;
  navigate: string;
}
export interface Room {
  // Image properties
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
  
  // Session and related room data
  session: SessionMorning;
  anotherRoomOne: AnotherRoom;
  anotherRoomTwo: AnotherRoom;
  anotherRoomThree: AnotherRoom;
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
  content?: {
    whyChooseUs?: {
      title: string;
      description: string;
      sections?: {
        title: string;
        content: string | string[];
      }[];
    };
    facilities?: {
      title: string;
      description: string;
      sections?: {
        title: string;
        items: string[];
      }[];
    };
    localExperiences?: {
      title: string;
      description: string;
      places: string[];
    };
    homestayCharm?: {
      title: string;
      description: string;
      benefits: string[];
    };
    idealFor?: {
      title: string;
      description: string;
      categories: string[];
    };
    traditionalTouch?: {
      title: string;
      description: string;
    };
    travelTips?: {
      title: string;
      description: string;
      tips: string[];
    };
    bookingCta?: {
      title: string;
      description: string;
    };
  };
  whyChooseUs?: {
    title: string;
    description: string;
  };
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

// Helper function to create room data with required properties
export const createRoomData = (
  imageOne: string, 
  imageTwo: string, 
  imageThree: string, 
  imageFour: string, 
  imageFive: string,
  session: SessionMorning,
  anotherRoomOne: AnotherRoom,
  anotherRoomTwo: AnotherRoom,
  anotherRoomThree: AnotherRoom
): Room => ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  session,
  anotherRoomOne,
  anotherRoomTwo,
  anotherRoomThree
});

export const roomData: RoomData = {
  'deluxe-rooms': createRoomData(
    duluxeRoomsImage1,
    duluxeRoomsImage2,
    duluxeRoomsImage3,
    duluxeRoomsImage4,
    duluxeRoomsImage5,
    {
      titile: 'Stay in One of the Best Wayanad Cottages',
      subTitlestr: `Our Deluxe Rooms are part of our Wayanad cottages collection, offering a private and peaceful retreat surrounded by greenery. Each room is thoughtfully designed to give you the comfort of home while letting you enjoy the scenic beauty of Wayanad.

Features of Our Deluxe Rooms:<br/>
• Spacious bedrooms with king-size or queen beds<br/>
• Attached bathrooms with hot water<br/>
• Private seating areas or balconies with garden views<br/>
• Modern furnishings for a cozy experience<br/>
• Clean, well-maintained interiors<br/><br/>`,
      image: sessionImage,
    },
    {
      title: 'ESSENTIAL',
      roomType: 'Deluxe Heritage Rooms',
      description: 'An economic escape in a lush atmosphere. This is affordable luxury with no compromises.',
      image: deluxeHeritageRoomsImage1,
      navigate: '/rooms/deluxe-heritage-rooms'
    },
    {
      title: 'EXPLORER',
      roomType: 'Classic Rooms',
      description: 'Experience authentic Wayanad hospitality in our Classic Rooms, blending traditional charm with modern comforts.',
      image: classicRoomsImage1,
      navigate: '/rooms/classic-rooms'
    },
    {
      title: 'LUXURY',
      roomType: 'Premium Rooms',
      description: 'Indulge in luxury with our Premium Rooms, featuring elegant interiors and premium amenities.',
      image: premiumRoomsImage22,
      navigate: '/rooms/premium-rooms'
    }
  ),
  'deluxe-heritage-rooms': createRoomData(
    deluxeHeritageRoomsImage1,
    deluxeHeritageRoomsImage2,
    deluxeHeritageRoomsImage3,
    deluxeHeritageRoomsImage4,
    deluxeHeritageRoomsImage5,
    {
      titile: 'Experience a Traditional Homestay in Wayanad, .',
      subTitlestr: `Our Deluxe Heritage Rooms reflect the timeless beauty of Kerala’s traditional homes. Staying in a traditional homestay in Wayanad allows you to enjoy the cultural richness of the region, from handcrafted furniture to locally inspired décor.<br/><br/>

       Highlights of Deluxe Heritage Rooms:<br/>
      • Elegant interiors with traditional wooden elements<br/>
      • Spacious rooms with king-size or queen beds<br/>
      • Private balconies or sit-out areas overlooking greenery<br/>
      • Cozy lounge areas for relaxation<br/>
      • Modern bathrooms with hot water and premium toiletries<br/><br/>`,      image: sessionImage,
    },
    {
      title: 'Deluxe Room',
      roomType: 'Deluxe Room',
      description: 'An economic escape in a lush atmosphere. This is affordable luxury with no compromises.',
      image: duluxeRoomsImage1,
      navigate: '/rooms/deluxe-rooms',
    },
    {
      title: 'EXPLORER',
      roomType: 'Classic Rooms',
      description: 'Experience authentic Wayanad hospitality in our Classic Rooms, blending traditional charm with modern comforts.',
      image: classicRoomsImage1,
      navigate: '/rooms/classic-rooms',
    },
    {
      title: 'LUXURY',
      roomType: 'Premium Rooms',
      description: 'Indulge in luxury with our Premium Rooms, featuring elegant interiors and premium amenities.',
      image: premiumRoomsImage22,
      navigate: '/rooms/premium-rooms',
    }
  ),
  'classic-rooms': createRoomData(
    classicRoomsImage1,
    classicRoomsImage2,
    classicRoomsImage3,
    classicRoomsImage4,
    classicRoomsImage5,
    {
      titile: 'Budget Friendly Homestays in Wayanad with Comfort and Style',
      subTitlestr: `Staying in Wayanad doesn't need to be expensive. Our Classic Rooms are designed for travelers who want comfort at a price that fits their budget. Each room is well-furnished with clean interiors, cozy beds, and a welcoming atmosphere.<br/><br/>

You'll experience:<br/>
• Comfortable bedding for restful sleep<br/>
• Spacious, well-ventilated rooms<br/>
• Essential amenities for your stay<br/>
• A peaceful environment surrounded by nature<br/><br/>

This makes our Classic Rooms one of the top budget friendly homestays in Wayanad for families, couples, and solo travelers.`,
      image: sessionImage,
    },
    {
      title: 'ESSENTIAL',
      roomType: 'Deluxe Heritage Rooms',
      description: 'An economic escape in a lush atmosphere. This is affordable luxury with no compromises.',
      image: deluxeHeritageRoomsImage1,
      navigate: '/rooms/deluxe-heritage-rooms',
    },
    {
      title: 'EXPLORER',
      roomType: 'Deluxe Rooms',
      description: 'Experience the perfect blend of comfort and style in our well-appointed Deluxe Rooms.',
      image: duluxeRoomsImage1,
      navigate: '/rooms/deluxe-rooms',
    },
    {
      title: 'LUXURY',
      roomType: 'Premium Rooms',
      description: 'Indulge in luxury with our Premium Rooms, featuring elegant interiors and premium amenities.',
      image: premiumRoomsImage22,
      navigate: '/rooms/premium-rooms',
    }
  ),
  'premium-rooms': createRoomData(
    premiumRoomsImage22,
    premiumRoomsImage11,
    premiumRoomsImage13,
    premiumRoomsImage14,
    premiumRoomsImage15,
    {
      titile: 'Why Choose Our Premium Rooms in Wayanad',
      subTitlestr: `Choosing our luxury homestays in Wayanad means selecting comfort and convenience without compromise. Each premium room is thoughtfully designed to offer spacious interiors, cozy furnishings, and stunning views of Wayanad's hills and greenery.

      Key Features of Premium Rooms<br/>
      • Elegant interiors with modern décor <br/>
      • Comfortable king-size or queen beds<br/>
      • Attached bathrooms with hot water and premium toiletries<br/>
      • Private balconies with scenic views<br/>
      • Relaxing lounge areas within the room<br/><br/>`,
      image: sessionImage,
    },
    {
      title: 'ESSENTIAL',
      roomType: 'Deluxe Heritage Rooms',
      description: 'An economic escape in a lush atmosphere. This is affordable luxury with no compromises.',
      image: deluxeHeritageRoomsImage1,
      navigate: '/rooms/deluxe-heritage-rooms',
    },
    {
      title: 'EXPLORER',
      roomType: 'Deluxe Rooms',
      description: 'Experience the perfect blend of comfort and style in our well-appointed Deluxe Rooms.',
      image: duluxeRoomsImage1,
      navigate: '/rooms/deluxe-rooms',
    },
    {
      title: 'CLASSIC',
      roomType: 'Classic Rooms',
      description: 'Experience authentic Wayanad hospitality in our Classic Rooms, blending traditional charm with modern comforts.',
      image: classicRoomsImage1,
      navigate: '/rooms/classic-rooms',
    }
  ),
};

// rooms/classicRooms.ts
export const classicRooms: RoomContent = {
  roomType: 'Affordable Homestay in Wayanad – Classic Rooms at Kudajadri Drizzle',
  description:
    'Looking for a peaceful and affordable homestay in Wayanad? Our Classic Rooms at Kudajadri Drizzle offer comfort, charm, and a true homely feel without stretching your budget. Surrounded by greenery and the calmness of nature, this is the perfect place to relax while enjoying all the essentials for a memorable stay.',
  content: {
    whyChooseUs: {
      title: 'Why Choose Our Classic Rooms in Wayanad',
      description: `Our Classic Rooms are more than just a place to sleep—they are a complete experience of Wayanad's hospitality. Whether you're visiting for a short weekend or a long vacation, you'll find everything you need here.`,
      sections: [
        {
          title: 'Great Value for Money',
          content: 'Travelers often struggle to balance affordability and comfort. At Kudajadri Drizzle, you don\'t have to compromise. The Classic Rooms combine both—giving you a neat, well-maintained space at a reasonable price.'
        },
        {
          title: 'Perfect for All Types of Travelers',
          content: [
            'Families will enjoy the spacious rooms and safe environment',
            'Couples will love the peaceful, private setting',
            'Solo travelers will find it affordable and homely',
            'Group travelers can book multiple rooms together'
          ]
        }
      ]
    },
    facilities: {
      title: 'Facilities at Our Affordable Homestay in Wayanad',
      description: 'We believe in keeping things simple yet satisfying. Our Classic Rooms come with everything you need for a comfortable stay.',
      sections: [
        {
          title: 'Room Amenities',
          items: [
            'Clean and cozy double beds',
            'Private bathrooms with hot water',
            'Free Wi-Fi to stay connected',
            'Seating area for relaxation'
          ]
        },
        {
          title: 'Property Features',
          items: [
            'Safe parking space',
            'Traditional Kerala-style architecture',
            'Common areas to sit and unwind',
            'Lush greenery all around'
          ]
        }
      ]
    },
    localExperiences: {
      title: 'Local Experiences Around Our Budget Friendly Homestays in Wayanad',
      description: 'Staying at Kudajadri Drizzle places you close to some of the most beautiful attractions in Wayanad. From waterfalls to wildlife, you\'ll have plenty of options to explore.',
      places: [
        'Edakkal Caves – Famous for ancient carvings',
        'Pookode Lake – A scenic freshwater lake',
        'Soochipara Waterfalls – Perfect for adventure lovers',
        'Wayanad Wildlife Sanctuary – Spot elephants and other wildlife',
        'Chembra Peak – Popular trekking destination'
      ]
    },
    homestayCharm: {
      title: 'The Charm of Staying in a Homestay in Wayanad',
      description: 'Hotels may provide luxury, but homestays offer something unique—warmth and personal care. Our Classic Rooms give you the chance to experience Wayanad\'s culture and lifestyle closely.',
      benefits: [
        'Friendly and personalized hospitality',
        'Homely atmosphere with local touch',
        'Authentic Kerala food on request',
        'Peaceful surroundings away from crowds'
      ]
    },
    idealFor: {
      title: 'Who Should Book Our Classic Rooms',
      description: 'Our rooms are suited for a wide range of travelers. If you fall into any of these categories, you\'ll find them ideal:',
      categories: [
        'Budget Travelers – Affordable stay without cutting down on comfort',
        'Families – Spacious rooms with homely vibes',
        'Couples – Quiet and private atmosphere',
        'Nature Lovers – Surrounded by greenery and fresh air',
        'Workation Seekers – Wi-Fi and peaceful setting for remote work'
      ]
    },
    traditionalTouch: {
      title: 'Affordable Homestay in Wayanad with a Touch of Tradition',
      description: 'One of the highlights of our Wayanad homestay is its traditional design. The Classic Rooms reflect the charm of Kerala\'s architecture while blending modern convenience. From wooden accents to open spaces filled with natural light, every detail adds to the authentic experience.'
    },
    travelTips: {
      title: 'How to Make the Most of Your Stay in Wayanad',
      description: 'If you\'re planning your trip, here are a few tips to make it more enjoyable while staying at our budget friendly homestays in Wayanad:',
      tips: [
        'Start your mornings with a walk around the property to enjoy fresh air.',
        'Try local dishes offered on request for an authentic taste of Kerala.',
        'Plan short day trips to nearby attractions and return to relax in your Classic Room.',
        'Carry a camera to capture the scenic beauty around the homestay.',
        'Spend your evenings enjoying the calmness instead of rushing around.'
      ]
    },
    bookingCta: {
      title: 'Book Your Budget Friendly Homestay in Wayanad Today',
      description: 'Finding the right place to stay can make or break your trip. If you\'re looking for an affordable homestay in Wayanad that feels like home, Kudajadri Drizzle\'s Classic Rooms are the perfect choice. With budget-friendly pricing, cozy interiors, and a location close to major attractions, your stay will be both relaxing and memorable.'
    }
  },
  offersTitle: 'What this place offers',
  offers: [
    'Fridge',
    'WIFI',
    'TV',
    'Iron',
    'Window guards',
    'Board games',    
  ],
  pricePerNight: 2500,
  priceNote: 'Price for 2 adults. Extra person charges may apply.',
  checkIn: '12:00 PM - 6:00 PM',
  checkOut: '11:00 AM',
  cancellationPolicyTitle: 'Cancellation policy',
  cancellationPolicy: [
    'Free cancellation until 14 days before check-in',
    '50% refund if canceled between 7-14 days before check-in',
    'No refund if canceled within 7 days of check-in',
  ],
  extraPerson: {
    note: '₹1,000 per night after 2 guests',
    rules: [
      'No charge for children under 5 years',
      'Extra bed available on request',
      'Maximum 1 extra bed per room',
    ],
  },
  bookingButtonText: 'Check Availability',
  bookingButtonLink: '/book-now',
};

// rooms/classicRooms.ts
export const deluxeHeritageRooms: RoomContent = {
  roomType: 'Heritage Homestay in Wayanad – Deluxe Heritage Rooms at Kudajadri Drizzle',
  description:
    'Step into the charm of Wayanad with our heritage homestay in Wayanad. Our Deluxe Heritage Rooms combine traditional architecture with modern comforts, offering travelers an authentic yet luxurious experience. Every detail is designed to give you a sense of history and culture while keeping your stay cozy and relaxing.',
  offersTitle: 'What this place offers',
  offers: [
    'Fridge',
    'WIFI',
    'TV',
    'Iron',
    'Window guards',
    'Board games',
    'Portable fans',
    'Essentials',
  ],
  pricePerNight: 4000,
  priceNote: 'Rates are twin share basis.',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  cancellationPolicyTitle: 'Cancellation Policy',
  cancellationPolicy: [
    'Reservations canceled 30 days prior to the date of arrival: 50% refund',
    'Reservations canceled 15 days or less before arrival: No refund',
    'For cancellations due to natural or other reasons, the advance payment will be retained for your next visit.',
  ],
  extraPerson: {
    note: 'For Extra Person: ₹1250/-',
    rules: [
      'Children aged 10 years and above: Considered as adults.',
      'Children aged 5–10 years: Chargeable as per the applicable rates.',
    ],
  },
  bookingButtonText: 'Book Now',
  bookingButtonLink: '/contact',
};

// rooms/classicRooms.ts
export const deluxeRooms: RoomContent = {
  roomType: ' Deluxe Rooms – Wayanad Cottages for a Comfortable Stay',
  description:
    'Experience the perfect blend of comfort and nature with our Deluxe Rooms, designed to give you a premium stay in a serene environment. As one of the finest cottages in Wayanad, these rooms provide spacious interiors, modern amenities, and the charm of Wayanad’s natural beauty. Whether you are traveling with family, friends, or as a couple, our Wayanad Homestay Deluxe Rooms make your stay memorable.',
  offersTitle: 'What this place offers',
  offers: [
    'Fridge',
    'WIFI',
    'TV',
    'Iron',
    'Window guards',
    'Board games',
    'Portable fans',
    'Essentials',
  ],
  pricePerNight: 3500,
  priceNote: 'Rates are twin share basis.',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  cancellationPolicyTitle: 'Cancellation Policy',
  cancellationPolicy: [
    'Reservations canceled 30 days prior to the date of arrival: 50% refund',
    'Reservations canceled 15 days or less before arrival: No refund',
    'For cancellations due to natural or other reasons, the advance payment will be retained for your next visit.',
  ],
  extraPerson: {
    note: 'For Extra Person: ₹1250/-',
    rules: [
      'Children aged 10 years and above: Considered as adults.',
      'Children aged 5–10 years: Chargeable as per the applicable rates.',
    ],
  },
  bookingButtonText: 'Book Now',
  bookingButtonLink: '/contact',
};

// rooms/premiumRooms.ts
export const premiumRooms: RoomContent = {
  roomType: 'Luxury and Premium Homestays in Wayanad – Premium Rooms at Kudajadri Drizzle',
  description:
    'Experience the ultimate comfort with our premium homestays in Wayanad. Our Premium Rooms are designed for travelers who want elegance, style, and tranquility while exploring the beauty of Wayanad. Every room combines modern amenities with a warm homely feel, creating the perfect retreat for families, couples, and solo travelers.',
  offersTitle: 'What this place offers',
  offers: [
    'Fridge',
    'WIFI',
    'TV',
    'Iron',
    'Window guards',
    'Board games',
    'Portable fans',
    'Essentials',
  ],
  pricePerNight: 5000,
  priceNote: 'Rates are twin share basis.',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  cancellationPolicyTitle: 'Cancellation Policy',
  cancellationPolicy: [
    'Reservations canceled 30 days prior to the date of arrival: 50% refund',
    'Reservations canceled 15 days or less before arrival: No refund',
    'For cancellations due to natural or other reasons, the advance payment will be retained for your next visit.',
  ],
  extraPerson: {
    note: 'For Extra Person: ₹1500/-',
    rules: [
      'Children aged 10 years and above: Considered as adults.',
      'Children aged 5–10 years: Chargeable as per the applicable rates.',
    ],
  },
  bookingButtonText: 'Book Now',
  bookingButtonLink: '/contact',
};

export const roomDataMap: Record<string, RoomContent> = {
  'classic-rooms': classicRooms,
  'deluxe-heritage-rooms': deluxeHeritageRooms,
  'deluxe-rooms': deluxeRooms,
  'premium-rooms': premiumRooms,
};

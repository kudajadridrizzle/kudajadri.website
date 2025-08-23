/**
 * Type definitions for room-related data structures
 */

export interface RoomImage {
  src: string;
  alt?: string;
}

export interface RoomSession {
  title: string;
  subTitles: string[];
  image: string;
}

export interface RoomPrice {
  perNight: number;
  includes: string[];
  note?: string;
  taxesAndFeesIncluded: boolean;
}

export interface RoomAmenity {
  name: string;
  icon?: string;
  description?: string;
}

export interface RoomFAQ {
  question: string;
  answer: string;
}

export interface RoomRichContent {
  type: 'text' | 'image' | 'gallery' | 'amenities' | 'pricing' | 'cta';
  title?: string;
  content?: string;
  images?: RoomImage[];
  amenities?: RoomAmenity[];
  cta?: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

export interface RoomData {
  // Basic info
  id: string;
  roomType: string;
  slug: string;
  description: string;
  shortDescription: string;
  maxOccupancy: number;
  size: string; // e.g., "300 sq.ft"
  view: string;
  bedType: string;
  
  // Images
  images: RoomImage[];
  
  // Pricing
  pricePerNight: number;
  priceIncludes: string[];
  
  // Session data (for display)
  session: RoomSession;
  
  // Rich content blocks (for flexible content)
  richBlocks: RoomRichContent[];
  
  // Amenities
  amenities: RoomAmenity[];
  
  // Related rooms
  anotherRooms: Array<{
    roomType: string;
    description: string;
    image: string;
    navigate: string;
    price: number;
  }>;
  
  // Metadata
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
  };
  
  // Policies
  checkInTime: string;
  checkOutTime: string;
  cancellationPolicy: string[];
  extraPersonPolicy: {
    note: string;
    rules: string[];
  };
  
  // Booking
  bookingButtonText: string;
  bookingButtonLink: string;
  
  // SEO
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogType: string;
    ogImage: string;
    twitterCard: string;
  };
}

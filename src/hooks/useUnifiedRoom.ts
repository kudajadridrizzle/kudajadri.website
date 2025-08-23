import { useMemo } from 'react';

type UnifiedRoomJson = {
  id: string;
  images: {
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    imageFour: string;
    imageFive: string;
  };
  session: {
    title: string;
    subTitles: string[];
    image: string;
  };
  anotherRooms: Array<{
    roomType: string;
    description: string;
    image: string;
    navigate: string;
  }>;
  details: {
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
    extraPerson: {
      note: string;
      rules: string[];
    };
    bookingButtonText: string;
    bookingButtonLink: string;
  };
  richBlocks: any[];
};

const roomModules = import.meta.glob('../data/rooms/*.json', { eager: true }) as Record<string, { default: UnifiedRoomJson }>;

export function useUnifiedRoom(roomId?: string) {
  return useMemo(() => {
    if (!roomId) return undefined;
    const entry = Object.entries(roomModules).find(([path, mod]) => {
      return mod.default.id === roomId || path.endsWith(`${roomId}.json`);
    });
    return entry?.[1]?.default as UnifiedRoomJson | undefined;
  }, [roomId]);
}



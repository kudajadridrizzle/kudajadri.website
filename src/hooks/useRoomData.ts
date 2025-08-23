import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { RoomData } from '../types/room.types';

// Import room data
import classicRoomsData from '../data/rooms/classic-rooms.json';
import deluxeRoomsData from '../data/rooms/deluxe-rooms.json';
import deluxeHeritageRoomsData from '../data/rooms/deluxe-heritage-rooms.json';
import premiumRoomsData from '../data/rooms/premium-rooms.json';

const roomDataMap = {
  'classic-rooms': classicRoomsData as RoomData,
  'deluxe-rooms': deluxeRoomsData as RoomData,
  'deluxe-heritage-rooms': deluxeHeritageRoomsData as RoomData,
  'premium-rooms': premiumRoomsData as RoomData,
};

export const useRoomData = () => {
  const { id } = useParams<{ id: keyof typeof roomDataMap }>();
  
  const roomData = useMemo(() => {
    if (!id) return null;
    return roomDataMap[id] || null;
  }, [id]);

  return { 
    roomData, 
    roomId: id,
    isLoading: id === undefined,
    isError: id !== undefined && !roomDataMap[id as keyof typeof roomDataMap]
  };
};

export const useAllRooms = (): RoomData[] => {
  return useMemo(() => {
    return Object.values(roomDataMap);
  }, []);
};

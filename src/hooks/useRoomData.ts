import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { RoomData } from '../types/room.types';

// Import room data with type assertions
import classicRoomsData from '../data/rooms/classic-rooms.json';
import deluxeRoomsData from '../data/rooms/deluxe-rooms.json';
import deluxeHeritageRoomsData from '../data/rooms/deluxe-heritage-rooms.json';
import premiumRoomsData from '../data/rooms/premium-rooms.json';

// Helper function to safely cast the imported JSON data to RoomData
const createRoomData = (data: unknown): RoomData => {
  return data as RoomData;
};

// Create typed room data objects
const roomDataMap = {
  'classic-rooms': createRoomData(classicRoomsData),
  'deluxe-rooms': createRoomData(deluxeRoomsData),
  'deluxe-heritage-rooms': createRoomData(deluxeHeritageRoomsData),
  'premium-rooms': createRoomData(premiumRoomsData),
} as const;

type RoomId = keyof typeof roomDataMap;

export const useRoomData = () => {
  const { id } = useParams<{ id: RoomId }>();
  
  const roomData = useMemo(() => {
    if (!id) return null;
    return roomDataMap[id] || null;
  }, [id]);

  return { 
    roomData, 
    roomId: id,
    isLoading: id === undefined,
    isError: id !== undefined && !roomDataMap[id as RoomId]
  };
};

export const useAllRooms = (): RoomData[] => {
  return Object.values(roomDataMap) as RoomData[];
};

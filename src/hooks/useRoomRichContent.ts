import { useMemo } from 'react';
import data from '../data/roomRichContent.json';

export type RichBlock =
  | { type: 'h1' | 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'image'; src: string; alt?: string; caption?: string; layout?: 'full' | 'left' | 'right' };

export function useRoomRichContent(roomId?: string) {
  return useMemo<RichBlock[] | null>(() => {
    if (!roomId) return null;
    const entry = (data as Record<string, RichBlock[]>)[roomId];
    return entry && entry.length ? entry : null;
  }, [roomId]);
}

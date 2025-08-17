import { useMemo } from 'react';
import data from '../data/cardsSection.json';
import type { CardData } from '../components/shared/CardsSection';

export interface CardsSectionContent {
  title: string;
  subtitle: string;
  subParagraph?: string;
  cards: CardData[];
}

export type CardsPageKey = keyof typeof data;

export function useCardsSection(page: CardsPageKey): CardsSectionContent | null {
  // useMemo to avoid unnecessary recalculations
  return useMemo(() => {
    const entry = (data as Record<string, CardsSectionContent>)[page];
    if (!entry || !entry.cards?.length) return null;
    return entry;
  }, [page]);
}

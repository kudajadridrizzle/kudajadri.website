import { useMemo } from 'react';
import data from '../data/contentSection.json';

export interface ContentItem {
  image: string;
  title?: string;
  paragraph: string;
  imageAlt?: string;
}

export interface ContentSectionData {
  title?: string;
  items: ContentItem[];
}

export type ContentPageKey = keyof typeof data;

export function useContentSection(page: ContentPageKey): ContentSectionData | null {
  return useMemo(() => {
    const entry = (data as Record<string, ContentSectionData>)[page];
    if (!entry || !entry.items?.length) return null;
    return entry;
  }, [page]);
}

// Wayanad Attraction Images Management
export interface AttractionImage {
  id: string;
  title: string;
  imagePath: string;
  altText: string;
  fallbackImage?: string;
}

export const wayanadAttractionImages: AttractionImage[] = [
  {
    id: 'tholpetty-wildlife-sanctuary',
    title: 'Wayanad Tholpetty Wildlife Sanctuary',
    imagePath: '/images/wayanad/tholpetty-wildlife-sanctuary.jpg',
    altText: 'Tholpetty Wildlife Sanctuary in Wayanad with lush greenery and wildlife',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'muthanga-wildlife-sanctuary',
    title: 'Wayanad Muthanga Wildlife Sanctuary',
    imagePath: '/images/wayanad/muthanga-wildlife-sanctuary.jpg',
    altText: 'Muthanga Wildlife Sanctuary vast forest area in Wayanad',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'karapuzha-dam',
    title: 'Wayanad Karapuzha Dam',
    imagePath: '/images/wayanad/karapuzha-dam.jpg',
    altText: 'Karapuzha Dam surrounded by wooded hills in Wayanad',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'kuruva-island',
    title: 'Wayanad Kuruva Island',
    imagePath: '/images/wayanad/kuruva-island.jpg',
    altText: 'Kuruva Island peaceful picnic spot on Kabini River',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'pookkode-lake',
    title: 'Wayanad Pookkode Lake',
    imagePath: '/images/wayanad/pookkode-lake.jpg',
    altText: 'Pookkode Lake natural freshwater lake in Vythiri',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'soochipara-waterfalls',
    title: 'Wayanad Soochipara Waterfalls',
    imagePath: '/images/wayanad/soochipara-waterfalls.jpg',
    altText: 'Soochipara Waterfalls three-tiered waterfall in Vellarimala',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'banasurasagar-dam',
    title: 'Wayanad Banasurasagar Dam',
    imagePath: '/images/wayanad/banasurasagar-dam.jpg',
    altText: 'Banasurasagar Dam largest earth dam in India',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'edakkal-caves',
    title: 'Wayanad Edakkal Caves',
    imagePath: '/images/wayanad/edakkal-caves.jpg',
    altText: 'Edakkal Caves Stone Age carvings on Ambukutty Hill',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'thirunelli-temple',
    title: 'Wayanad Thirunelli Temple',
    imagePath: '/images/wayanad/thirunelli-temple.jpg',
    altText: 'Thirunelli Temple dedicated to Lord Maha Vishnu',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'chembra-peak',
    title: 'Wayanad Chembra Peak',
    imagePath: '/images/wayanad/chembra-peak.jpg',
    altText: 'Chembra Peak highest peak in Wayanad at 2,100 meters',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'chain-tree',
    title: 'Wayanad Chain Tree',
    imagePath: '/images/wayanad/chain-tree.jpg',
    altText: 'Chain Tree large Ficus tree with local legend',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'neelimala-view-point',
    title: 'Wayanad Neelimala View Point',
    imagePath: '/images/wayanad/neelimala-view-point.jpg',
    altText: 'Neelimala View Point stunning views of Meenmutty Waterfalls',
    fallbackImage: '/images/wayanad/placeholder.svg'
  },
  {
    id: 'lakkidi-view-point',
    title: 'Wayanad Lakkidi View Point',
    imagePath: '/images/wayanad/lakkidi-view-point.jpg',
    altText: 'Lakkidi View Point panoramic views of mist-covered hills',
    fallbackImage: '/images/wayanad/placeholder.svg'
  }
];

// Function to get image by attraction title
export const getAttractionImage = (title: string): AttractionImage | undefined => {
  return wayanadAttractionImages.find(img => img.title === title);
};

// Function to get image by ID
export const getAttractionImageById = (id: string): AttractionImage | undefined => {
  return wayanadAttractionImages.find(img => img.id === id);
};

// Function to update image path
export const updateAttractionImage = (id: string, newImagePath: string): void => {
  const imageIndex = wayanadAttractionImages.findIndex(img => img.id === id);
  if (imageIndex !== -1) {
    wayanadAttractionImages[imageIndex].imagePath = newImagePath;
  }
};

// Function to get all image paths for CMS management
export const getAllImagePaths = (): string[] => {
  return wayanadAttractionImages.map(img => img.imagePath);
}; 
import React from 'react';
import { RoomRichContent } from '../../../types/room.types';

interface RichRoomContentProps {
  richBlocks: RoomRichContent[];
}

export const RichRoomContent: React.FC<RichRoomContentProps> = ({ richBlocks }) => {
  if (!richBlocks || richBlocks.length === 0) {
    return null;
  }

  const renderBlock = (block: RoomRichContent, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={index} className="prose max-w-none my-8">
            {block.title && <h2 className="text-2xl font-bold text-gray-900 mb-4">{block.title}</h2>}
            {block.content && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
          </div>
        );

      case 'image':
        return (
          <div key={index} className="my-8">
            {block.images?.map((image, imgIndex) => (
              <div key={imgIndex} className="rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt || `Room image ${imgIndex + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        );

      case 'gallery':
        if (!block.images || block.images.length === 0) return null;
        
        return (
          <div key={index} className="my-12">
            {block.title && <h3 className="text-xl font-semibold text-gray-900 mb-6">{block.title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {block.images.map((image, imgIndex) => (
                <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt || `Gallery image ${imgIndex + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'amenities':
        if (!block.amenities || block.amenities.length === 0) return null;
        
        return (
          <div key={index} className="my-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{block.title || 'Amenities'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {block.amenities.map((amenity, amenityIndex) => (
                <div key={amenityIndex} className="flex items-start">
                  {amenity.icon && (
                    <div className="flex-shrink-0 h-6 w-6 text-primary mr-3 mt-0.5">
                      <i className={amenity.icon} />
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{amenity.name}</h4>
                    {amenity.description && (
                      <p className="mt-1 text-gray-600">{amenity.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div key={index} className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing Details</h3>
            {block.content && (
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: block.content }} />
            )}
          </div>
        );

      case 'cta':
        if (!block.cta) return null;
        
        return (
          <div key={index} className="text-center my-12">
            <a
              href={block.cta.link}
              className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                block.cta.variant === 'outline'
                  ? 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  : ''
              }`}
            >
              {block.cta.text}
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {richBlocks.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </section>
  );
};

export default RichRoomContent;

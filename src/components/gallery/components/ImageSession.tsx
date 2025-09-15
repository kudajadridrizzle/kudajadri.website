// src/components/gallery/ImageSession.tsx

export const ImageSession = () => {
  // Import all images from the parent assets directory
  const images = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', { eager: true });

  // Convert imported modules into URLs
  const imagePaths = Object.values(images).map((mod: any) => mod.default);

  // Sort by filename so 1, 2, 3... are in the right order
  const sortedImages = imagePaths.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );

  if (sortedImages.length === 0) {
    return (
      <section className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <p className="text-center text-gray-500">No images found in gallery.</p>
      </section>
    );
  }

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-12">
      {/* Responsive Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {sortedImages.map((src, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid relative overflow-hidden rounded-2xl group"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Fix last-row alignment by centering orphan images */}
      <style>
        {`
          @media (min-width: 1024px) {
            .columns-3 > div:last-child {
              margin-left: auto;
              margin-right: auto;
              display: block;
              max-width: 80%;
            }
          }
        `}
      </style>
    </section>
  );
};

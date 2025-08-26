export const ImageSession = () => {
  // Add as many images as you want inside /public/images
  const images = [
    '/images/1 (1).jpg',
    '/images/1 (2).jpg',
    '/images/1 (3).jpg',
    '/images/1 (4).jpg',
    '/images/1 (5).jpg',
    '/images/1 (6).jpg',
    '/images/1 (7).jpg',
    '/images/1 (8).jpg',
    '/images/1 (9).jpg',
    '/images/1 (10).jpg',
    '/images/1 (11).jpg',
    '/images/1 (12).jpg',
    '/images/1 (13).jpg',
    '/images/1 (14).jpg',
    '/images/1 (15).jpg',
    '/images/1 (16).jpg',
    '/images/1 (17).jpg',
    '/images/1 (18).jpg',
    '/images/1 (19).jpg',
    '/images/1 (20).jpg',
    '/images/1 (48).jpg',
    '/images/1 (49).jpg',
    '/images/1 (50).jpg',
    
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-12">
      {/* Responsive Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map((src, idx) => (
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

// Auto-import all mobile gallery images from the parent assets directory
const mobileImages = import.meta.glob('../../assets/galleryMobile*.{jpg,jpeg,png,webp}', { eager: true });

export const ResponsiveImageSession = () => {
  // Convert imported modules into image URLs
  const imagePaths = Object.values(mobileImages).map((mod: any) => mod.default);

  // Sort by filename (so galleryMobile1, galleryMobile2, etc. are in order)
  const sortedImages = imagePaths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div className="sm:hidden px-4 pt-12 flex flex-col gap-4">
      {sortedImages.map((src, idx) => (
        <img key={idx} src={src} alt={`Mobile Gallery ${idx + 1}`} loading="lazy" className="w-full h-auto rounded-2xl" />
      ))}
    </div>
  );
};

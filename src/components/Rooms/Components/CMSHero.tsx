import { Header } from '../../Home/components/Header';

interface CMSHeroProps {
  backgroundImage: string;
  title: string;
  overlayOpacity?: number;
}

const CMSHero = ({
  backgroundImage,
  title,
  overlayOpacity = 0.6,
}: CMSHeroProps) => {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>
      {/* Content */}
      <div className="relative z-10 h-full">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-full flex flex-col items-center justify-center mobile:text-5xl px-4">
          <h2 className="text-center">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CMSHero;

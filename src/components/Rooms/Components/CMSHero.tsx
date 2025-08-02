import { Header } from "../../Home/components/Header";

interface CMSHeroProps {
  backgroundImage: string; // Already processed image URL
  title: string;
  subtitle: string;
  overlayOpacity: number;
}

const CMSHero = ({ backgroundImage, title, subtitle, overlayOpacity }: CMSHeroProps) => {
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
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <h1 className="text-center">{title}</h1>
          <h1 className="mb-[120px]">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default CMSHero;

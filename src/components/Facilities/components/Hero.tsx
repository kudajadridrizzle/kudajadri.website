import { Header } from '../../Home/components/Header';

interface HeroProps {
  title: string;
  description: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <div className="relative h-screen bg-[url('/images/pool34.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] h-[100vh] px-1 flex flex-col items-center justify-end gap-2">
          <h2 className="text-center font-staylista mobile:text-[48px] sm:text-[72px]">
            {title}
          </h2>
          <div className="text-[#CACACA] text-xl mb-[120px] font-albertSans flex flex-col text-center">
            {description.split('\n').map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { Header } from "../../Home/components/Header";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/wayanadImg.jpg')] bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <h1 className="text-center mb-[114px]">Wayanad</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

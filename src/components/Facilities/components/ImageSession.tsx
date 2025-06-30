import imageOne from "../assets/image1.jpg";
import imageTwo from "../assets/image2.jpg";
import imageThree from "../assets/image3.jpg";
import imageMobile from "../assets/mobileImage.jpg";

const ImageSession = () => {
  return (
    <div className="flex-1">
      <div className="hidden sm:flex flex-col gap-4 grow shrink-0 basis-0 items-start self-stretch">
        <img src={imageOne} className="rounded-2xl" />
        <div className="flex items-center grow shrink-0 basis-0 gap-4 self-stretch">
          <img src={imageTwo} className="rounded-2xl w-1/2" />
          <img src={imageThree} className="rounded-2xl w-1/2" />
        </div>
      </div>
      <div className="flex sm:hidden">
        <img src={imageMobile} className="rounded-2xl" />
      </div>
    </div>
  );
};

export default ImageSession;

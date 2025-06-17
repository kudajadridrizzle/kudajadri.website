import img1 from "/src/assets/imageTwo.jpg";
import img2 from "/src/assets/imageOne.jpg";
import img3 from "/src/assets/aboutLegacyImage.jpg"
const GallarySession = () => {
  return (
    <>
      <div className="flex sm:flex mobile:hidden">
        <div className="flex-1">
          <img src={img1} className="h-full" alt="" />
        </div>
        <div className="flex-1">
          <img src={img3} alt="" />
        </div>
        <div className="flex-1">
          <img src={img2} alt="" />
        </div>
      </div>
      <img src={img2} className="sm:hidden"/>
    </>
  );
}

export default GallarySession

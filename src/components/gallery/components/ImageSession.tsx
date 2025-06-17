import imageOne from '../assets/Gallery1.jpg'
import imageTwo from '../assets/gallery2.jpg'
import imageThree from '../assets/gallery3.jpg'
import imagefour from '../assets/gallery4.jpg'
import imagefive from '../assets/gallery5.jpg'
import imagesix from '../assets/gallery6.jpg'
import imageseven from '../assets/gallery7.jpg'
export const ImageSession = () => {
  return (
    <div className="pt-14 flex flex-col gap-4 items-center mobile:hidden sm:flex">
        <img src={imageOne} alt="" />
      <div className='flex gap-4'>
        <img src={imageTwo} alt="" />
        <img src={imageThree} alt="" />
        <img src={imagefour} alt="" />
      </div>
      <img src={imagefive} alt="" />
      <div className='flex gap-4'>
        <img src={imagesix} alt="" />
        <img src={imageseven} alt="" />
      </div>
    </div>
  )
}

import imageOne from '../assets/galleryMobile1.jpg'
import imageTwo from '../assets/galleryMobile2.jpg'
import imageThree from '../assets/galleryMobile3.jpg'
import imageFour from '../assets/galleryMobile4.jpg'
import imageFive from '../assets/galleryMobile5.jpg'
import imageSix from '../assets/galleryMobile6.jpg'
import imageSeven from '../assets/galleryMobile7.jpg'

export const ResponsiveImageSession = () => {
    return (
        <div className="sm:hidden px-4 pt-12 flex flex-col gap-4">
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt=""/>
            <img src={imageThree} alt=""/>
            <img src={imageFour} alt=""/>
            <img src={imageFive} alt=""/>
            <img src={imageSix} alt=""/>
            <img src={imageSeven} alt=""/>
        </div>
    )
}


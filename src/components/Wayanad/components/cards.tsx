 import Card from "./card";
import Frame from "./../../../assets/Frame 208.jpg"
import Frame1 from "./../../../assets/Frame 208 (1).jpg"
import Frame2 from "./../../../assets/Frame 208 (2).jpg"
import Data from '../Data/data.json'

export const Cards = () => {
    return (
        <div className="flex flex-col items-center gap-[64px] bg-white sm:px-[12%]  large:px-[18%] mobile:py-4 sm:py-[64px]">
          {Data.map((item, index) => (
            <Card
              key={index}
              image={index === 0 ? Frame : index === 1 ? Frame1 : Frame2}
              title={item.title}
              description={item.description}
              index={'0' + (index + 1)}
            />
          ))}
        </div>
    );
}
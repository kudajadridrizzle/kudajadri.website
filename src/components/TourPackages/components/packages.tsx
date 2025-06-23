import { PackageCard } from "./package";
import data from "../Data/data.json";
import img1 from "../../../assets/Image (1).jpg"
import img2 from "../../../assets/Image (2).jpg"
import img3 from "../../../assets/Image (3).jpg"

export const Packages = () => {
    return (
        <div className="sm:py-32 sm:px-[12%] mobile:flex-col px-4 py-14 large:px-[18%] flex sm:flex-row justify-between gap-[24px]">
            {data.packages.map((pkg,index) => (
                <PackageCard key={index} {...pkg} image={index === 0 ? img1 : index === 1 ? img2 : img3} />
            ))}
        </div>
    );
};
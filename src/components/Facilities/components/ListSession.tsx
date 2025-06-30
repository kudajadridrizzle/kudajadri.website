const ROOMS = [
  "Bedrooms",
  "Bathrooms",
  "Verandahs",
  "Balconies",
  "Paddy View",
  "Heritage Style",
  "Shared Facilities",
  "Kitchens",
];
const AMENITIES = [
  "Bedrooms",
  "Bathrooms",
  "Verandahs",
  "Balconies",
  "Paddy View",
  "Heritage Style",
  "Shared Facilities",
  "Kitchens",
];
const DINING = ["Kerala Cuisine", " Home Meals"];
const EXPERIENCES = ["Nature Walks", " Wildlife Spotting ", "Local Hosts"];
const SERVICES = ["Housekeeping", "Laundry", "Pick-up", "Drop-off"];
const SUSTAINABILITY = [" Composting", " Organic Garden"];

const ListSession = () => {
  return (
    <div className="flex mobile:p-4 mx-4 sm:p-20 flex-col sm:flex-row flex-wrap gap-4 justify-between items-start self-stretch bg-white">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-2xl font-ivy">ROOMS</h1>
        <ul className="list-disc pl-6">
          {ROOMS.map((room) => (
            <li className="[&::marker]:text-xs text-2xl leading-[43.2px]">{room}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-2xl font-ivy">AMENITIES</h1>
        <ul className="list-disc  pl-6">
          {AMENITIES.map((room) => (
            <li className="[&::marker]:text-xs text-2xl leading-[43.2px]">{room}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start gap-11">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">DINING</h1>
          <ul className="list-disc pl-6">
            {DINING.map((room) => (
              <li className="[&::marker]:text-xs text-2xl leading-[43.2px]">{room}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">EXPERIENCES</h1>
          <ul className="list-disc  pl-6">
            {EXPERIENCES.map((room) => (
              <li className="[&::marker]:text-xs text-2xl leading-[43.2px]">{room}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-11">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">SERVICES</h1>
          <ul className="list-disc pl-6">
            {SERVICES.map((room) => (
              <li className="[&::marker]:text-xs text-2xl leading-[43.2px]">{room}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">SUSTAINABILITY</h1>
          <ul className="list-disc pl-6 ">
            {SUSTAINABILITY.map((room) => (
              <li className="[&::marker]:text-xs text-2xl leading-[43.2px]">{room}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListSession;

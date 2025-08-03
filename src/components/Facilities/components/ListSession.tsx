const ROOMS = [
  'Specious Rooms',
  'Shared Rooms',
  'Heritage Rooms',
  'Kitchen Access',
];

const AMENITIES = [
  'Hot Water',
  'Power Backup',
  'Free Wifi',
  'Varadaahs',
  'Private Parking',
  'Indoor Games',
  'CCTV Security',
  'Rainwater Supply',
  'Common Pool',
  'Campfire Setups',
  'Kids Play Area',
  'Organic Garden',
  'Nature Walks',
  'House Keeping',
  'Laundry',
  'Pick-up',
  'Drop-off',
  'Local Guidence',
  'Tourist Access',
];

const DINING = ['Kerala Cuisine', 'Home Meals'];

const EXPERIENCES = ['Nature Walks', 'Wildlife Spotting', 'Local Hosts'];

const SERVICES = ['Housekeeping', 'Laundry', 'Pick-up', 'Drop-off'];

const SUSTAINABILITY = ['Composting', 'Organic Garden'];

const ListSession = () => {
  return (
    <div className="flex mobile:p-4 mx-4 sm:p-20 flex-col sm:flex-row flex-wrap gap-4 justify-between items-start self-stretch bg-white">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-2xl font-ivy">ROOMS</h1>
        <ul className="list-disc pl-6">
          {ROOMS.map(room => (
            <li
              className="[&::marker]:text-xs text-2xl leading-[43.2px]"
              key={room}
            >
              {room}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-2xl font-ivy">AMENITIES</h1>
        <ul className="list-disc pl-6">
          {AMENITIES.map(item => (
            <li
              className="[&::marker]:text-xs text-2xl leading-[43.2px]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start gap-11">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">DINING</h1>
          <ul className="list-disc pl-6">
            {DINING.map(item => (
              <li
                className="[&::marker]:text-xs text-2xl leading-[43.2px]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">EXPERIENCES</h1>
          <ul className="list-disc pl-6">
            {EXPERIENCES.map(item => (
              <li
                className="[&::marker]:text-xs text-2xl leading-[43.2px]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-11">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">SERVICES</h1>
          <ul className="list-disc pl-6">
            {SERVICES.map(item => (
              <li
                className="[&::marker]:text-xs text-2xl leading-[43.2px]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-ivy">SUSTAINABILITY</h1>
          <ul className="list-disc pl-6">
            {SUSTAINABILITY.map(item => (
              <li
                className="[&::marker]:text-xs text-2xl leading-[43.2px]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListSession;

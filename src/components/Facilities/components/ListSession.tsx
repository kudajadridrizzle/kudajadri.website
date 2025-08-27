const ROOMS = [
  'Spacious Rooms',
  'Shared Rooms',
  'Heritage Rooms',
  'Kitchen Access',
];

const AMENITIES = [
  'Hot Water',
  'Power Backup',
  'Free Wifi',
  'Verandahs',
  'Private Parking',
  'Indoor Games',
  'CCTV Security',
  'Rainwater Supply',
  'Common Pool',
  'Campfire Setup',
  'Kids’ Play Area',
  'Organic Garden',
  'Nature Walks',
  'Housekeeping',
  'Laundry',
  'Pick-up Service',
  'Drop-off Service',
  'Local Guidance',
  'Tourist Access',
];

const DINING = ['Kerala Cuisine', 'Home Meals'];

const EXPERIENCES = ['Nature Walks', 'Wildlife Spotting', 'Local Hosts'];

const SERVICES = ['Housekeeping', 'Laundry', 'Pick-up Service', 'Drop-off Service'];

const SUSTAINABILITY = ['Composting', 'Organic Garden'];

const ListSession = () => {
  return (
    <div className="flex mobile:p-4 mx-4 sm:p-20 flex-col sm:flex-row flex-wrap gap-4 justify-between items-start self-stretch bg-white">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-2xl font-ivy">Room Options</h2>
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
        <h2 className="text-2xl font-ivy">Facilities & Amenities</h2>
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
          <h2 className="text-2xl font-ivy">Dining Options</h2>
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
          <h2 className="text-2xl font-ivy">Experiences & Activities</h2>
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
          <h2 className="text-2xl font-ivy">Guest Services</h2>
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
          <h2 className="text-2xl font-ivy">Sustainable Practices</h2>
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

import { Mountain, Users, Landmark, Heart } from "lucide-react";

const packages = [
  {
    title: "Nature & Adventure Tours",
    icon: Mountain,
    desc1:
      "Experience the thrill of Wayanad’s natural beauty with our Nature & Adventure Tours. These tours take you through dense forests, rolling hills, and picturesque waterfalls, offering a refreshing escape from city life.",
    desc2:
      "Trek along scenic trails and enjoy the region’s wildlife on guided safaris. Whether you’re an adventure enthusiast or simply love being close to nature, these tours provide unforgettable experiences and breathtaking views at every turn.",
  },
  {
    title: "Family-Friendly Tours",
    icon: Users,
    desc1:
      "Our Family-Friendly Tours are crafted to keep every member of the family entertained. Explore scenic viewpoints, visit local attractions, and enjoy a variety of kid-friendly activities that make the trip fun for everyone.",
    desc2:
      "Stay in comfortable Wayanad accommodations that provide a relaxing environment after a day of exploration. These tours ensure that families can bond, relax, and create lasting memories together.",
  },
  {
    title: "Heritage & Cultural Tours",
    icon: Landmark,
    desc1:
      "Discover the rich history and culture of Wayanad with our tours. Visit ancient temples, historic landmarks, and vibrant local villages to get a deeper understanding of the region’s traditions.",
    desc2:
      "Learn about the local way of life while staying in authentic Wayanad homestays, where hospitality and heritage come together. These tours are perfect for travelers who appreciate history, art, and cultural experiences.",
  },
  {
    title: "Romantic Getaways",
    icon: Heart,
    desc1:
      "Our Romantic Getaway Packages are designed for couples seeking peace and intimacy amidst Wayanad’s natural charm. Enjoy serene locations, cozy accommodations, and scenic spots perfect for quiet moments together.",
    desc2:
      "Take leisurely walks, watch stunning sunsets, or relax in the tranquil surroundings of your stay. These packages ensure couples can unwind, reconnect, and create beautiful memories in a romantic setting.",
  },
];

const TravelPackagesInfo = () => {
  return (
    <section className="w-full px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%] py-16 sm:py-24 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-ivy text-center text-black mb-12">
        Wayanad Travel Packages for Every Explorer
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {packages.map(({ title, icon: Icon, desc1, desc2 }, i) => (
          <article
            key={i}
            className="flex flex-col gap-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-100 text-green-700">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl sm:text-2xl font-ivy text-black">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed">
              {desc1}
            </p>
            <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed">
              {desc2}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TravelPackagesInfo;

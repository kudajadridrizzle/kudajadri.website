interface SEODataProps {
  roomType: string;
}

const SEOData = ({ roomType }: SEODataProps) => {
  const isClassicRoom = roomType.toLowerCase().includes('classic');
  const isPremiumRoom = roomType.toLowerCase().includes('premium');
  const isHeritageRoom = roomType.toLowerCase().includes('heritage');
  const isDeluxeRoom = roomType.toLowerCase().includes('deluxe');

  return (
    <div className="w-full bg-white sm:py-32 mobile:py-14">
      <div className="sm:px-[12%] mobile:px-4 large:px-[18%] w-full">
        <div className="mb-12">
          {isPremiumRoom ? (
            <>
              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Luxury Homestays in Wayanad with Scenic Views
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our premium homestays in Wayanad are nestled in serene locations
                surrounded by nature. Wake up to the misty hills, breathe in
                fresh mountain air, and enjoy a sense of calm that only Wayanad
                can offer. These rooms are perfect for those who want a
                luxurious experience while staying close to nature.{' '}
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Highlights of Luxury Stays
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2">
                <li>Panoramic views of lush valleys and plantations</li>
                <li>Peaceful environment for relaxation and rejuvenation</li>
                <li>Tasteful décor blending modern and traditional styles</li>
                <li>Peaceful, private, and secure </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Personalized Services at Our Luxury Homestays in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                At our premium Wayanad homestays, every guest is treated with
                care and attention. Our team ensures that your stay is seamless,
                providing personalized services from check-in to check-out.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Services You Can Expect
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2">
                <li>Daily housekeeping and room service</li>
                <li>Assistance with local sightseeing and excursions</li>
                <li>Home-cooked meals highlighting local flavors</li>
                <li>Travel guidance for Wayanad attractions</li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Explore Wayanad While Staying in Premium Rooms
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Staying in our luxury homestays in Wayanad places you close to
                some of the region's most popular attractions. From waterfalls
                to wildlife sanctuaries, you can explore everything at your own
                pace and return to the comfort of your premium room.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Nearby Attractions
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2">
                <li>Edakkal Caves – Ancient rock carvings and history</li>
                <li>Pookode Lake – Boating and scenic walks</li>
                <li>
                  Banasura Sagar Dam – Stunning landscapes and leisure spots
                </li>
                <li>
                  Wayanad Wildlife Sanctuary – Safari and nature experiences
                </li>
                <li>Chembra Peak – Trekking and panoramic views</li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Comfort and Elegance in Every Room
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our premium rooms in Wayanad are designed to provide a balance
                of luxury and homely comfort. Spacious layouts, stylish
                furniture, and ambient lighting make every room relaxing.
                Whether you want to read, rest, or simply enjoy the view, these
                rooms create the perfect environment.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Room Amenities Include
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2">
                <li>King-size or queen beds with premium linens</li>
                <li>Air-conditioning for added comfort</li>
                <li>Flat-screen TVs and Wi-Fi connectivity</li>
                <li>Private seating areas and balconies</li>
                <li>Luxury toiletries and essentials</li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Ideal for Couples, Families, and Solo Travelers
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Whether you are traveling with family, a partner, or alone, our
                luxury homestays in Wayanad cater to everyone. Couples enjoy
                privacy and romance, families get spacious rooms and safety, and
                solo travelers find a peaceful environment for relaxation.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Who Should Book Premium Rooms?
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2 mb-12">
                <li>Couples seeking a romantic getaway</li>
                <li>Families wanting comfort and convenience</li>
                <li>Solo travelers looking for a peaceful retreat</li>
                <li>Nature lovers wanting scenic surroundings</li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Authentic Local Hospitality with Premium Comfort
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                A stay at our premium homestays in Wayanad is more than just a
                room—it's an experience. Our hosts ensure you feel at home,
                offering local cuisine, insights into the region, and
                personalized care. Enjoy the blend of modern luxury and
                traditional Kerala hospitality in every aspect of your stay.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Guest Experiences Include
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2 mb-12">
                <li>Home-cooked Kerala meals with fresh ingredients</li>
                <li>Guidance for offbeat local attractions</li>
                <li>
                  Opportunities to engage with local culture and traditions
                </li>
                <li>Personalized attention for a stress-free stay</li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Plan Your Stay in Our Luxury Homestays in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Booking our premium rooms in Wayanad ensures a memorable and
                comfortable stay. From scenic views to personalized services,
                every aspect of your experience is thoughtfully designed. Spend
                your days exploring Wayanad's beauty and your evenings in the
                cozy ambiance of your premium room.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                What Makes Our Luxury Homestays Special
              </h3>
              <ul className="list-disc pl-6 text-secondary font-albertSans text-lg leading-relaxed space-y-2 mb-12">
                <li>Prime locations amidst Wayanad's natural beauty</li>
                <li>Elegant interiors with modern amenities</li>
                <li>Personalized services and warm hospitality</li>
                <li>Peaceful, private, and secure environment</li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Book Your Premium Homestay in Wayanad Today
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                If you're searching for luxury homestays in Wayanad that combine
                elegance, comfort, and authenticity, look no further. Our
                premium homestays in Wayanad offer the perfect base for your
                adventures, ensuring a relaxing and memorable stay. Book your
                premium room today and experience Wayanad the way it's meant to
                be enjoyed—peaceful, scenic, and luxurious.
              </p>
            </>
          ) : isHeritageRoom ? (
            <>
              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Heritage Homestays in Wayanad with Authentic Charm
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                A stay in our Deluxe Heritage Rooms is like stepping back in
                time while enjoying all the comforts of today. The
                heritage-inspired décor, antique furniture, and locally crafted
                accents create a unique ambiance. Guests often appreciate the
                combination of tradition and luxury, making these rooms one of
                the top heritage homestays in Wayanad.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Unique Features of Heritage Rooms
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  High ceilings with traditional wooden beams
                </li>
                <li className="text-secondary font-albertSans">
                  Vintage décor and art pieces reflecting local culture
                </li>
                <li className="text-secondary font-albertSans">
                  Peaceful and scenic surroundings
                </li>
                <li className="text-secondary font-albertSans">
                  Natural ventilation and sunlight for a refreshing stay
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Personalized Services in Our Traditional Homestay in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                We ensure that your stay in our traditional homestay in Wayanad
                is comfortable and memorable. Our staff provides personalized
                attention, helping with sightseeing, meals, and any special
                requests to make your experience seamless.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Guest Services Include
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Home-cooked Kerala meals on request
                </li>
                <li className="text-secondary font-albertSans">
                  Assistance with local travel and excursions
                </li>
                <li className="text-secondary font-albertSans">
                  Housekeeping and room service
                </li>
                <li className="text-secondary font-albertSans">
                  Guidance on cultural and heritage tours
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Explore Wayanad While Staying in Heritage Rooms
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Staying at our heritage homestay in Wayanad puts you close to
                nature and cultural attractions. You can enjoy the serenity of
                the hills while planning visits to famous landmarks, waterfalls,
                and plantations.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Nearby Attractions
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Edakkal Caves – Ancient rock carvings and history
                </li>
                <li className="text-secondary font-albertSans">
                  Banasura Sagar Dam – Scenic views and leisure activities
                </li>
                <li className="text-secondary font-albertSans">
                  Pookode Lake – Boating and nature walks
                </li>
                <li className="text-secondary font-albertSans">
                  Wayanad Wildlife Sanctuary – Wildlife spotting
                </li>
                <li className="text-secondary font-albertSans">
                  Chembra Peak – Trekking and panoramic vistas
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Comfort and Tradition Combined
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our Deluxe Heritage Rooms are designed to offer both luxury and
                the warmth of tradition. Spacious layouts, traditional woodwork,
                and thoughtful amenities create a memorable stay. Guests enjoy
                the blend of modern convenience and cultural authenticity,
                making our Wayanad homestay a preferred choice among travelers
                seeking heritage homestays in Wayanad.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Room Amenities Include
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Comfortable beds with premium linens
                </li>
                <li className="text-secondary font-albertSans">
                  Air-conditioning for added comfort
                </li>
                <li className="text-secondary font-albertSans">
                  Private seating areas and balconies
                </li>
                <li className="text-secondary font-albertSans">
                  Modern bathrooms with hot water and toiletries
                </li>
                <li className="text-secondary font-albertSans">
                  Free Wi-Fi and entertainment options
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Ideal for Families, Couples, and Cultural Travelers
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our Deluxe Heritage Rooms are suitable for a variety of
                travelers. Families appreciate the space and safety, couples
                enjoy the romantic and peaceful atmosphere, and cultural
                enthusiasts find inspiration in the traditional décor and
                heritage vibe.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Who Should Book Heritage Rooms?
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Couples seeking a romantic getaway
                </li>
                <li className="text-secondary font-albertSans">
                  Families wanting a cultural and cozy stay
                </li>
                <li className="text-secondary font-albertSans">
                  Solo travelers exploring Wayanad's heritage
                </li>
                <li className="text-secondary font-albertSans">
                  Nature and culture lovers looking for authentic experiences
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Authentic Kerala Hospitality in a Traditional Homestay in
                Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                One of the biggest draws of staying in our traditional homestay
                in Wayanad is the hospitality. From warm welcomes to
                personalized care, our team ensures every guest feels special.
                Guests can enjoy home-cooked meals, guidance for local
                attractions, and tips to explore Wayanad's hidden gems.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                What Makes Our Heritage Homestay Special
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Personalized guest services for a comfortable stay
                </li>
                <li className="text-secondary font-albertSans">
                  Home-style Kerala meals with fresh ingredients
                </li>
                <li className="text-secondary font-albertSans">
                  Warm and welcoming hosts sharing local knowledge
                </li>
                <li className="text-secondary font-albertSans">
                  Peaceful, scenic surroundings away from crowds
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Plan Your Stay in Our Heritage Homestay in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Booking our Deluxe Heritage Rooms guarantees an unforgettable
                experience of Wayanad. With the perfect combination of culture,
                comfort, and scenic beauty, these rooms are ideal for those
                looking to enjoy both heritage and modern amenities.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Key Advantages of Staying in Deluxe Heritage Rooms
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Prime location with easy access to attractions
                </li>
                <li className="text-secondary font-albertSans">
                  Authentic traditional interiors and décor
                </li>
                <li className="text-secondary font-albertSans">
                  Modern facilities for a comfortable stay
                </li>
                <li className="text-secondary font-albertSans">
                  Personal care and attention from hosts
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Book Your Heritage Homestay in Wayanad Today
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                If you're looking for a heritage homestay in Wayanad or a
                traditional homestay in Wayanad, our Deluxe Heritage Rooms offer
                the perfect solution. Enjoy cultural authenticity, modern
                comfort, and scenic surroundings while exploring Wayanad.
                Reserve your stay today and experience Wayanad in style and
                tradition.
              </p>
            </>
          ) : isDeluxeRoom ? (
            <>
              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Why Choose Our Cottages in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Staying in our cottages in Wayanad gives you more than just a
                room; it's an experience of living close to nature. Unlike
                regular hotels, our cottages offer privacy, serenity, and a
                homely environment.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Benefits of Choosing Our Wayanad Cottages
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Peaceful surroundings for relaxation
                </li>
                <li className="text-secondary font-albertSans">
                  Perfect for couples, families, and solo travelers
                </li>
                <li className="text-secondary font-albertSans">
                  Access to scenic gardens and nature trails
                </li>
                <li className="text-secondary font-albertSans">
                  Personalized hospitality for every guest
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Modern Comfort in Traditional Cottages
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our Deluxe Rooms provide a perfect mix of modern comfort and
                rustic charm. The interiors reflect the natural aesthetics of
                Wayanad while offering all the facilities you need for a
                comfortable stay.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Amenities in Our Deluxe Rooms
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Comfortable bedding with fresh linens
                </li>
                <li className="text-secondary font-albertSans">
                  Air-conditioning for hot and humid days
                </li>
                <li className="text-secondary font-albertSans">
                  Free Wi-Fi and entertainment options
                </li>
                <li className="text-secondary font-albertSans">
                  Daily housekeeping for a clean stay
                </li>
                <li className="text-secondary font-albertSans">
                  Private balconies with stunning views
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Explore Wayanad from Our Cottages
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Booking one of our Wayanad cottages places you close to all the
                major attractions of the region. You can explore waterfalls,
                wildlife sanctuaries, trekking trails, and plantations while
                enjoying the privacy and comfort of your Deluxe Room.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Nearby Attractions
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  <strong>Edakkal Caves</strong> – Ancient carvings and history
                </li>
                <li className="text-secondary font-albertSans">
                  <strong>Pookode Lake</strong> – Boating and walking trails
                </li>
                <li className="text-secondary font-albertSans">
                  <strong>Banasura Sagar Dam</strong> – Scenic views and
                  adventure activities
                </li>
                <li className="text-secondary font-albertSans">
                  <strong>Wayanad Wildlife Sanctuary</strong> – Safari and
                  nature exploration
                </li>
                <li className="text-secondary font-albertSans">
                  <strong>Chembra Peak</strong> – Trekking and panoramic vistas
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Ideal Stay for Families, Couples, and Solo Travelers
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our cottages in Wayanad are versatile enough to suit different
                types of travelers. Families love the space and privacy, couples
                enjoy a romantic and serene atmosphere, and solo travelers find
                a peaceful environment to relax.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Who Should Book Deluxe Rooms
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Families looking for spacious accommodations
                </li>
                <li className="text-secondary font-albertSans">
                  Couples seeking a private getaway
                </li>
                <li className="text-secondary font-albertSans">
                  Solo travelers wanting a calm retreat
                </li>
                <li className="text-secondary font-albertSans">
                  Nature lovers exploring Wayanad's scenic beauty
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Experience Local Hospitality in Our Wayanad Cottages
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                What makes our Wayanad cottages special is the warm hospitality.
                Guests can enjoy home-cooked meals, guidance for local
                sightseeing, and personalized care throughout their stay.
                Staying in our Deluxe Rooms gives you a unique opportunity to
                experience the local culture while enjoying modern comfort.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Highlights of Guest Experience
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Traditional meals prepared with fresh ingredients
                </li>
                <li className="text-secondary font-albertSans">
                  Assistance with sightseeing and local attractions
                </li>
                <li className="text-secondary font-albertSans">
                  Friendly and attentive staff for a comfortable stay
                </li>
                <li className="text-secondary font-albertSans">
                  Peaceful surroundings away from the city crowd
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Comfort, Privacy, and Scenic Views
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our Deluxe Rooms in Wayanad cottages offer the ideal combination
                of comfort, privacy, and nature. Each room provides a serene
                environment where you can relax after a day of sightseeing. The
                spacious layout and private balconies ensure a peaceful retreat
                while enjoying the beauty of Wayanad.
              </p>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6">
                Luxury Homestays in Wayanad with Scenic Views
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our premium homestays in Wayanad are nestled in serene locations
                surrounded by nature. Wake up to the misty hills, breathe in
                fresh mountain air, and enjoy a sense of calm that only Wayanad
                can offer. These rooms are perfect for those who want a
                luxurious experience while staying close to nature.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Highlights of Luxury Stays
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Panoramic views of lush valleys and plantations
                </li>
                <li className="text-secondary font-albertSans">
                  Peaceful environment for relaxation and rejuvenation
                </li>
                <li className="text-secondary font-albertSans">
                  Tasteful décor blending modern and traditional styles
                </li>
                <li className="text-secondary font-albertSans">
                  Perfect for weekend getaways, romantic trips, or family
                  vacations
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Personalized Services at Our Luxury Homestays in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                At our premium Wayanad homestays, every guest is treated with
                care and attention. Our team ensures that your stay is seamless,
                providing personalized services from check-in to check-out.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Services You Can Expect
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Daily housekeeping and room service
                </li>
                <li className="text-secondary font-albertSans">
                  Assistance with local sightseeing and excursions
                </li>
                <li className="text-secondary font-albertSans">
                  Home-cooked meals highlighting local flavors
                </li>
                <li className="text-secondary font-albertSans">
                  Travel guidance for Wayanad attractions
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Explore Wayanad While Staying in Premium Rooms
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Staying in our luxury homestays in Wayanad places you close to
                some of the region's most popular attractions. From waterfalls
                to wildlife sanctuaries, you can explore everything at your own
                pace and return to the comfort of your premium room.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Nearby Attractions
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Edakkal Caves – Ancient rock carvings and history
                </li>
                <li className="text-secondary font-albertSans">
                  Pookode Lake – Boating and scenic walks
                </li>
                <li className="text-secondary font-albertSans">
                  Banasura Sagar Dam – Stunning landscapes and leisure spots
                </li>
                <li className="text-secondary font-albertSans">
                  Wayanad Wildlife Sanctuary – Safari and nature experiences
                </li>
                <li className="text-secondary font-albertSans">
                  Chembra Peak – Trekking and panoramic views
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Comfort and Elegance in Every Room
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our premium rooms in Wayanad are designed to provide a balance
                of luxury and homely comfort. Spacious layouts, stylish
                furniture, and ambient lighting make every room relaxing.
                Whether you want to read, rest, or simply enjoy the view, these
                rooms create the perfect environment.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Room Amenities Include
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  King-size or queen beds with premium linens
                </li>
                <li className="text-secondary font-albertSans">
                  Air-conditioning for added comfort
                </li>
                <li className="text-secondary font-albertSans">
                  Flat-screen TVs and Wi-Fi connectivity
                </li>
                <li className="text-secondary font-albertSans">
                  Private seating areas and balconies
                </li>
                <li className="text-secondary font-albertSans">
                  Luxury toiletries and essentials
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Ideal for Couples, Families, and Solo Travelers
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Whether you are traveling with family, a partner, or alone, our
                luxury homestays in Wayanad cater to everyone. Couples enjoy
                privacy and romance, families get spacious rooms and safety, and
                solo travelers find a peaceful environment for relaxation.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Who Should Book Premium Rooms?
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Couples seeking a romantic getaway
                </li>
                <li className="text-secondary font-albertSans">
                  Families wanting comfort and convenience
                </li>
                <li className="text-secondary font-albertSans">
                  Solo travelers looking for a peaceful retreat
                </li>
                <li className="text-secondary font-albertSans">
                  Nature lovers wanting scenic surroundings
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Authentic Local Hospitality with Premium Comfort
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                A stay at our premium homestays in Wayanad is more than just a
                room—it's an experience. Our hosts ensure you feel at home,
                offering local cuisine, insights into the region, and
                personalized care. Enjoy the blend of modern luxury and
                traditional Kerala hospitality in every aspect of your stay.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Guest Experiences Include
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Home-cooked Kerala meals with fresh ingredients
                </li>
                <li className="text-secondary font-albertSans">
                  Guidance for offbeat local attractions
                </li>
                <li className="text-secondary font-albertSans">
                  Opportunities to engage with local culture and traditions
                </li>
                <li className="text-secondary font-albertSans">
                  Personalized attention for a stress-free stay
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Plan Your Stay in Our Luxury Homestays in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Booking our premium rooms in Wayanad ensures a memorable and
                comfortable stay. From scenic views to personalized services,
                every aspect of your experience is thoughtfully designed. Spend
                your days exploring Wayanad's beauty and your evenings in the
                cozy ambiance of your premium room.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                What Makes Our Luxury Homestays Special
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Prime locations amidst Wayanad's natural beauty
                </li>
                <li className="text-secondary font-albertSans">
                  Elegant interiors with modern amenities
                </li>
                <li className="text-secondary font-albertSans">
                  Personalized services and warm hospitality
                </li>
                <li className="text-secondary font-albertSans">
                  Peaceful, private, and secure environment
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Book Your Premium Homestay in Wayanad Today
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                If you're searching for luxury homestays in Wayanad that combine
                elegance, comfort, and authenticity, look no further. Our
                premium homestays in Wayanad offer the perfect base for your
                adventures, ensuring a relaxing and memorable stay. Book your
                premium room today and experience Wayanad the way it's meant to
                be enjoyed—peaceful, scenic, and luxurious.
              </p>
            </>
          ) : isClassicRoom ? (
            <>
              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Why Choose Our Classic Rooms in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our Classic Rooms are more than just a place to sleep—they are a
                complete experience of Wayanad's hospitality. Whether you're
                visiting for a short weekend or a long vacation, you'll find
                everything you need here.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Great Value for Money
              </h3>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Travelers often struggle to balance affordability and comfort.
                At Kudajadri Drizzle, you don't have to compromise. The Classic
                Rooms combine both—giving you a neat, well-maintained space at a
                reasonable price.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Perfect for All Types of Travelers
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Families will enjoy the spacious rooms and safe environment
                </li>
                <li className="text-secondary font-albertSans">
                  Couples will love the peaceful, private setting
                </li>
                <li className="text-secondary font-albertSans">
                  Solo travelers will find it affordable and homely
                </li>
                <li className="text-secondary font-albertSans">
                  Group travelers can book multiple rooms together
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Facilities at Our Affordable Homestay in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                We believe in keeping things simple yet satisfying. Our Classic
                Rooms come with everything you need for a comfortable stay.
              </p>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Room Amenities
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Clean and cozy double beds
                </li>
                <li className="text-secondary font-albertSans">
                  Private bathrooms with hot water
                </li>
                <li className="text-secondary font-albertSans">
                  Free Wi-Fi to stay connected
                </li>
                <li className="text-secondary font-albertSans">
                  Seating area for relaxation
                </li>
              </ul>

              <h3 className="text-primary font-ivy text-2xl mb-4 mt-8">
                Property Features
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Safe parking space
                </li>
                <li className="text-secondary font-albertSans">
                  Traditional Kerala-style architecture
                </li>
                <li className="text-secondary font-albertSans">
                  Common areas to sit and unwind
                </li>
                <li className="text-secondary font-albertSans">
                  Lush greenery all around
                </li>
              </ul>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                With these features, you'll get the best of both worlds—budget
                pricing with quality services.
              </p>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Local Experiences Around Our Budget Friendly Homestays in
                Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Staying at Kudajadri Drizzle places you close to some of the
                most beautiful attractions in Wayanad. From waterfalls to
                wildlife, you'll have plenty of options to explore.
              </p>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-4">
                Nearby places you can visit:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Edakkal Caves – Famous for ancient carvings
                </li>
                <li className="text-secondary font-albertSans">
                  Pookode Lake – A scenic freshwater lake
                </li>
                <li className="text-secondary font-albertSans">
                  Soochipara Waterfalls – Perfect for adventure lovers
                </li>
                <li className="text-secondary font-albertSans">
                  Wayanad Wildlife Sanctuary – Spot elephants and other wildlife
                </li>
                <li className="text-secondary font-albertSans">
                  Chembra Peak – Popular trekking destination
                </li>
              </ul>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                After a day of sightseeing, you can return to your Classic Room
                and relax in comfort.
              </p>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                The Charm of Staying in a Homestay in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Hotels may provide luxury, but homestays offer something
                unique—warmth and personal care. Our Classic Rooms give you the
                chance to experience Wayanad's culture and lifestyle closely.
              </p>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-4">
                Benefits of choosing a homestay over hotels:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Friendly and personalized hospitality
                </li>
                <li className="text-secondary font-albertSans">
                  Homely atmosphere with local touch
                </li>
                <li className="text-secondary font-albertSans">
                  Authentic Kerala food on request
                </li>
                <li className="text-secondary font-albertSans">
                  Peaceful surroundings away from crowds
                </li>
              </ul>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                This is why travelers looking for an affordable homestay in
                Wayanad prefer our Classic Rooms.
              </p>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Who Should Book Our Classic Rooms
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Our rooms are suited for a wide range of travelers. If you fall
                into any of these categories, you'll find them ideal:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Budget Travelers – Affordable stay without cutting down on
                  comfort
                </li>
                <li className="text-secondary font-albertSans">
                  Families – Spacious rooms with homely vibes
                </li>
                <li className="text-secondary font-albertSans">
                  Couples – Quiet and private atmosphere
                </li>
                <li className="text-secondary font-albertSans">
                  Nature Lovers – Surrounded by greenery and fresh air
                </li>
                <li className="text-secondary font-albertSans">
                  Workation Seekers – Wi-Fi and peaceful setting for remote work
                </li>
              </ul>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                No matter your travel purpose, our Classic Rooms give you the
                best of Wayanad without overspending.
              </p>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Affordable Homestay in Wayanad with a Touch of Tradition
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                One of the highlights of our Wayanad homestay is its traditional
                design. The Classic Rooms reflect the charm of Kerala's
                architecture while blending modern convenience. From wooden
                accents to open spaces filled with natural light, every detail
                adds to the authentic experience.
              </p>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                It's not just about staying—it's about feeling the culture of
                Wayanad while enjoying a warm and cozy space.
              </p>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                How to Make the Most of Your Stay in Wayanad
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                If you're planning your trip, here are a few tips to make it
                more enjoyable while staying at our budget friendly homestays in
                Wayanad:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-secondary font-albertSans">
                  Start your mornings with a walk around the property to enjoy
                  fresh air.
                </li>
                <li className="text-secondary font-albertSans">
                  Try local dishes offered on request for an authentic taste of
                  Kerala.
                </li>
                <li className="text-secondary font-albertSans">
                  Plan short day trips to nearby attractions and return to relax
                  in your Classic Room.
                </li>
                <li className="text-secondary font-albertSans">
                  Carry a camera to capture the scenic beauty around the
                  homestay.
                </li>
                <li className="text-secondary font-albertSans">
                  Spend your evenings enjoying the calmness instead of rushing
                  around.
                </li>
              </ul>

              <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl mb-6 mt-12">
                Book Your Budget Friendly Homestay in Wayanad Today
              </h2>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Finding the right place to stay can make or break your trip. If
                you're looking for an affordable homestay in Wayanad that feels
                like home, Kudajadri Drizzle's Classic Rooms are the perfect
                choice. With budget-friendly pricing, cozy interiors, and a
                location close to major attractions, your stay will be both
                relaxing and memorable.
              </p>
              <p className="text-secondary font-albertSans text-lg leading-relaxed mb-6">
                Reserve your Classic Room today and experience the best of
                Wayanad without stretching your budget.
              </p>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-ivy text-lg text-primary mb-2">
                    Couples
                  </h4>
                  <p className="text-secondary font-albertSans">
                    Romantic getaway with privacy and beautiful views
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-ivy text-lg text-primary mb-2">
                    Families
                  </h4>
                  <p className="text-secondary font-albertSans">
                    Spacious and comfortable for family vacations
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-ivy text-lg text-primary mb-2">
                    Solo Travelers
                  </h4>
                  <p className="text-secondary font-albertSans">
                    Safe and welcoming environment for solo explorers
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-ivy text-lg text-primary mb-2">
                    Nature Lovers
                  </h4>
                  <p className="text-secondary font-albertSans">
                    Immersed in nature with easy access to trails
                  </p>
                </div>
              </div>
            </>
          )}

          <button
            onClick={() => (window.location.href = '/contact')}
            className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium hover:bg-opacity-90 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SEOData;

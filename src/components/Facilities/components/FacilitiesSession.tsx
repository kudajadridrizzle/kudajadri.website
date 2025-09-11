const FacilitiesSession = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-0 lg:gap-[64px]">
        
        {/* Left - Sticky Square Image */}
        <div className="w-full h-full">
          <div className="sticky top-24 aspect-square">
            <img
              src="/images/pool34.jpg"
              alt="Homestay swimming pool"
              className="w-full h-full object-cover rounded-[16px] shadow-lg"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col justify-center items-start w-full h-full">
          <h1 className="font-ivy sm:text-[44px] mobile:text-[32px] mb-6 text-primary">
          Swimming Pool Homestays in Wayanad          </h1>

          <div className="flex flex-col gap-4 font-albertSans sm:text-xl mobile:text-base text-[#6E6E6E]">
            {/* Intro */}
            <span>
              Step into our 100-year-old Jain Tharavadu and discover a unique blend
              of heritage charm and modern comforts. At Kudajadri Drizzle Homestay,
              we believe your experience should feel personal, warm, and unforgettable.
            </span>
            <span>
              Whether you’re here for family time, a solo retreat, or an adventure
              with friends, our thoughtfully designed facilities ensure you’ll feel
              relaxed, connected, and truly cared for.
            </span>
            <span>
              Kudajadri Drizzle offers a perfect mix of comfort and nature. Set in
              the green landscapes of Wayanad, our homestay comes with a swimming pool
              where you can relax after a day of sightseeing.
            </span>

            {/* Why Choose Section */}
            <h3 className="font-ivy font-semibold text-black sm:text-2xl mobile:text-xl mt-6">
              Why Choose a Poolside Homestay?
            </h3>
            <span>A swimming pool adds extra fun and relaxation to your stay. Guests enjoy:</span>
            <ul className="list-disc list-inside pl-2">
              <li>A refreshing dip after exploring Wayanad</li>
              <li>Safe and private space for families</li>
              <li>Scenic views while swimming</li>
            </ul>

            {/* Things To Do Section */}
            <h3 className="font-ivy font-semibold text-black sm:text-2xl mobile:text-xl mt-6">
              Things to Do Around Kudajadri Drizzle
            </h3>
            <span>When you’re not in the pool, Wayanad has plenty to offer:</span>
            <ol className="list-decimal list-inside pl-2">
              <li>Visit nearby waterfalls and tea estates</li>
              <li>Explore wildlife sanctuaries</li>
              <li>Experience local culture and food</li>
            </ol>

            {/* Comfort Meets Nature Section */}
            <h3 className="font-ivy font-semibold text-black sm:text-2xl mobile:text-xl mt-6">
              Comfort Meets Nature
            </h3>
            <span>
              Kudajadri Drizzle combines modern amenities with homely warmth.
              Whether you travel with family, friends, or as a couple,
              our poolside stay makes your Wayanad holiday memorable and relaxing.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSession;

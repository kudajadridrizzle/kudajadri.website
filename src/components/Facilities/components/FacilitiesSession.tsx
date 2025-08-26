const FacilitiesSession = () => {
  return (
    <section className="w-full h-full">
<div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-0 lg:gap-[64px]">
        
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center items-start w-full h-full p-8 sm:p-0">
          <h1 className="font-ivy sm:text-[44px] mobile:text-[32px] mb-6 text-primary">
            Homestays in Wayanad with Swimming Pool
          </h1>
          <div className="flex flex-col gap-4 font-albertSans sm:text-xl mobile:text-base text-[#6E6E6E]">
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
            <span>Explore what’s waiting for you:</span>
          </div>
        </div>
{/* Right - 3 Image Grid */}
<div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
  <img
    src="/images/1 (49).jpg"
    alt="Homestay swimming pool"
    className="w-full h-full object-cover col-span-2 row-span-1 rounded-[16px]"
  />
  <img
    src="/images/1 (50).jpg"
    alt="Homestay room"
    className="w-full h-full object-cover rounded-[16px]"
  />
  <img
    src="/images/1 (51).jpg"
    alt="Homestay exterior"
    className="w-full h-full object-cover rounded-[16px]"
  />
</div>


      </div>
    </section>
  );
};

export default FacilitiesSession;

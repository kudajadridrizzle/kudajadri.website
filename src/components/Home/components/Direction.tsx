const Direction = () => {

  const mapUrl = 'https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.694468,76.09254,21z/data=!4m9!3m8!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!16s%2Fg%2F1ptwp6yd6?hl=en&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D';
  const iframeMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1912242549953!2d76.0876686!3d11.6944734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6752bf8e8c185%3A0x5bf951fa893c48b4!2sKudajadri%20Drizzle%20-%20Best%20Wayanad%20Homestays!5e0!3m2!1sen!2sin!4v1717921840000!5m2!1sen!2sin'

  return (
    <div className="sm:px-[12%] sm:py-32 flex flex-col gap-24 mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="uppercase text-primary tracking-[1.6px] font-albertSans">
          Direction
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <span className="block text-primary sm:text-[44px] mobile:text-[32px] font-ivy">
            Getting Here Made Easy
          </span>
          <p className="text-secondary sm:text-xl font-albertSans text-center">
            Easily accessible, our homestay in Kaniyambetta, Wayanad, is close
            to Kalpetta and Sultan Bathery, ensuring a hassle-free journey.
          </p>
        </div>
        <div>
          <button onClick={() => {
            window.open(mapUrl, '_blank');
          }} className="bg-primary px-6 py-3 rounded-full text-[#fff] font-albertSans">
            Get Direction
          </button>
        </div>
      </div>
       <div className="rounded-2xl overflow-hidden">
        <iframe
        src={iframeMapUrl}
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
       </div>
    </div>
  );
}
export default Direction

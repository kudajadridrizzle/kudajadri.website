import ReviewSection from '../../shared/ReviewSection';

const ReviewSession = () => {
  return (
    <ReviewSection 
      rating="4.8"
      title="Why Guests Love Our Homestay in Kalpetta"
      description={
        <>
          Our guests consistently praise Kudajadri Drizzle for its warm hospitality, serene ambiance, and personalized attention. Highly rated among Kalpetta homestays, we are known for creating a welcoming and memorable environment. Visitors appreciate the heritage architecture, scenic surroundings, and calm atmosphere, making each stay unique and special. Staying at our <strong>home stays in Kalpetta</strong> leaves guests with unforgettable memories and a desire to return.
        </>
      }
    >
      {/* <div className="grid md:grid-cols-3 gap-8 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">For Families</h3>
          <p className="text-secondary">"The kids loved the open spaces and the staff went out of their way to make our stay comfortable. The family suite was perfect for us!" - The Sharma Family</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">For Couples</h3>
          <p className="text-secondary">"The private balcony with mountain views was absolutely stunning. Perfect for our anniversary getaway. The candlelight dinner was a special touch!" - Rahul & Priya</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">For Solo Travelers</h3>
          <p className="text-secondary">"As a solo female traveler, I felt completely safe and welcomed. The staff helped me plan my daily excursions and the food was amazing!" - Meera K.</p>
        </div>
      </div> */}
    </ReviewSection>
  );
};

export default ReviewSession;

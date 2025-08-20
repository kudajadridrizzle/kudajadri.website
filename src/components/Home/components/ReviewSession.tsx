import ReviewSection from '../../shared/ReviewSection';

const ReviewSession = () => {
  return (
    <ReviewSection 
      rating="4.6"
      title="Why Guests Love Our Homestay in Kalpetta"
      description="Our guests consistently praise Kudajadri Drizzle for its warm hospitality, serene ambiance, and personalized attention. Highly rated among Kalpetta homestays, we are known for creating a welcoming and memorable environment."
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-8 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Perfect Getaway</h3>
          <p className="text-secondary">"An amazing experience! The perfect blend of comfort and nature. Can't wait to come back!" - Ravi K.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Excellent Hospitality</h3>
          <p className="text-secondary">"The staff went above and beyond to make our stay memorable. The food was delicious!" - Priya M.</p>
        </div>
      </div>
    </ReviewSection>
  );
};

export default ReviewSession;

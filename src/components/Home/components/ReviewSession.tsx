import ReviewSection from '../../shared/ReviewSection';

const ReviewSession = () => {
  return (
    <ReviewSection 
      rating="4.6"
      title="Why Guests Choose Our Wayanad Homestay"
      description={
        <>
          Discover why guests recommend us among the best <strong>homestays in Wayanad</strong>. From the warm welcome to the peaceful surroundings, many share how our hospitality, authentic home-cooked meals, and personal attention made their visit truly special. Read their reviews, feel their experiences, and see why they keep coming back. If you’ve stayed with us, we’d love to hear your story too. Share your review and help fellow travelers find comfort, culture, and memorable moments at our homestay. Your words could inspire someone to choose the perfect stay in the beautiful hills of Wayanad.
        </>
      }
      className="bg-white"
    >
      {/* <div className="grid md:grid-cols-2 gap-8 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Perfect Getaway</h3>
          <p className="text-secondary">"An amazing experience! The perfect blend of comfort and nature. Can't wait to come back!" - Ravi K.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Excellent Hospitality</h3>
          <p className="text-secondary">"The staff went above and beyond to make our stay memorable. The food was delicious!" - Priya M.</p>
        </div>
      </div> */}
    </ReviewSection>
  );
};

export default ReviewSession;

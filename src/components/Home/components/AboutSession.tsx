import { useNavigate } from 'react-router-dom';

const AboutSession = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:py-32 sm:px-[12%] px-4 py-14 large:px-[18%]">
      <div className="flex flex-col sm:flex-row">
        <p className="flex-1 text-primary font-albertSans sm:text-base tracking-[1.6px] uppercase mobile:text-sm">
          About us
        </p>
        <div className="flex flex-col gap-6 flex-1">
          <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary">
            Kudajadri Drizzle – #1 in Wayanad Homestays & Top Homestays in Wayanad
          </h1>
          <div className="text-secondary font-albertSans sm:text-xl prose prose-p:my-0 prose-a:text-blue-600 prose-strong:font-semibold">
            <h2><strong>Wayanad Homestays with Heritage Charm and Modern Comfort</strong></h2>
            <p>
              <strong>Wayanad Homestays</strong> offer a unique way to experience Kerala’s rich culture, and Kudajadri Drizzle stands out as one of the most authentic options available. Located in a 100-year-old Jain Tharavadu, this heritage property brings together tradition, comfort, and warm hospitality. Set in a peaceful village, it's a perfect escape from city life and a great place to unwind in nature.
            </p>
            <p>
              Unlike typical hotels or cottages, this <strong>Wayanad Homestay</strong> is designed to reflect local architecture and lifestyle. Spacious wooden interiors, antique furnishings, and a serene atmosphere create an immersive experience. Whether you're visiting with family, your partner, or exploring solo, the homestay makes everyone feel at home with its personal touch and attention to detail.
            </p>
            <h2><strong>Why Kudajadri Drizzle is the Best Homestay in Wayanad</strong></h2>
            <p>
              Recognized among the <strong>Best Homestays in Wayanad</strong>, Kudajadri Drizzle is centrally located for easy access to popular sites like Edakkal Caves, Soochipara Waterfalls, and Banasura Sagar Dam. This ideal location allows travelers to explore the best of <a href="/wayanad">Wayanad</a> without long travel times. The hosts offer expert travel advice and help you make the most of your trip.
            </p>
            <h2><strong>Homestays in Wayanad That Serve Authentic Kerala Cuisine</strong></h2>
            <p>
              One of the highlights of staying at Kudajadri Drizzle is the food. Guests enjoy home-cooked Kerala meals, with both vegetarian Jain options and traditional local flavors. Meals are prepared with fresh, local ingredients and served in a homely setting that enhances the experience.
            </p>
            <h2><strong>A Peaceful Homestay in Wayanad for All Types of Travelers</strong></h2>
            <p>
              From reliable WiFi and 24/7 hot water to free parking and peaceful surroundings, Kudajadri Drizzle provides modern comforts without losing its traditional touch. This <strong>Homestay in Wayanad</strong> is ideal for anyone seeking a blend of nature, culture, and comfort in one place.
            </p>
            <h2><strong>Book the Best Homestay in Wayanad Today</strong></h2>
            <p>
              Highly rated among <strong>Homestays in Wayanad</strong>, Kudajadri Drizzle is more than just a place to stay—it's a place to experience. Whether you're here for a weekend getaway or a longer vacation, this property offers everything you need for a memorable trip.
            </p>
            <p>
              Book your stay today and discover why Kudajadri Drizzle is loved by guests as the <strong>Best Homestay in Wayanad</strong>.
            </p>
          </div>
          <div>
            <button
              className="px-6 py-3 rounded-full bg-primary text-[#FFF] font-albertSans"
              onClick={() => navigate('/about-us')}
            >
              Explore Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSession;

import { useState } from "react";
import { TextField } from "../Contact/ContactPage";
import { Header } from "../Home/components/Header";
import bookingImage from "../../../public/aboutHero.jpg";
import { Helmet } from "react-helmet-async";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    if (!phoneNumber) {
      console.error("VITE_WHATSAPP_NUMBER is not defined");
      return;
    }

    const { name, email, phone, message } = formData;

    const formattedMessage = `
Hello! I'd like to book a stay at your resort.

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
    `.trim();

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;

    window.location.href = whatsappURL;
  };

  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Book Your Stay | Kudajadri Homestay Wayanad - Easy Online Booking</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Book your stay at Kudajadri Homestay in Wayanad with instant confirmation. Easy online booking for families and couples. Get the best rates and secure your perfect accommodation." />
        <meta name="keywords" content="book kudajadri homestay, wayanad accommodation booking, online reservation, instant confirmation" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Book Your Stay | Kudajadri Homestay Wayanad - Easy Online Booking" />
        <meta property="og:description" content="Book your stay at Kudajadri Homestay in Wayanad with instant confirmation. Easy online booking for families and couples. Get the best rates and secure your perfect accommodation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Your Stay | Kudajadri Homestay Wayanad - Easy Online Booking" />
        <meta name="twitter:description" content="Book your stay at Kudajadri Homestay in Wayanad with instant confirmation. Easy online booking for families and couples. Get the best rates and secure your perfect accommodation." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Header type="black" />
      <div className="flex">
        <div className="mobile:w-full sm:w-1/2">
          <div className="sm:pl-20 sm:py-8 sm:pr-8 mobile:px-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-primary mobile:text-[32px] sm:text-[44px] font-ivy">
                  Book Your Stay
                </span>
                <span className="text-secondary sm:text-xl font-albertSans">
                  Fill the form to book your stay, and we'll respond within 15
                  minutes. For queries, feedback, or suggestions, include
                  details in your message. We're here to assist!
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <TextField
                  label="Full Name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
                />
                <TextField
                  label="Email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                />
                <TextField
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("phone", e.target.value)}
                />
                <TextField
                  label="Message"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("message", e.target.value)}
                />
                <div className="pt-6">
                  <button
                    className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mobile:hidden">
          <img src={bookingImage} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Booking;

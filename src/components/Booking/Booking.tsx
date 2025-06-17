import { useState } from "react";
import { TextField } from "../Contact/ContactPage";
import { Header } from "../Home/components/Header";
import bookingImage from "../../../public/aboutHero.jpg";

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
                  Fill the form to book your stay, and we’ll respond within 15
                  minutes. For queries, feedback, or suggestions, include
                  details in your message. We’re here to assist!
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

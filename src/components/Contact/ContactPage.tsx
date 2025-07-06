import facebookLogo from "../../assets/contactFacbookLogo.svg";
import threadLogo from "../../assets/ContactThreadLogo.svg"
import instaLogo from "../../assets/contactInstaLogo.svg";
import twitterLogo from "../../assets/contactTwitterLogo.svg";
import Footer from "../Home/components/Footer";
import { Header } from "../Home/components/Header";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


export const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const email = 'kudajadri@ymail.com';
  const whatsappNumber = '+91 9946 354 511';

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello! I'd like to get in touch with you.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    const phone = whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="sm:mt-[90px] mobile:mt-[52px]">
      <Helmet>
        {/* Browser Tab Title */}
        <title>Online Booking & Reservation of Wayanad Homestays – Easy & Secure</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Online booking and reservation of Wayanad homestays with instant confirmation. Find cozy and scenic stays perfect for families and couples." />
        <meta name="keywords" content="contact kudajadri homestay, wayanad homestay contact, kudajadri booking, wayanad accommodation contact" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Online Booking & Reservation of Wayanad Homestays – Easy & Secure" />
        <meta property="og:description" content="Online booking and reservation of Wayanad homestays with instant confirmation. Find cozy and scenic stays perfect for families and couples." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Booking & Reservation of Wayanad Homestays – Easy & Secure" />
        <meta name="twitter:description" content="Online booking and reservation of Wayanad homestays with instant confirmation. Find cozy and scenic stays perfect for families and couples." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* Header */}
      <Header type="black" />

      {/* Main Content */}
      <div className="mobile:pt-[52px] mobile:pb-[24px] sm:pt-[50px] sm:min-w-[1174px] flex flex-col items-center px-4 sm:px-0">
        {/* Title Section */}
        <div className="flex flex-col sm:gap-[90px] gap-7">
          <div className="flex flex-col items-center gap-6">
            <span className="text-[#000] font-albertSans tracking-[1.6px] text-base">
              Contact Us
            </span>
            <span className="sm:text-[72px] text-[32px] text-[#000] font-staylista">
              Experience Kudajadri
            </span>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex gap-10 justify-center sm:py-24 sm:px-[12%]  large:px-[18%] pt-7">
          <div className="flex flex-col gap-10 sm:flex-row">
            <div className="flex flex-col flex-1 gap-8">
              <div className="flex flex-col gap-2.5">
                <span className="text-[#000] font-albertSans tracking-[1.6px] uppercase mobile:text-sm sm:text-base">
                  ADDRESS
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ivy sm:text-[44px] text-[32px] text-[#000]"
                >
                  Come
                </a>
                <a
                  href={import.meta.env.VITE_GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary sm:text-xl font-albertSans hover:underline"
                >
                  Kudajadri Drizzle Homestay, Kayakkandy House, MR School Road,
                  Kaniyambetta, Wayanad, Kerala - 673122, India.
                </a>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-[#000] text-base font-albertSans tracking-[1.6px] uppercase">
                  EMAIL
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-xl text-secondary font-albertSans hover:underline"
                >
                  {email}
                </a>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-[#000] text-base font-albertSans tracking-[1.6px] uppercase">
                  FOLLow
                </span>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.facebook.com/kudajadrihomestay"
                    target="_blank"
                  >
                    <img src={facebookLogo} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/kudajadrihomestay/"
                    target="_blank"
                  >
                    <img src={instaLogo} alt="" />
                  </a>
                  <a
                    href="https://twitter.com/kudajadrihomestay"
                    target="_blank"
                  >
                    <img src={twitterLogo} alt="" />
                  </a>
                  <a
                    href="https://www.threadless.com/stores/kudajadrihomestay"
                    target="_blank"
                  >
                    <img src={threadLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2.5 flex-1">
              <span className="text-[#000] mobile:text-sm sm:text-base font-albertSans tracking-[1.6px] uppercase">
                Phone
              </span>
              <span className="font-ivy sm:text-[44px] text-[32px] text-[#000]">Call</span>
              <div className="flex flex-col text-secondary sm:text-xl font-albertSans">
                <a href={`tel:${whatsappNumber}`}>{whatsappNumber}</a>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2.5 flex-1">
              <span className="text-[#000] mobile:text-sm sm:text-base font-albertSans tracking-[1.6px] uppercase">
                message
              </span>
              <span className="font-ivy text-[44px] text-[#000]">Write</span>
              <div className="flex flex-col gap-3.5">
                <TextField label="Name" value={form.name} onChange={handleChange("name")} placeholder="Your Name" />
                <TextField label="Email" value={form.email} onChange={handleChange("email")} placeholder="Your Email" />
                <TextField label="Message" value={form.message} onChange={handleChange("message")} placeholder="Your Message" />
                <div>
                  <button className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


interface TextFieldProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "Your Name",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[#666] font-albertSans font-medium">{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#BFBFBF] p-3 w-full h-[54px] rounded-lg"
      />
    </div>
  );
};

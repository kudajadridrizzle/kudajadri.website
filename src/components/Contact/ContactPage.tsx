import facebookLogo from '../../assets/contactFacbookLogo.svg';
import threadLogo from '../../assets/ContactThreadLogo.svg';
import instaLogo from '../../assets/contactInstaLogo.svg';
import twitterLogo from '../../assets/contactTwitterLogo.svg';
import Footer from '../Home/components/Footer';
import { Header } from '../Home/components/Header';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import usePageMeta, { PageType } from '../../hooks/usePageMeta';

export const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { meta, loading, error } = usePageMeta('contact' as PageType);
  const email = 'kudajadri@ymail.com';
  const whatsappNumber = '+91 9946 354 511';
  const [currentUrl, setCurrentUrl] = useState('https://www.kudajadridrizzle.com/contact');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello! I'd like to get in touch with you.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    const phone = whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) console.error('Error loading page metadata:', error);

  return (
    <div className="sm:mt-[90px] mobile:mt-[52px]">
      <Helmet>
        <title>{meta?.title || 'Contact Kudajadri Drizzle - Get in Touch for Your Stay in Wayanad'}</title>
        <meta name="description" content={meta?.description || 'Reach out to Kudajadri Drizzle for bookings and inquiries. Experience the best homestay in Wayanad with top-notch amenities and warm hospitality.'} />
        <meta name="keywords" content="contact Kudajadri Drizzle, Wayanad homestay contact, book homestay Wayanad, Kudajadri Drizzle booking, Wayanad accommodation contact" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Drizzle" />

        {/* Open Graph */}
        <meta property="og:title" content={meta?.title || 'Contact Kudajadri Drizzle - Get in Touch for Your Stay in Wayanad'} />
        <meta property="og:description" content={meta?.description || 'Reach out to Kudajadri Drizzle for bookings and inquiries. Experience the best homestay in Wayanad with top-notch amenities and warm hospitality.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta?.title || 'Contact Kudajadri Drizzle - Get in Touch for Your Stay in Wayanad'} />
        <meta name="twitter:description" content={meta?.description || 'Reach out to Kudajadri Drizzle for bookings and inquiries. Experience the best homestay in Wayanad with top-notch amenities and warm hospitality.'} />
        <meta name="twitter:site" content="@kudajadrihomestay" />

        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <Header type="black" />

      <div className="mobile:pt-[52px] mobile:pb-[24px] sm:pt-[50px] sm:min-w-[1174px] flex flex-col items-center px-4 sm:px-0">
        <div className="flex flex-col sm:gap-[90px] gap-7">
          <div className="flex flex-col items-center gap-6">
            {/* ✅ Changed CONTACT US to h2 for semantic SEO */}
            <h2 className="text-[#000] font-albertSans tracking-[1.6px] text-base uppercase">
              Contact Us
            </h2>
            <h1 className="sm:text-[72px] text-[32px] text-[#000] font-staylista text-center">
              Online Booking of Wayanad Homestays & Cottages
            </h1>
          </div>
        </div>

        <div className="flex gap-10 justify-center sm:py-24 sm:px-[12%] large:px-[18%] pt-7">
          <div className="flex flex-col gap-10 sm:flex-row">
            {/* Address */}
            <div className="flex flex-col flex-1 gap-8">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#000] font-albertSans tracking-[1.6px] uppercase mobile:text-sm sm:text-base">
                  Address
                </h3>
                <span className="font-ivy sm:text-[44px] text-[32px] text-[#000]">
                  Come
                </span>
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

              {/* Email */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#000] text-base font-albertSans tracking-[1.6px] uppercase">
                  Email
                </h3>
                <a
                  href={`mailto:${email}`}
                  className="text-xl text-secondary font-albertSans hover:underline"
                >
                  {email}
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#000] text-base font-albertSans tracking-[1.6px] uppercase">
                  Follow
                </h3>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.facebook.com/kudajadrihomestay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookLogo} alt="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/kudajadrihomestay/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instaLogo} alt="Instagram" />
                  </a>
                  <a
                    href="https://twitter.com/kudajadrihomestay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitterLogo} alt="Twitter" />
                  </a>
                  <a
                    href="https://www.threadless.com/stores/kudajadrihomestay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={threadLogo} alt="Thread" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="w-full flex flex-col gap-2.5 flex-1">
              <h3 className="text-[#000] mobile:text-sm sm:text-base font-albertSans tracking-[1.6px] uppercase">
                Phone
              </h3>
              <span className="font-ivy sm:text-[44px] text-[32px] text-[#000]">
                Call
              </span>
              <div className="flex flex-col text-secondary sm:text-xl font-albertSans">
                <a href={`tel:${whatsappNumber}`}>{whatsappNumber}</a>
              </div>
            </div>

            {/* Message Form */}
            <div className="w-full flex flex-col gap-2.5 flex-1">
              <h3 className="text-[#000] mobile:text-sm sm:text-base font-albertSans tracking-[1.6px] uppercase">
                Message
              </h3>
              <span className="font-ivy text-[44px] text-[#000]">Write</span>
              <div className="flex flex-col gap-3.5">
                <TextField
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Your Name"
                />
                <TextField
                  id="email"
                  label="Email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="Your Email"
                />
                <TextField
                  id="message"
                  label="Message"
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Your Message"
                />
                <div>
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
      </div>
      <Footer />
    </div>
  );
};

interface TextFieldProps {
  id: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = 'Your Name',
}) => {
  return (
    <div className="flex flex-col gap-1">
      {/* ✅ Proper <label> for accessibility */}
      <label htmlFor={id} className="text-[#666] font-albertSans font-medium">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#BFBFBF] p-3 w-full h-[54px] rounded-lg"
      />
    </div>
  );
};

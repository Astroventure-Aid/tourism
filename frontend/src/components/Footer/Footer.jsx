import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaCcVisa,
  FaCcStripe,
  FaCcAmazonPay,
} from "react-icons/fa";

const FooterLinks = [
  { title: "About Us", link: "/#about" },
  { title: "Destinations", link: "/#destinations" },
  { title: "Tour Package", link: "/#tour-package" },
  { title: "Article", link: "/#article" },
  { title: "Contact Us", link: "/#contact" },
  { title: "More Inquiry", link: "/#inquiry" },
];

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Quick Links */}
          <div className="py-4">
            <h1 className="text-xl text-black font-bold mb-3">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              {FooterLinks.map((link) => (
                <li className="cursor-pointer hover:underline text-black" key={link.title}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="py-4">
            <h1 className="text-xl text-black font-bold mb-3">Contact Us</h1>
            <p className="flex items-center gap-2 text-black">
              <FaMobileAlt /> +999 858 624 984
            </p>
            <p className="mt-2 text-black">Send Mail: info@example.com</p>
            <p className="mt-2 flex items-center gap-2 text-black">
              <FaLocationArrow /> House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh
            </p>
            <p className="mt-4 text-black">We Are Here</p>
            <p className="mt-1 text-black">Quisque purus augue, facilisis arci neque idont accumsan fringilla massa. Vivamusol id nibhom condimentum.</p>
          </div>

          {/* Payment Partners */}
          <div className="py-4">
            <h1 className="text-xl font-bold mb-3 text-black">Payment Partner</h1>
            <div className="flex gap-4">
              <FaCcVisa className="text-2xl" />
              <FaCcStripe className="text-2xl" />
              <FaCcAmazonPay className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6">
          <a href="#" className="mx-2">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="#" className="mx-2">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#" className="mx-2">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

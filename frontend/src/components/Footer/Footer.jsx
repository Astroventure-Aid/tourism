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
    <footer className="bg-red-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="flex items-center gap-2 text-gray-200 mb-2">
              <FaMobileAlt /> +999 858 624 984
            </p>
            <p className="text-gray-200 mb-2">Send Mail: info@example.com</p>
            <p className="flex items-center gap-2 text-gray-200 mb-4">
              <FaLocationArrow /> House 168/170, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh
            </p>
            <p className="text-gray-200">
              We Are Here: Quisque purus augue, facilisis arcu neque id accumsan.
            </p>
          </div>

          {/* Payment Partners */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Partners</h2>
            <div className="flex space-x-6">
              <FaCcVisa className="text-3xl text-gray-200" />
              <FaCcStripe className="text-3xl text-gray-200" />
              <FaCcAmazonPay className="text-3xl text-gray-200" />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { socialImgs } from "../constants/index.jsx"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright Notice */}
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Vandana Sharma. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {socialImgs.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice for new tabs
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={social.imgPath}
                alt={`${social.name} Icon`}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
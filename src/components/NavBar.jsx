import { useState, useEffect } from "react";
import { navLinks } from "../constants"; // Assuming this contains your nav link data

const NavBar = () => {
  // This hook for tracking scroll position is perfect, no changes needed here.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The header now uses Tailwind classes for positioning, layout, and dynamic styling.
    // The background changes from transparent to a blurred, semi-transparent black on scroll.
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black/50 backdrop-blur-sm py-4" : "py-6"
      }`}
    >
      {/* This inner div centers and constrains the content width */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-white">
          Vandana Sharma
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }) => (
              // The `group` class allows us to style a child element on parent hover
              <li key={name} className="group">
                <a href={link} className="relative text-gray-300 hover:text-white transition-colors">
                  <span>{name}</span>
                  {/* Underline effect: hidden by default, scales in on hover */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 border border-gray-300 rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          Contact me
        </a>
      </div>
    </header>
  );
};

export default NavBar;
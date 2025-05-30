import {  ChevronDown, ChevronUp, CircleUserRound, ShoppingBasket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState("usd");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const options = [
    { value: "usd", label: "USD", flag: "https://flagcdn.com/us.svg" },
    { value: "eur", label: "EUR", flag: "https://flagcdn.com/eu.svg" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current ).contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
   <header className="bg-[#FFD502] shadow-md px-4 md:px-12 py-2">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/lo.png" alt="Logo" className="h-[60px] w-[60px] object-contain" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-10">
        <a href="#" className="font-semibold">Home</a>
        <a href="#" className="opacity-60 font-medium hover:opacity-100">About</a>
        <a href="#" className="opacity-60 font-medium hover:opacity-100">Categories</a>
        
        <div className="relative group">
          <button className="font-medium opacity-60 hover:opacity-100 flex items-center focus:outline-none">
            Product <span className="ml-1">&#9662;</span>
          </button>
          <div className="absolute left-0 top-full z-20 hidden group-hover:block bg-white shadow-lg rounded mt-1 min-w-[160px]">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Product 1</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Product 2</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Product 3</a>
          </div>
        </div>

        <a href="#" className="opacity-60 font-medium hover:opacity-100">Location</a>
        <a href="#" className="opacity-60 font-medium hover:opacity-100">Contact Us</a>
      </nav>

     {/* Mobile Menu Button */}
<div className="lg:hidden flex items-center">
  <button
    className="text-black focus:outline-none"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    {isMobileMenuOpen ? (
      <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
</div>


      {/* Right Side Controls */}
      <div className="hidden lg:flex items-center space-x-3">
        {/* Language Dropdown */}
        <div className="relative inline-block" ref={dropdownRef}>
          <div
            className="flex items-center border px-2 py-1 rounded bg-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={options.find((o) => o.value === selected)?.flag}
              alt="flag"
              className="w-5 h-4 mr-2"
            />
            <span className="text-sm font-medium uppercase">{selected}</span>
            <span className="ml-1 text-xs">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
          </div>

          {isOpen && (
            <div className="absolute z-20 mt-2 w-full bg-white border rounded shadow-md">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setSelected(option.value);
                    setIsOpen(false);
                  }}
                  className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={option.flag} alt="flag" className="w-5 h-4 mr-2" />
                  <span className="text-sm font-medium uppercase">{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="w-8 h-8 cursor-pointer bg-black text-white flex items-center justify-center rounded">
          <CircleUserRound className="w-4 h-4" />
        </div>
        <div className="Shopping cursor-pointer relative w-8 h-8 bg-white text-black flex items-center justify-center rounded">
          <ShoppingBasket className="w-4 h-4" />
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
<div
  className={`header_active fixed top-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-2xl w-64 h-full flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Close Button inside drawer */}
  <button
    onClick={() => setIsMobileMenuOpen(false)}
    className="absolute top-4 left-4 text-gray-600  text-2xl font-bold"
  >
    &times;
  </button>

  {['Home', 'About', 'Categories', 'Product', 'Location', 'Contact Us'].map((label) => (
    <a
      key={label}
      href="#"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
    >
      {label}
    </a>
  ))}
</div>


  </div>
</header>

  );
};

export default Header;

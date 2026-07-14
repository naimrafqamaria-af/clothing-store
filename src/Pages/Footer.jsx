import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 px-16 pt-16 pb-6 font-sans">
      
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-gray-700">

        {/* Brand */}
        <div className="max-w-[220px]">
          <h2 className="text-white text-3xl font-bold mb-3">SHOPR</h2>
          <p className="text-sm leading-relaxed">
            Your go-to destination for the latest fashion trends. Style for everyone, every season.
          </p>
          <div className="flex gap-4 mt-4">
            {['Instagram', 'Facebook', 'TikTok', 'Pinterest'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-white text-base font-semibold mb-4">Shop</h4>
          <ul className="flex flex-col gap-2">
            {['Men', 'Women', 'Kids', 'New Arrivals', 'Sale'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-white text-base font-semibold mb-4">Help</h4>
          <ul className="flex flex-col gap-2">
            {['FAQ', 'Shipping Info', 'Returns', 'Track Order', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-[240px]">
          <h4 className="text-white text-base font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe for exclusive deals and new arrivals.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-sm text-gray-800 w-40 outline-none"
            />
            <button className="px-4 py-2 bg-white text-[#1a1a1a] text-sm font-bold rounded hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between items-center pt-5 text-xs gap-3">
        <p>© 2024 SHOPR. All rights reserved.</p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service'].map((link) => (
            <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
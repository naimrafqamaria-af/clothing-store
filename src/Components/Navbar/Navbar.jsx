import React, { useState } from "react";
import logo from "../Assets/logo.png.jpg";
import cart from "../Assets/cart.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
    window.location.reload();
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  const navLinks = [
    { label: "Shop", path: "/" },
    { label: "Men", path: "/mens" },
    { label: "Women", path: "/womens" },
    { label: "Kids", path: "/kids" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gray-800 tracking-widest uppercase">
            For You
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${
                    isActive(path)
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 flex-1 max-w-xs">
          <svg
            className="w-4 h-4 text-gray-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search clothes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400"
          />
          {search && (
            <button
              onClick={handleSearch}
              className="text-orange-500 text-xs font-semibold shrink-0"
            >
              Go
            </button>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 shrink-0">

          {!token ? (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-600 hover:text-orange-500 px-3 py-2 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* User greeting + profile */}
              <Link
                to="/profile"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-orange-500 transition px-2"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                  {name ? name[0].toUpperCase() : "U"}
                </div>
                <span className="hidden lg:inline">
                  {name ? name.split(" ")[0] : "Profile"}
                </span>
              </Link>

              {role === "owner" && (
                <Link
                  to="/OwnerDashboard"
                  className="text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-full transition hidden sm:block"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="text-xs font-semibold text-gray-500 hover:text-red-500 px-2 py-2 transition hidden sm:block"
              >
                Logout
              </button>
            </>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative p-2 hover:bg-orange-50 rounded-full transition">
            <img src={cart} alt="cart" className="w-6 h-6 object-contain" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 mt-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search clothes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="bg-transparent outline-none text-sm text-gray-700 w-full"
            />
          </div>

          {/* Mobile Nav Links */}
          <ul className="mt-3 flex flex-col gap-1">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-semibold transition
                    ${isActive(path) ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth */}
          {token && (
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <Link
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 px-4 py-2"
              >
                👤 {name || "Profile"}
              </Link>
              {role === "owner" && (
                <Link
                  to="/OwnerDashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-gray-700 px-4 py-2"
                >
                  📊 Owner Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-left text-sm font-semibold text-red-500 px-4 py-2"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
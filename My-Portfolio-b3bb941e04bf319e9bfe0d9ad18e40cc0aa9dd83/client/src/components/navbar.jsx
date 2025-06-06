import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <div>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out
          ${
            scroll
              ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-blue-500/10"
              : "bg-transparent"
          }
          ${menuOpen ? "bg-slate-900 shadow-lg" : ""}`}
      >
        <div className="max-w-7xl sm:px-6 lg:px-8 px-4 mx-auto">
          <div className="md:h-20 flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="group flex items-center space-x-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="md:text-5xl bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent">
                Sl.
              </span>
              <div className="hidden md:block h-8 w-0.5 bg-blue-500/30 rounded-full" />
            </a>

            {/* Desktop Navigation */}
            <div className="md:flex items-center hidden space-x-8">
              <NavLink href="/" icon="home">
                Home
              </NavLink>
              <NavLink href="/about" icon="about">
                About
              </NavLink>
              <NavLink href="/Project" icon="projects">
                Projects
              </NavLink>
              <NavLink href="/resume" icon="resume">
                Resume
              </NavLink>
              <NavLink
                href="https://github.com/SuhasLingam/Portfolio-in-progress"
                icon="fork"
                external
                className="bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 ml-4 rounded-lg"
              >
                Fork
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="md:hidden hover:text-white hover:bg-blue-500/10 focus:outline-none p-2 text-gray-300 transition-all duration-300 rounded-lg"
              aria-label="Toggle menu"
            >
              {menuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed left-0 right-0 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-md border-blue-500/10 px-4 pt-2 pb-4 space-y-2 border-t shadow-xl">
            <MobileNavLink
              href="/"
              icon="home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              href="/about"
              icon="about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              href="/Project"
              icon="projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              href="/resume"
              icon="resume"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </MobileNavLink>
            <MobileNavLink
              href="https://github.com/SuhasLingam/Portfolio-in-progress"
              icon="fork"
              external
              onClick={() => setMenuOpen(false)}
              className="bg-blue-500/10 hover:bg-blue-500/20 rounded-lg"
            >
              Fork
            </MobileNavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Navigation link components
const NavLink = ({ href, children, icon, external, className = "" }) => (
  <a
    href={href}
    className={`group hover:text-white flex items-center space-x-3 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
  >
    <span className="group-hover:text-blue-400 text-blue-500 transition-colors duration-300">
      {getIcon(icon)}
    </span>
    <span className="relative text-lg font-medium tracking-wide">
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
    </span>
  </a>
);

const MobileNavLink = ({
  href,
  children,
  icon,
  external,
  className = "",
  onClick,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`hover:text-white hover:bg-blue-500/10 flex items-center px-4 py-2.5 space-x-3 text-base font-medium text-gray-300 transition-all duration-300 rounded-lg ${className}`}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
  >
    <span className="text-blue-500 transition-colors duration-300">
      {getIcon(icon)}
    </span>
    <span className="tracking-wide">{children}</span>
  </a>
);

// Helper function to get icons - now with larger icons
const getIcon = (name) => {
  const iconProps = {
    className: "w-6 h-6",
    strokeWidth: 1.75,
  };

  switch (name) {
    case "home":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      );
    case "about":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      );
    case "projects":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      );
    case "resume":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      );
    case "fork":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 6c0 1.657-1.343 3-3 3S8 7.657 8 6s1.343-3 3-3 3 1.343 3 3ZM12 19c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12c0 1.657-1.343 3-3 3S3 13.657 3 12s1.343-3 3-3 3 1.343 3 3ZM21 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Navbar;

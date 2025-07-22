import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routers/RouterPath';

const navLinks = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.SKILLS, label: 'Skills' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.CONTACT, label: 'Contact Me' },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-black px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-purple-500">Welcome</span>{' '}
        <span className="text-white">Visitor</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="flex justify-center gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-white font-semibold text-[1.1rem] transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'underline font-bold'
                    : 'hover:underline'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        download
        className="bg-purple-500 text-white font-bold text-base px-6 py-2 rounded-full ml-4 transition-all duration-200 hover:bg-purple-600"
      >
        Download CV
      </a>
    </header>
  );
};

export default Header;

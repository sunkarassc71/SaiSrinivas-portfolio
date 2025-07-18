import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();
  // Scroll to top when the name is clicked
  const loadHomepage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navLinks = [
    { to: '/projects', label: 'My work' },
    { to: '/experience', label: 'Experience' },
    { to: '/aboutme', label: 'About me' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
          <h1
            className="text-2xl font-bold font-serif cursor-pointer group"
            onClick={loadHomepage}
            role="button"
            tabIndex={0}
            aria-label="Go to top"
          >
            <Link to="/" className="text-white no-underline">Sunkara Sai Srinivas Chowdary</Link>
          </h1>
        </div>
        <nav className="space-x-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-white no-underline relative inline-block group/nav ${location.pathname === link.to ? 'font-extrabold' : ''}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-400 to-violet-400 transition-transform origin-left duration-300 ${location.pathname === link.to ? 'scale-x-100' : 'scale-x-0'} group-hover/nav:scale-x-100`}></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

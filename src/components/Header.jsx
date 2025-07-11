import { Link } from 'react-router-dom';

export default function Header() {
  // Scroll to top when the name is clicked
  const loadHomepage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold font-serif cursor-pointer"
          onClick={loadHomepage}
          role="button"
          tabIndex={0}
          aria-label="Go to top"
        >
          <Link to="/" className="text-white no-underline">Sunkara Sai Srinivas Chowdary</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/projects" className="hover:underline">My work</Link>
          <Link to="/experience" className="hover:underline">Experience</Link>
          <Link to="/aboutme" className="hover:underline">About me</Link>
        </nav>
      </div>
    </header>
  );
}

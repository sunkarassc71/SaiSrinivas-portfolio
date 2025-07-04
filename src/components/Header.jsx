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
          Sunkara Sai Srinivas Chowdary
        </h1>
        <nav className="space-x-4">
          <a href="#projects" className="hover:underline">My work</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#aboutme" className="hover:underline">About me</a>
        </nav>
      </div>
    </header>
  );
}

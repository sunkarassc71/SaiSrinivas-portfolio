export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-violet-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">Sunkara Sai Srinivas Chowdary</h1>
        <nav className="space-x-4">
          <a href="#projects" className="hover:underline">My work</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#aboutme" className="hover:underline">About me</a>
        </nav>
      </div>
    </header>
  );
}

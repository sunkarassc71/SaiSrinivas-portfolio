import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className= "text-violet-600 py-6 text-center">
      <p>© {currentYear} Sunkara Sai Srinivas Chowdary. Built with React & Tailwind CSS.</p>
      <address className="not-italic flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-4">
        <span className="flex items-center gap-1">
          <FontAwesomeIcon className="inline-block" icon={faEnvelope} />
          <a className="hover:underline cursor-pointer" href="mailto:saisrinivas.sunkara@outlook.com">saisrinivas.sunkara@outlook.com</a>
        </span>
        <span className="hidden md:inline">|</span>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon className="inline-block" icon={faGithub} />
          <a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://github.com/sunkarassc71">saisrinivas</a>
        </span>
        <span className="hidden md:inline">|</span>
        <span><FontAwesomeIcon className="inline-block" icon={faPhone} /> +91 9966-119-332</span>
      </address>
    </footer>
  );
}

import {FaPhoneAlt ,FaLinkedin,FaCloudDownloadAlt } from 'react-icons/fa'
import resume from '../assets/SaiSrinivasSunkaraResume.pdf';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative text-center py-20 text-black bg-gradient-to-b">
      <h3 className="text-5xl font-bold mb-4 text-violet-500 animate-bounce-slow">Hey there! 😍</h3>
      <div className="text-2xl font-bold text-violet-600 mb-4">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1000,
            "React & Angular Developer",
            1000,
            "Spring Boot | MySQL",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <p className="text-lg max-w-4xl mx-auto mb-6">Crafting elegant, scalable web solutions with a blend of <span className='text-violet-500 font-medium'>React, Angular, Java, Spring Boot, and MySQL</span>. Turning ideas into interactive experiences — one line of code at a time.</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <a
          type=".pdf"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow transition flex items-center gap-2 hover:text-white hover:bg-gradient-to-r from-blue-500 to-violet-600"
        >
          <FaCloudDownloadAlt /> Resume
        </a>
        <a
          href="#contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow transition flex items-center gap-2 hover:text-white hover:bg-gradient-to-r from-blue-500 to-violet-600"
        >
          <FaPhoneAlt /> Contact
        </a>
        <a
          href="https://www.linkedin.com/in/sai-srinivas-chowdary-sunkara-3073b5122/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow transition flex items-center gap-2 hover:text-white hover:bg-gradient-to-r from-blue-500 to-violet-600"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

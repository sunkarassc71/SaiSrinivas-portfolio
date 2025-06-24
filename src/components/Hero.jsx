import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/SaiSrinivasSunkaraResume.pdf';
// import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="text-center py-20 text-black">
      <h3 className="text-5xl font-bold mb-4 text-violet-500">Hey there! 😍</h3>
      {/* <div className="text-2xl font-bold text-violet-600">
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
      </div> */}
      <p className="text-lg max-w-4xl mx-auto">Crafting elegant, scalable web solutions with a blend of <span className='text-violet-500 font-medium'>React, Angular, Java, Spring Boot, and MySQL</span>.
        Turning ideas into interactive experiences — one line of code at a time.</p>
      <div className="mt-6">
        <a type=".pdf" href={resume} target="_blank" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:text-white hover:bg-gradient-to-r from-blue-500 to-violet-600"><FontAwesomeIcon icon={faArrowDown} /> Resume</a>
        <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 ml-2 rounded-lg font-semibold hover:bg-gray-100 transition  hover:text-white hover:bg-gradient-to-r from-blue-500 to-violet-600">
          Contact <FontAwesomeIcon icon={faPhone} />
        </a>
        <a
          href="https://www.linkedin.com/in/sai-srinivas-chowdary-sunkara-3073b5122/" // replace with your real LinkedIn URL
          target="_blank"
          className="bg-white text-indigo-600 px-6 py-3 ml-2 rounded-lg font-semibold hover:text-white hover:bg-gradient-to-r from-blue-500 to-violet-600 inline-flex items-center gap-2"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
}

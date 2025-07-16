import { FaReact,FaJava  } from 'react-icons/fa';
import { SiAngular, SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
  { name: 'Java', icon: <FaJava className="text-yellow-700" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
  { name: 'Hibernate', icon: <SiHibernate className="text-green-800" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-b">
      <h3 className="text-3xl font-bold text-center mb-10 text-indigo-600"><span className="text-violet-500">Skills</span></h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto text-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-110 transition duration-300 cursor-pointer relative group"
          >
            {skill.icon}
            {skill.name}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-indigo-600 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

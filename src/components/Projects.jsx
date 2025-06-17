import projectImage1 from '../assets/Project1.png'
import projectImage2 from '../assets/Project2.png'
import projectImage3 from '../assets/Project3.png'

export default function Projects() {
  const projects = [
    {
      projectName: "Employee Portal",
      description: "A secure and integrated internal platform designed to efficiently manage employee records, leave applications, project tracking, expense reporting, billing, asset management, service desk operations, and organizational announcements.",
      company: "System Soft Technologies",
      image: projectImage1,
      frontend: "Angular, BootStrap, CSS",
      backend: "Java, Spring Boot, Hibernate",
      database: 'MySQL, MongoDB'
    },
    {
      projectName: "Portfolio Site",
      description: "A digital showcase of my journey — blending projects, skills, education, experience, and ways to connect — all crafted to tell my story in code and design.",
      company: "Own Project",
      image: projectImage2,
      frontend: "React, Tailwind CSS"
    }
  ];
  return (
    <section id="projects" className="py-16 px-4">
      <h3 className="text-3xl font-bold text-center mb-10 text-indigo-600"><span className="text-violet-500">My Work</span></h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <h4 className="text-xl font-semibold mb-2 text-blue-500">{project.projectName}</h4>
            <p className="text-base max-w-screen-lg text-gray-700">{project.description}</p>
            {/* <p className="text-blue-500">Company : <span className="text-violet-700 font-bold">{project.company}</span></p> */}
            <p className="text-blue-500 mt-1">Frontend : <span className="text-violet-700 font-medium">{project.frontend}</span></p>
            {project?.backend && (<p className="text-blue-500 mt-1">Backend : <span className="text-violet-700 font-medium">{project?.backend}</span></p>)}
            {project?.database && (<p className="text-blue-500 mt-1">Database : <span className="text-violet-700 font-medium">{project?.database}</span></p>)}
          </div>
        ))}
      </div>
    </section>
  );
}

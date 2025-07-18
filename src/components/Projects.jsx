import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b">
      <h3 className="text-3xl font-bold text-center mb-10 text-indigo-600"><span className="text-violet-500">My Work</span></h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-lg p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer group">
            <img src={project.image} alt={project.projectName} className="w-24 h-24 object-cover rounded-full border-4 border-indigo-100 mb-4 z-10 group-hover:scale-110 transition duration-300" />
            <h4 className="text-xl font-semibold mb-1 text-blue-500">{project.projectName}</h4>
            <p className="text-sm text-gray-500 mb-2">{project.company}</p>
            <p className="text-base max-w-screen-lg text-gray-700 mb-2">{project.description}</p>
            <p className="text-blue-500 mt-1">Frontend: <span className="text-violet-700 font-medium">{project.frontend}</span></p>
            {project?.backend && (<p className="text-blue-500 mt-1">Backend: <span className="text-violet-700 font-medium">{project?.backend}</span></p>)}
            {project?.database && (<p className="text-blue-500 mt-1">Database: <span className="text-violet-700 font-medium">{project?.database}</span></p>)}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-violet-600 transition">View Project</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

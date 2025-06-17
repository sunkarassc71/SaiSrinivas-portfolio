export default function Projects() {
  const projects = [
  {
    projectName: "Employee Portal",
    description: "A secure internal platform for managing employee records, leaves, Project details, Expenses, Bill Payments, Assets, Service Desk and announcements.",
    company:"System Soft Technologies"
  },
  {
    projectName: "Portfolio Site",
    description: "A personal website showcasing projects, skills,Education, Experience and contact information.",
    company:"Own Project  "
  },
  {
    projectName: "Portfolio Site",
    description: "A personal website showcasing projects, skills,Education, Experience and contact information for Hem Chand Meka.",
    company:"Own Project  "
  }
];
  return (
    <section id="projects" className="py-16 px-4">
      <h3 className="text-3xl font-bold text-center mb-10 text-indigo-600"><span className="text-violet-500">My Work</span></h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer">
            <h4 className="text-xl font-semibold mb-2 text-blue-500">{project.projectName}</h4>
            <p className="text-gray-700">{project.description}</p>
            <p className="text-blue-500">Company : <span className="text-violet-700 font-bold">{project.company}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

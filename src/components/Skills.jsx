export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4">
      <h3 className="text-3xl font-bold text-center mb-10 text-indigo-600"><span className="text-violet-500">Skills</span></h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto text-center">
        {["React", "Angular", "Java", "Spring Boot","Hibernate", "MySQL", "MongoDB","Tailwind CSS"].map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition 300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

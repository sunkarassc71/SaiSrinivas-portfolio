import projectImage1 from '../assets/Project1.png'
import projectImage2 from '../assets/Project2.png'
import projectImage3 from '../assets/Project3.png'

const projects = [
  {
    projectName: "Employee Portal",
    description: "A secure and integrated internal platform designed to efficiently manage employee records, leave applications, project tracking, expense reporting, billing, asset management, service desk operations, and organizational announcements.",
    company: "System Soft Technologies",
    image: projectImage1,
    frontend: "Angular, BootStrap, CSS",
    backend: "Java, Spring Boot, Hibernate",
    database: 'MySQL, MongoDB',
    link: null
  },
  {
    projectName: "Portfolio Site",
    description: "A responsive digital portfolio highlighting my projects, skills, education, and experience — designed to showcase my journey and make it easy to connect with site visitors.",
    company: "Own Project",
    image: projectImage2,
    frontend: "React, Tailwind CSS",
    backend: "Node.js with Express",
    database: 'MongoDB (via Mongoose ODM)',
    link: "https://github.com/sunkarassc71/SaiSrinivas-portfolio"
  }
];

export default projects;

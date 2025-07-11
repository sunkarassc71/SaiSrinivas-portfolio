import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import CustomerDetails from './components/CustomerDetails';

function App() {

  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          {/* <AboutMe />
          <Projects />
          <Experience /> */}
          <Education />
          <Skills />
          <CustomerDetails />
        </>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

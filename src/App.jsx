import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {

  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  )
}

export default App

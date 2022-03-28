import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}

export default App;

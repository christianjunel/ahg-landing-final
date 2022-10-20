import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar';
import HeroImage from './components/HeroImage';
import Programs from './components/Programs';
import ImageCarousel from './components/ImageCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroImage />
      <Programs />
      <ImageCarousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

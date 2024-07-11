import './App.css';

// import '../public/css/styles.css';
import Nav from './components/Nav';
import Header from './components/Header';
import PortFolio from './components/PortFolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <PortFolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

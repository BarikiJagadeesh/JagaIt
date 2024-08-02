
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Works from './Components/OurWorks/Works';
import ReactGA from 'react-ga';
import { useEffect } from 'react';


// Initializing the google analysis
ReactGA.initialize('G-5Z376GMR57')


const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};


function App() {
  
  
  return (
   <Router>
    <PageTracker />
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Contact/>
        <Works/>
        <Footer/>
    </div>
   </Router>
  );
}

export default App;

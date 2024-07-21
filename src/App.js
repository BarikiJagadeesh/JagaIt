
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
   <Router>
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
   </Router>
  );
}

export default App;

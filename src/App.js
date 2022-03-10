
import './App.css';
import About from './PortfolioContainer/AboutMe/About';
import Blog from './PortfolioContainer/Blog/Blog';
import Contact from './PortfolioContainer/ContactMe/Contact';
import Home from './PortfolioContainer/Home/Home';
import Service from './PortfolioContainer/Service/Service';

function App() {
  return (
    <div className="App"> 
     <Home/>
     <About/>
     <Service/>
     <Blog/>
     <Contact/>
    </div>
  ); 
}

export default App;

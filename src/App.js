import NavBar from "./Components/NavigationBar/NavBar";
import Intro from './Components/Introduction/Intro'
import Service from './Components/Services/service'
import Projects from './Components/Projects/project'
import Training from './Components/Training/training'
import Contact from './Components/Contact/contact'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Service/>
      <Projects/>
      <Training/>
      <Contact/>
    </div>
  );
}

export default App;
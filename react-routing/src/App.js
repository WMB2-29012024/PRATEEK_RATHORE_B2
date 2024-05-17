import logo from './logo.svg';
import './App.css';
import About from "./pages/About"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from './pages/Course';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Course/:coursename' element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

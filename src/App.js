import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import About from './pages/About.js';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Play from './pages/Play';

function App() {
  return (
    <Router basename="/">
      <div id="app">
        <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/play" element={<Play />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

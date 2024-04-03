import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero.jsx";
import Tools from "./Components/Tools/Tools.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Cgpa from "./Components/Tools/CpgaCounter/Cgpa.jsx";
import Card from "./Components/Card/Card.jsx";
import WordCounter from "./Components/Tools/WordConter/WordCounter.jsx";
import CaseConverter from "./Components/Tools/CaseConverter/CaseConverter.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App() {
  return (
    <div className="p-0 m-0 bg-gradient-to-r from-gray-900 to-gray-700  md:h-full min-h-screen  overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/tools" element={<Tools />}>
            <Route path="" element={<Card />} />
            <Route path="cgpa-counter" element={<Cgpa />} />
            <Route path="word-counter" element={<WordCounter />} />
            <Route path="case-converter" element={<CaseConverter />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

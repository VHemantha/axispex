import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import ContactPage from './Components/ContactUs';

function App() {
  return (
    <Router>
    <div>
        <header>
        <NavBar />
        </header>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
      </main>
      <footer>
       <Footer />
      </footer>
    </div>
    </Router>
  );
}

export default App;


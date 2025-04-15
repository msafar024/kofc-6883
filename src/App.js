import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Faith from './pages/Faith';
import Directory from './pages/Directory'; // Import the new Directory page
import ScrollToTop from './components/ScrollToTop';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Add pt-20 to offset the fixed navbar height (h-20) only on non-home pages */}
        <main className={`flex-grow${isHome ? '' : ' pt-20'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faith" element={<Faith />} />
            <Route path="/directory" element={<Directory />} /> {/* Add the route for Directory */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

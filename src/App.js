import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MessMenu from './components/MessMenu';
import CampusMap from './components/CampusMap';
import Clubs from './components/Clubs';
import Forum from './components/Forum';
import Events from './components/Events';
import ShopListings from './components/ShopListings';
import About from './components/About';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mess-menu" element={<MessMenu />} />
        <Route path="/campus-map" element={<CampusMap />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop-listings" element={<ShopListings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
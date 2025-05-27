import React from 'react';

import './App.css';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUsArea from './components/ContactUsArea';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='bg-black relative'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<ContactUsArea />} />
                    <Route path="/contact-us" element={<ContactUsArea />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;

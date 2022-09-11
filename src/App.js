import React from 'react'
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatSection from './components/StatSection';
import Offer from "./components/Offer";
import Working from './components/Working';
import Section5 from './components/Section5';
import BlogSection from './components/BlogSection';
import Download from './components/Download';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navigation/>
     <HeroSection/>
     <StatSection/>
     <Offer/>
    <Working></Working>
    <Section5></Section5>
    <BlogSection/>
    <Download/>
    <Footer/>
    </div>
  );
}

export default App;

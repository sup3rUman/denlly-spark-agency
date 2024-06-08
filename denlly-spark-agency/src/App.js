import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

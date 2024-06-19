import React from 'react';
import Header from './components/JSX/Header';
import Home from './components/JSX/Home';
import Services from './components/JSX/Services';
import Contact from './components/JSX/Contact';
import Footer from './components/JSX/Footer';
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

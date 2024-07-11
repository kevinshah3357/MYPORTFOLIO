import React from 'react';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectShowcase from './components/ProjectShowcase';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

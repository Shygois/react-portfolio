import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';


function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
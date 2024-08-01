// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Component/Header';
import SignInSection from './Component/SignInSection';
import FlexDiv from './Component/FlexDiv';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <main className="font-sans bg-whitesmoke overflow-scroll">
        <Header />
        <SignInSection />
        <FlexDiv />
        <Footer />
      </main>
    </Router>
  );
}

export default App;

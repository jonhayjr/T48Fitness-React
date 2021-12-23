import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/* Import Components */
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Error from './components/Error';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header name="T48 Fitness"/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer name="T48 Fitness"/>
      </div>
    </Router>
  );
}

export default App;

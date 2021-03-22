import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Joke from './components/Joke';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Joke} />
          <Route path="/about" exact component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;

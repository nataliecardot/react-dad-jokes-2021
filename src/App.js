import React from 'react';
import Joke from './components/Joke';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Joke />
      </div>
    </div>
  );
}

export default App;

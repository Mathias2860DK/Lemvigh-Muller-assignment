import React from 'react';
import './App.css';
import StoryPage from './components/StoryPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <StoryPage/>
    </div>
  );
}

export default App;

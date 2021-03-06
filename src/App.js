import React from 'react'

import Main from './container/Main'
import Footer from './components/Footer/Footer'
import NavigationBar from './container/NavigationBar/NavigationBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

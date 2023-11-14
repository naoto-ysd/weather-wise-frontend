import React from 'react';
import Hello from './components/hello';
import Weather from './weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hello title = 'hogehoge'/>
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;

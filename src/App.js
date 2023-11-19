import React from 'react';
import Hello from './components/hello';
import Weather from './components/weather';

import './App.css';

function App() {
  let titles = ['hogehoge','fugafuga']
  titles.forEach(title => { console.log(title) })

  return (
    <div className="App">
      <Hello title = { 'hogehogeあああ' }/>
      <Hello title = { 'fugafuga' }/>
      <header className="App-header">
        <Weather />
      </header>
    </div>
  )
}

export default App;

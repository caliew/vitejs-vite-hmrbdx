import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { flattenArray,fibonacci } from './Algorithm.js';
import FetchData from './FetchData';

function App() {

  return (
    <div className="App">
      QUICK CODE TEST...
      <hr/>
      RECURSIVE <br/>
      FIBONACCI (5) {fibonacci(5).toString()}
      <br/>
      <FetchData limits={5}/>
    </div>
  )
}

export default App

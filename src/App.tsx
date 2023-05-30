import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { flattenArray,fibonacci } from './Algorithm.js';
import FetchData from './FetchData';
import AxiosData from './AxiosData';

function App() {

  return (
    <div className="App">
      QUICK CODE TEST...
      <hr/>
      RECURSIVE <br/>
      FIBONACCI (5) {fibonacci(5).toString()}
      <hr/>
      <FetchData limits={3}/>
      <hr/>
      <AxiosData limits={3}/>
    </div>
  )
}

export default App

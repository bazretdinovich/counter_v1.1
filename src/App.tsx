import React from 'react';
import './App.css';
import {Screen} from "./components/screen/Screen";

function App() {
  return (
    <div className="App">
      <Screen type={"settings"}/>
      <Screen type={"counter"}/>
    </div>
  );
}

export default App;

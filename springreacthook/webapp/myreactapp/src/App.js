import React from 'react';
import './App.css'
import {Home} from './Components/Home';
import {LogReg} from "./Components/LogReg";
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={LogReg}/>
            <Route path="/home" component={Home}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
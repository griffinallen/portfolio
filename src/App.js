import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import ConstructionList from './ConstructionList';
import Map from './components/Map';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import React from 'react';
import { useState, useEffect } from 'react';
import reactDom from 'react-dom';

const theme = createTheme({

});
 
function App() {
  
  //const [construction, setConstruction] = useState(['Construction 1', 'Construction 2'])
  //<ConstructionList construction={construction} />

  useEffect(() => {
    const fetchConstruction = async () => {
      const res = await fetch('https://511on.ca/api/v2/get/roadconditions')
      const data = await res
      console.log(data)
    }
    //fetchConstruction()
  })

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar/>
          <header className="App-header">
            <Route path='/' exact component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/portfolio' component={Portfolio} />
          </header>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
  
}

export default App;

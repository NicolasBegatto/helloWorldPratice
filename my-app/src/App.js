import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Nicolas Begatto
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        ----------------------------------------------

        <Button variant="contained"
         href="https://www.google.com"
         target="_blank"
         rel="noopener noreferrer"
         >Find me Here</Button>
        
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
       
       
      </header>
    </div>
  );
}

export default App;

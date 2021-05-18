import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


const initialFormValues = { leaderName: '', color: '', role: '' }


function App() {


    const leaders = [
          { leaderName: 'Alph', color: 'blue', role: 'Technician', email: 'alph@koppai.com'},
          { leaderName: 'Brittany', color: 'pink', role: 'Botanist', email: 'brittany@koppai.com'},
          { leaderName: 'Charlie', color: 'green', role: 'Captain', email: 'charlie@koppai.com'},
    ]
  
  
    

    function JoinTheTeam () {
      const [team, setTeam] = useState(leaders)
      const [formValues, setFormValues] = useState(initialFormValues)
  
      // const
    }
  


  JoinTheTeam()
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;


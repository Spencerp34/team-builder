import './App.css';
import React, { useState } from 'react'
// import Form from './components/Form'

const leaders = [
          { leaderName: 'Alph', color: 'blue', role: 'Technician', email: 'alph@koppai.com'},
          { leaderName: 'Brittany', color: 'pink', role: 'Botanist', email: 'brittany@koppai.com'},
          { leaderName: 'Charlie', color: 'green', role: 'Captain', email: 'charlie@koppai.com'},
    ]
const initialFormValues = { leaderName: '', color: '', role: '', email: ''}


function App() {

    
  const [team, setTeam] = useState(leaders)
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = (event) => {
    const { name , value } = event.target //WHAT DOES THIS DO??
    setFormValues({...formValues, [name]: value})
  }

  const submit = (event) => {
    event.preventDefault()
    const newLeader = {
      leaderName: formValues.leaderName.trim(),
      color: formValues.color.trim(),
      role: formValues.role.trim(),
      email: formValues.email.trim(),
    }
    setTeam([...team, newLeader])
    setFormValues(initialFormValues)
  }
  
  return (
    <div className="App">
      <header className="Text-intro">
        <h1>Join the Team!</h1>
        <h3>
          Adventure is out there! Please add a new Explorer:
        </h3>
      </header>
      <div className='currentTeam'>
        <h2>Current Team</h2>
        {team.map((teammate, idx) => {
        return (
          <div key={idx}>
            {teammate.leaderName} is the team {teammate.role}
          </div>
        )
      })}
      </div>
      

      <div className='formHolder'>

      <form onSubmit={submit} className='forms'>
        <input 
          type='text'
          name='leaderName'
          placeholder='Leaders Name'
          onChange={change}
          value={formValues.leaderName}
        />
        <input 
          type='text'
          name='color'
          placeholder='Leaders Color'
          onChange={change}
          value={formValues.color}
        />
        <input 
          type='text'
          name='role'
          placeholder='Leaders Role'
          onChange={change}
          value={formValues.role}
        />
        <input 
          type='email'
          name='email'
          placeholder='Leaders email'
          
          onChange={change}
          value={formValues.email}
        />
        <button>Submit</button>
      </form>
      </div>

    </div>
  );
}

export default App;


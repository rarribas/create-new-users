import './App.css'
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
function App() {

  const [usersList, setUsersList] = useState([{
    name: 'Raul Arribas',
    job: "Frontend Developer",
    country: "Spain",
    age: "40",
    net_worth: "1200"
  }]);

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const userItem = {
      name: ev.target.elements.name.value,
      job: ev.target.elements.job.value,
      country: ev.target.elements.country.value,
      age: ev.target.elements.age.value,
      net_worth: ev.target.elements.net_worth.value
    };

    setUsersList([
      ...usersList,
      userItem
    ])
  };

  const getListOfUsers = () =>{
    return usersList.map((user)=>{
      return <li key={user.name}>
        <h4>{user.name}</h4>
      </li>
    })
  }

  return (
    <>
        <div>
        <h1>Create New Users</h1>
        <form onSubmit={onFormSubmit}>
          <div>
            <Input text="Name" name="name" type="text"/>
            <Input text="Job" name="job" type="text"/>
            <Input text="Country" name="country" type="text"/>
            <Input text="Age" name="age" type="number"/>
            <Input text="Net Worth" name="net_worth" type="number"/>
          </div>
          <div>
            <Button text="Submit" type="submit"/>
          </div>
        </form>
      </div>
      <div>
        <ul>{getListOfUsers()}</ul>
      </div>
    </>
    
  )
}

export default App

import './App.css'
import Form from './components/Form';
import Input from './components/Input';
import { useState } from 'react';
function App() {

  // TODO: Add 3 more users here
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
        <h4>{`${user.name} - ${user.country}`}</h4>
        <p><span>Age:</span>{user.age} / <span>Job:</span>{user.job} / <span>Net Worth:</span>{user.net_worth}</p>
      </li>
    })
  }

  return (
    <>
      <header>
        <h1>Create New Users</h1>
      </header>
      <section>
        <div>
          <Form onFormSubmit={onFormSubmit}>
            <div>
              <Input text="Name" name="name" type="text"/>
              <Input text="Job" name="job" type="text"/>
              <Input text="Country" name="country" type="text"/>
              <Input text="Age" name="age" type="number"/>
              <Input text="Net Worth" name="net_worth" type="number"/>
            </div>
          </Form>
        </div>
        <div>
          <ul>{getListOfUsers()}</ul>
        </div>  
      </section>
      
    </>
    
  )
}

export default App

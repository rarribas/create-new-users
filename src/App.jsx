import './App.css'
import Form from './components/Form';
import Input from './components/Input';
import UserList from './components/List';
import {users} from './data/users';
import { useState } from 'react';
function App() {

  const [usersData, setUsersData] = useState(users);
  
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

    setUsersData([
      ...usersData,
      userItem
    ])
  };

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
          <UserList listData={usersData}/>
        </div>  
      </section>
      
    </>
    
  )
}

export default App

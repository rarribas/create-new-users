import './App.css'
import Form from './components/Form';
import UserList from './components/List';
import FormMessage from './components/FormMessage';
import {users} from './data/users';
import { useState, useEffect, useRef } from 'react';
function App() {
  const [usersData, setUsersData] = useState(users);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if(submitStatus === "success"){
      console.log("HERE???");
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  },[submitStatus]);

  const inputElements = [{
    name: "name",
    type: "text",
    text: "Name",
  },{
    name: "job",
    type: "text",
    text: "Job",
  },{
    name: "country",
    type: "text",
    text: "Country",
  },{
    name: "age",
    type: "number",
    text: "Age",
  },{
    name: "net_worth",
    type: "number",
    text: "Net Worth",
  }];
  
  const getSuccessMessage = () => {
    return <FormMessage  message="Success! New User Added"/>
  };

  const getErrorMessage = () => {
    return <FormMessage  message={formError}/>
  };

  const getEmptyValues = (formElements) => {
    
    const formElementsArray = Array.from(formElements); // Convert HTMLFormControlsCollection to an array

    return formElementsArray.filter((element) => element.name && element.value.trim() === '')
      .map((element) => element.name);
  }

  const getInputs = () => {
    return inputElements.map((input) =>{ 
      return (
        <div className="form-control" key={`input_${input.name}`}>
          <label htmlFor={input.name}>{input.text}:</label>
          <input 
            type={input.type} 
            name={input.name} 
            id={input.name}
          />
        </div>
      )
    })
  }

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const emptyElements = getEmptyValues(ev.target.elements); 

    if(emptyElements.length > 0){
      setFormError(`Elements ${emptyElements.join(', ')} cannot be empty`);
      setSubmitStatus("error")
      return;
    } 

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

    setFormError(null);
    setSubmitStatus("success");
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
              {getInputs()}
            </div>
          </Form>
          {submitStatus === 'success' && getSuccessMessage()}
          {submitStatus === 'error' && getErrorMessage()}
        </div>
        <div>
          <UserList listData={usersData}/>
        </div>  
      </section>
      
    </>
    
  )
}

export default App

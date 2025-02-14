import './App.css'
import Form from './components/Form';
import UserList from './components/List';
import FormMessage from './components/FormMessage';
import {users} from './data/users';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [usersData, setUsersData] = useState(users);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formErrors, setFormErrors] = useState([]);
  const formRef = useRef(null);

  // TODO: Refactor, move this to a different file

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
  

  useEffect(() => {
    if(submitStatus === "success"){
      if(formRef.current){
        formRef.current.reset();
      }
      
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  },[submitStatus]);

  const isValidField = (inputName) => {
    if(formErrors.length === 0) return true;
    return !formErrors.includes(inputName);
  };

  // TODO: This file is getting too big, we could move this to helpers
  // Maybe create hooks??

  const getEmptyValues = (formElements) => {
    
    const formElementsArray = Array.from(formElements); // Convert HTMLFormControlsCollection to an array

    return formElementsArray.filter((element) => element.name && element.value.trim() === '')
      .map((element) => element.name);
  }

  const getMessage = (message, variant) => {
    return <FormMessage  message={message} variant={variant}/>
  };

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
          {!isValidField(input.name) && getMessage(`${input.text} cannot be empty`, "error")}
        </div>
      )
    })
  }

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    const emptyElements = getEmptyValues(ev.target.elements); 

    if(emptyElements.length > 0){
      setFormErrors(emptyElements);
      setSubmitStatus("error")
      return;
    } 

    // Note: I could reset the form straight away here with ev
    // ev.form.resetForm();
    const userItem = {
      id: uuidv4(),
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

    setFormErrors([]);
    setSubmitStatus("success");
  };

  return (
    <>
      <header>
        <h1>Create New Users</h1>
      </header>
      <section>
        <div>
          <Form ref={formRef} onFormSubmit={onFormSubmit}>
            <div>
              {getInputs()}
            </div>
          </Form>
          {submitStatus === 'success' && getMessage("Success! The user has been added", "success")}
        </div>
        <div>
          <UserList listData={usersData} setUsersData={setUsersData}/>
        </div>  
      </section>
      
    </>
    
  )
}

export default App

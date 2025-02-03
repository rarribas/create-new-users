import './App.css'
import Button from './components/Button';
import Input from './components/Input';
function App() {

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    console.log(ev.target.elements.name.value);
    console.log(ev.target.elements.job.value);
    console.log(ev.target.elements.country.value);
    console.log(ev.target.elements.age.value);
    console.log(ev.target.elements.net_worth.value);
  };

  return (
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
  )
}

export default App

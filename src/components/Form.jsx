import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Form({onFormSubmit, children}){
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        {children}
      </div>
      <div>
        <Button text="Submit" type="submit"/>
      </div>
    </form>
  )
};
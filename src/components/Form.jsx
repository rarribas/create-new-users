import Button from "./Button";
import styles from "./Form.module.scss";

// eslint-disable-next-line react/prop-types
export default function Form({onFormSubmit, children}){
  return (
    <form className={styles['form']} onSubmit={onFormSubmit}>
      <div>
        {children}
      </div>
      <div>
        <Button text="Submit" type="submit"/>
      </div>
    </form>
  )
};
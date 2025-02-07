import Button from "./Button";
import styles from "./Form.module.scss";
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Form({onFormSubmit, children}){
  const [isSaving, setIsSaving] = useState(false);

  const afterSubmit = (ev) => {    
    onFormSubmit(ev);
    setIsSaving(false);
  };

  return (
    <form className={styles['form']} onSubmit={afterSubmit}>
      <div>
        {children}
      </div>
      <div>
        <Button 
          text="Submit" 
          type="submit"
          disabled={isSaving} 
          onClick={() => setIsSaving(true)}
        />
      </div>
    </form>
  )
};
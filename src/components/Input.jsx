import { useState } from "react"
import styles from "./Input.module.scss"
// eslint-disable-next-line react/prop-types
export default function Input({type, name, text, inputValue = ""}) {
  const [value, setValue] = useState(inputValue);
  
  const onInputChange = (ev) => setValue(ev.target.value);

  return (
    <div className={styles['form-control']}>
      <label htmlFor={name}>{text}:</label>
      <input 
        type={type} 
        value={value} 
        name={name} 
        id={name}
        onChange={onInputChange}
      />
    </div>
    
  )
}
import { useState } from "react"
export default function Input({type, name, text}) {
  const [value, setValue] = useState("");
  
  const onInputChange = (ev) => setValue(ev.target.value);

  return (
    <div>
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
import { useState } from 'react';
import './Forms.css';

export default function GenericForm(props) {

  const [value, setValue] = useState(props.value);

  const handleInputChange = e => {
    console.log('*** handleInputChange', e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("*** handleSubmit", data);
  }
  
  return (
    <form 
      className='generic-form' 
      onSubmit={handleSubmit}>
        <label 
          for="post-text" 
          className="title-form">
            {props.titleform}
        </label>
        <input 
          className='text-form' 
          id={props.id} 
          type={props.type} 
          name={props.name} 
          placeholder={props.placeholder}
          onChange={handleInputChange}
          value={value} />
    </form>
  );
  
}
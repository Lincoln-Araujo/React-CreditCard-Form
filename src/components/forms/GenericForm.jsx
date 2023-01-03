import { useState } from 'react';
import './Forms.css';

export default function GenericForm(props) {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("*** handleSubmit", data);
  }
  
  return (
    <div className='form-container'>

      <form 
        className='generic-form' 
        onSubmit={handleSubmit}>
        
        <label 
          for="post-text" 
          className="title-form">
              cardholder name
        </label>
        <input 
          className='text-form' 
          id="cardholder name" 
          type="text"
          name="cardholder name"
          placeholder="e.g. Jane Applessed"
        />
      </form>
      
    </div>
  );
  
}
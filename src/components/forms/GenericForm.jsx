import { useForm } from 'react-hook-form';
import CTAButton from '../button/CTAButton';
import './Forms.css';

export default function GenericForm(props) {

  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  };
  
  return (
    <div className='form-container'>

      <form 
        className='generic-form' >        
        <label 
          for="post-text" 
          className="title-form">
              cardholder name
        </label>
        <input 
          className='text-form' 
          type="text"
          name="cardholder name"
          placeholder="e.g. Jane Applessed"
          { ...register("cardholder name") }
        />
      </form>

      <form 
        className='generic-form' >        
        <label 
          for="post-text" 
          className="title-form">
              card number
        </label>
        <input 
          className='text-form' 
          type="text"
          name="card number"
          placeholder="XXXX XXXX  XXXX XXXX"
          { ...register("card number") }
        />
      </form>

      <CTAButton onClick={() => handleSubmit(onSubmit)()} nameButton="Confirm"/>
    </div>
  );
  
}
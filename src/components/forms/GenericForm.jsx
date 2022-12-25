import './Forms.css';

export default function GenericForm(props) {
  
  return (
    <form className='generic-form' action="" method='post'>
        <label for="post-text" className="title">{props.titleform}</label>
        <input id="post-text" type="text" name="form-text"></input>
    </form>
  );
}
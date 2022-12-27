import './Forms.css';

export default function GenericForm(props) {
  
  return (
    <form className='generic-form' action={props.action} method={props.method}>
        <label for="post-text" className="title-form">{props.titleform}</label>
        <input className='text-form' id={props.id} type={props.type} name={props.name}></input>
    </form>
  );
  
}
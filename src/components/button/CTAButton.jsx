import './CTAButton.css';

export default function CTAButton(props) {
  
  return (
    <div className="cta-button" onClick={props.onClick}>
        {props.nameButton}
    </div>
  );
}
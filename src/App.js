import './App.css';
import GenericForm from './components/forms/GenericForm'

function App() {
  return (
    <div className="App">
      <GenericForm titleform='cardholder name' placeholder='e.g. Jane Applessed'/>
    </div>
  );
}

export default App;
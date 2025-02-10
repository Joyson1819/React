import logo from './logo.svg';
import './App.css';

function App() {
 function 
 handleNameCall() {
  const name = ["john","ravis","joyson"];
  const randomIndex = Math.floor(Math.random() * name.length);
  return name[randomIndex];
  
 }
  return (
    <div>
      Welcome to the first page {handleNameCall()}
    </div>
  );
}

export default App;


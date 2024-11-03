
import './App.css';
import Greet from './Components/01Greet';
import Welcome from './Components/02Welcome';
import Hello from './Components/03Jsx';
import Props from './Components/04props';
import Message from './Components/05States';
import Counter from './Components/06Counter';
function App() {
  return (
    <div className="App">
      {/* <Props name="ramesh" heroName="batman"/>
      <Greet name="ramesh" heroName="batman"/>
      <p>i am the sub text for props</p>
      <Welcome name="ramesh"/>
      <Hello/> */}

      {/* <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;

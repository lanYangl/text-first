import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button type="button" onClick={btn} className="btn btn-default">button</button>
    </div>
  );
}

function btn(){
  console.log("1111")
}

export default App;

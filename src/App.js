import './App.css';
import Body from './components/Body';
import fonde from './img/poke.jfif';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <Header></Header>
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <Body></Body>
        </a>
      </header>
    </div>
  );
}

export default App;

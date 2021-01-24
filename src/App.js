import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test project for CI/CD learning
        </p>
        <p>I'm testing an auto deploy on Netlify</p>
      </header>
    </div>
  );
}

export default App;

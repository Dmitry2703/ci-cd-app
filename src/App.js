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
        <p>I'm testing an auto deploy on Github pages using gh-pages tool</p>
        <p>It's very ease to deploy with gh-pages! :)</p>
      </header>
    </div>
  );
}

export default App;

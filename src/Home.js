import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          Test project for CI/CD learning
        </p>
        <p>I'm testing an auto deploy on Github pages using gh-pages tool</p>
        <p>It's very ease to deploy with gh-pages! :)</p>
        <p>Check that Netlify doesn't auto deploy pushes to another branches</p>
      </header>
    </div>
  );
}

export default Home;

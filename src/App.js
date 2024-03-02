import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Pande Camillo
    </h1>
        <p>
          Ce site web a été créer pour publier mes cours de programmation et de vous permettre à les télécharger gratuitement
    </p>
        <p>
          Ce site web est en cours de construction ... elle sera publié au mois d'avril
    </p>
        <a
          className="App-link"
          href="https://wa.me/+243893196755"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactez moi
        </a>
      </header>
    </div>
  );
}

export default App;

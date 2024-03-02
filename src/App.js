import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Code avec Camillo
        </h1>
        <div className='message'>
            <p>
                  Salut, Je m'appelle camillo, ce site web sera utilisé pour que vous téléchargez mes cours de programmations
            </p>
            <p style={{fontWeigth:'bold', fontSize:'1.3rem'}}>
                  Disponible au mois d'Avril
            </p>
        </div>
        <a
          className="App-link"
          href="https://wa.me/+243893196755"
        >
          Contactez moi
        </a>
      </main>
    </div>
  );
}

export default App;

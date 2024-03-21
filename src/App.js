import logo from './logo.jpg';
import './App.css';
import projectutil from './project-utilisateur.jpg';
import projectiss from './iss-project.jpg';

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
                  Les cours seront disponible l'année prochaine
            </p>
        </div>
        <p style={{fontWeigth:'bold', fontSize:'1.7rem', borderBottom:'2px white solid'}}>
                  Voici mes projects :
        </p>
        <div className='project'>
          <img src={projectutil} style={{width:'100%',height:'180px', border:'2px white solid', borderRadius:'8px'}}  alt="project" />
          <h2>Gestion des Utilisateurs</h2>
          <button onClick={()=>window.open("https://pandecamillo.github.io/utilisateurs/","_blank")}>Voir le project</button>
        </div>
        <div className='project'>
          <img src={projectiss} style={{width:'100%',height:'180px', border:'2px white solid', borderRadius:'8px'}}  alt="project" />
          <h2>Site Web de l'Iss</h2>
          <button onClick={()=>window.open("https://camillopande.github.io/ISS-KIN/","_blank")}>Voir le project</button>
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

import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
         <small>👆This code was coded by Muna Ali and is a
          <a href="https://github.com/MunaFrontend" 
            >open-source</a>
        </small>
        </footer>
        
      </div>
    </div>
  );
}

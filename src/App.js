import Logo from "./Logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={Logo} className="App-Logo img-fluid" alt="Logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
        <p class="text-center mt-5">
          👆This code was coded by Muna Ali and is
          <a href="https://github.com/MunaFrontend" target="_blank"
            >open-source</a
          >
        </p>
        </footer>
      </div>
    </div>
  );
}
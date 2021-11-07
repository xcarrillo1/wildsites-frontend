import './App.css';
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Sub from './components/Sub';

function App() {
  return (
    <div className="App">
      <Header />
      <Sub />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
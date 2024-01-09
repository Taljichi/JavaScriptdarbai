import './App.css';
import Navbar from './components/navbar/Nav';
import Header from './components/header/Header';
import Apiemus from './components/apiemus/Apiemus';
import Paslaugos from './components/paslaugos/Paslaugos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Apiemus />
      <Paslaugos />
      <Footer />
    </div>
  );
}

export default App;


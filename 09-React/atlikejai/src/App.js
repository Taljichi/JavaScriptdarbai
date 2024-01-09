import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Citata from './components/citata/Citata';
import Atlikejai from './components/atlikejai/Atlikejai';
import Galerija from './components/galerija/Galerija';
import Bilietai from './components/bilietai/Bilietai';
import Rasti from './components/rasti/Rasti';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Citata />
      <Atlikejai />
      <Galerija />
      <Bilietai />
      <Rasti />
      <Footer />
    </div>
  );
}

export default App;
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Plan from './routes/plan/Plan';
import Last from './routes/last/Last';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/last' element={<Last />} />
      </Routes>
    </>
  );
}

export default App;

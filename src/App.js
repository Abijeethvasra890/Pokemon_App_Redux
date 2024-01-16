import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import PLP from './Components/PLP';
import PDP from './Components/PDP';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/pokemons" element={<PLP/>}/>
        <Route path="/pokemons/:id" element={<PDP/>} />
      </Routes>
    </div>
  );
}

export default App;

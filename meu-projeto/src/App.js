import GlobalStyles from "./styles/GlobaslStyles"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from "./pages/Cadastro"
import Contato from "./pages/Contato"
import Personagens from "./pages/Personagens"
import Temporadas from "./pages/Temporadas"

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/personagens' element={<Personagens/>}/>
        <Route path='/temporadas' element={<Temporadas/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

const Inicio = () => <div>Página Inicial</div>
const Sobre = () => <div>Página Sobre</div>
const Contato = () => <div>Página Contato</div>

function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Início</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </div>
    </Router>
  )

}

export default App
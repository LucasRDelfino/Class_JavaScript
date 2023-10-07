import React from 'react';
import { BrowserRouter,Routes,Route,Link,Navigate
} from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const RotasProtegidas = ({ children}) => {
  let estaAutenticado = false;
  if(!estaAutenticado){
    return <Navigate to='/' />
  }
  return children
}

function App(){
  return(
   <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/sobre">Sobre</Link></li>   
            <li><Link to="/contato">Contato</Link></li>              
          </ul>
        </nav>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/Contato' element={
              <RotasProtegidas>
                <Contato />
              </RotasProtegidas>
              }/>
          </Routes>
      </div>
   </BrowserRouter>
  )

}

export default App
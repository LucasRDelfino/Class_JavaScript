import styled from 'styled-components'
import Pesquisa from './componentes/Search'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #cfcfcf;

`

function App() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;

import styled from 'styled-components';
import Lancamentos from './components/Lancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #cfcfcf;
`;
function App() {
  return (
    <AppContainer>
      <Lancamentos/>
    </AppContainer>
  );
}

export default App;


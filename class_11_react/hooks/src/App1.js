import React,{useState , useEffect} from 'react'


function App(){
  //Estado da lâmpada ligada : true , ligada e false para desligada
  const [ligado , setLigado] = useState(false)
  //ciclo de vida : quando o componente é montado (entramos no quarto)
  useEffect(() =>{
    setLigado(true)
    return() =>{
      //quando o componente é desmontado ou seja saímos do quarto
      setLigado(false)
    }
  },[])// A array vazia indica que esse efeito ocorre apenas na montagem e desmontagem
  return(
    <div>
      <h1>A lâmpada está {ligado ? 'LIGADA' : 'DESLIGADA'}</h1>
      <button onClick={() => setLigado(!ligado)}>Troca estágio do botão</button>
    </div>
  )
}

export default App
 
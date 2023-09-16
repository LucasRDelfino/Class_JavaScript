import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './Book'
import Input from '../Input'

const SearchContainer = styled.section`
    background-color : #cfcfcc;
    text-align: center;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h1`

`

const SubTitulo = styled.h2`


`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

function Search(){
    const [livrosPesquisados,setLivrosPesquisados] = useState([])
    return(
        <SearchContainer>
            <Titulo>Já sabe por onde começar sua leitura?</Titulo>
            <SubTitulo>Entre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder='Busque sua próxima leitura'
                onBlur={evento=>{
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </SearchContainer>
    )
}

export default Search
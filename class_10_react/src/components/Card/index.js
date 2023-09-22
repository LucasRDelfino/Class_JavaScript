function Card({titulo,subtitulo,descricao,img}){
    return(
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descricao}</p>
            <img alt="Teste1" src={img}/>
            <button>Saiba mais</button>
        </div>
    )
}

export default Card
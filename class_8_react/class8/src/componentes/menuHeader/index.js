import './estilo.css'

const linkMenu = ['Quem somos','Produtos','Serviços']

function menuHeader(){
    return(
        <ul className="opcoes">
                {linkMenu.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            )

            )}
        </ul>
            
    )
}

export default menuHeader
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function Personagens(){
    return(
        <div>
            <Header/>
            <Banner/>
            <div>Personagens</div>
            <p>Lista com todos os Personagens da série</p>
            <Footer/>
        </div>
    )
}

export default Personagens
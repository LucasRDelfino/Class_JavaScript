import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuotesSection from '../components/Quotes'
import Banner from '../components/Banner'
import image1 from '../assets/img2.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img2.png'
import ImageText from '../components/ImageText'

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <QuotesSection/>
            <ImageText
                images={[
                    {src:image1, alt:"Descrição da imagem 1", text:"Texto 1"},
                    {src:image2, alt:"Descrição da imagem 2", text:"Texto 2"},
                    {src:image3, alt:"Descrição da imagem 3", text:"Texto 3"}
                ]}
            />
            <Footer/>
        </div>
    )
}

export default Home
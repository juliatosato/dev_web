import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import TemporadasCard from '../components/TemporadasCard'
import imagem from '../assets/img2.png'

function Temporadas(){
    const seasons =[
        {id:1, title: '1º Temporada', description: 'A primeira temporada de The Office.', img: imagem},
        {id:2, title: '2º Temporada', description: 'A segunda temporada de The Office.', img: imagem},
        {id:3, title: '3º Temporada', description: 'A terceira temporada de The Office.', img: imagem},
        {id:4, title: '4º Temporada', description: 'A quarta temporada de The Office.', img: imagem},
        {id:5, title: '5º Temporada', description: 'A quinta temporada de The Office.', img: imagem},
        {id:6, title: '6º Temporada', description: 'A sexta temporada de The Office.', img: imagem},
        {id:7, title: '7º Temporada', description: 'A sétima temporada de The Office.', img: imagem},
        {id:8, title: '8º Temporada', description: 'A oitava temporada de The Office.', img: imagem},
        {id:9, title: '9º Temporada', description: 'A nona temporada de The Office.', img: imagem},
    ]
    return(
        <div>
                <Header/>
                <Banner/>
                <TemporadasCard seasons={seasons}/>
                <Footer/>
        </div>
    )
}

export default Temporadas

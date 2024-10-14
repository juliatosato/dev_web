import React, { useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ImageText from '../components/ImageText'
import imagem from '../assets/img2.png'


function Home(){
    const allSeasons =[
        {id: 1, src: imagem, alt: 'Descrição da imagem 1', text: '1º temporada'},
        {id: 2, src: imagem, alt: 'Descrição da imagem 2', text: '2º temporada'},
        {id: 3, src: imagem, alt: 'Descrição da imagem 3', text: '3º temporada'},
        {id: 4, src: imagem, alt: 'Descrição da imagem 4', text: '4º temporada'},
        {id: 5, src: imagem, alt: 'Descrição da imagem 5', text: '5º temporada'},
        {id: 6, src: imagem, alt: 'Descrição da imagem 6', text: '6º temporada'},
        {id: 7, src: imagem, alt: 'Descrição da imagem 7', text: '7º temporada'},
        {id: 8, src: imagem, alt: 'Descrição da imagem 8', text: '8º temporada'},
        {id: 9, src: imagem, alt: 'Descrição da imagem 9', text: '9º temporada'},
    ]
    const [highlightedSeasons, sethighlightedSeasons] = useState(allSeasons.slice(.0,3))
    useEffect(() =>{
        const rotateSeasons = () =>{
            sethighlightedSeasons((prevSeasons) =>{
                const currentIndex = allSeasons.findIndex((s) => s.id === prevSeasons[0].id)
                const nextIndex = (currentIndex + 3) % allSeasons.length
                return allSeasons.slice(nextIndex, nextIndex + 3)
            })
        }
        const interval = setInterval(rotateSeasons, 5000)
        return() => clearInterval(interval)
    }, [allSeasons])
    return(
        <div>
            <Header/>
            <Banner/>
            <ImageText 
                images={highlightedSeasons}/>
            <Footer/>
        </div>
    )
}

export default Home

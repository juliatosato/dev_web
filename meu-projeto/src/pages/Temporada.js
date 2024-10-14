import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import imagem from '../assets/img2.png'

const Container = styled.section`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
`

const Img = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
`

const Title = styled.h1`
    margin-top: 20px;
`

const Description = styled.p`
    margin-top: 10px;
    font-size: 1.2em;
`

function Temporada(){
    const {id} = useParams()
    const seasonData ={
        1: {title: '1º Temporada', description: 'A primeira temporada de The Office.', img: imagem},
        2: {title: '2º Temporada', description: 'A segunda temporada de The Office.', img: imagem},
        3: {title: '3º Temporada', description: 'A terceira temporada de The Office.', img: imagem},
        4: {title: '4º Temporada', description: 'A quarta temporada de The Office.', img: imagem},
        5: {title: '5º Temporada', description: 'A quinta temporada de The Office.', img: imagem},
        6: {title: '6º Temporada', description: 'A sexta temporada de The Office.', img: imagem},
        7: {title: '7º Temporada', description: 'A sétima temporada de The Office.', img: imagem},
        8: {title: '8º Temporada', description: 'A oitava temporada de The Office.', img: imagem},
        9: {title: '9º Temporada', description: 'A nona temporada de The Office.', img: imagem},
    }
    const temporada = seasonData[id]
    return(
        <div>
            <Header/>
            <Banner/>
                <Container>
                    <Img src={temporada.img} alt={temporada.title} />
                    <Title>{temporada.title}</Title>
                    <Description>{temporada.description}</Description>
                </Container>
            <Footer/>
        </div>
    )
}

export default Temporada